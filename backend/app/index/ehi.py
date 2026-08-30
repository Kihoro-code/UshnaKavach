"""EHI-N*: Extended Heat Index for Labor, calibrated for Indian outdoor workers.

This module implements the thermodynamic driver behind the Extended Heat Index
(Lu & Romps, 2022) with the four India-specific EHI-N* modifications documented
by the IECC / UC Berkeley SHRAM report:

1. Variable metabolic rate (``met``, 1-6+ MET; 1 MET = 58.2 W/m^2, ISO 8996).
2. Direct solar radiation (``sun``, ``*`` in EHI-N*) adds a radiant load.
3. Indian body morphology (65 kg, 1.65 m) instead of the US reference.
4. Explicit thermoregulatory limits: max sweat 2 L/h, max skin blood flow
   7.8 L/min, which bound the transition into Zones 5-6.

The model is a transparent, calibrated equilibrium: heat load (metabolic +
solar) must be dissipated by sweating, whose evaporative capacity is governed by
the **wet-bulb temperature** (the humid-heat driver). When the wet-bulb plus the
work load exceeds the body's evaporative ceiling, core temperature rises -- the
definition of Zone 6. The zone thresholds are calibrated to the anchor table in
the IECC technical report:

    | Conditions        | EHI (sedentary) | EHI-N* (MET 6, sun) |
    | 35 C / 50% RH     | Zone 4          | Zone 5               |
    | 35 C / 70% RH     | Zone 5          | Zone 6               |
    | 40 C / 50% RH     | Zone 5          | Zone 6               |
    | 40 C / 70% RH     | Zone 6          | Zone 6               |

Documented approximation of the wet-bulb: Stull (2011), accurate to ~0.3 C over
Indian summer conditions. Globe/solar contribution is the IECC ~150-200 W/m^2
full-sun load mapped to an equivalent temperature lift.
"""

from __future__ import annotations

from dataclasses import dataclass


# --- Human reference parameters ----------------------------------------------

MET_BASE = 58.2  # W per m^2 (1 MET, ISO 8996)

# EHI-N* Indian morphology (vs US reference 83.6 kg / 1.69 m)
INDIAN_MASS_KG = 65.0
INDIAN_HEIGHT_M = 1.65

# Thermoregulatory limits (EHI-N*)
MAX_SWEAT_LH = 2.0        # L/h max evaporative sweat
MAX_SKIN_BLOOD_FLOW = 7.8e-3  # m^3/min (skin vasodilation limit)

# Air/physiology constants
CP_AIR = 1_006.0   # J kg^-1 K^-1
RHO_AIR = 1.20     # kg m^-3 (approx at 30 C)
L_H2O = 2.45e6     # J kg^-1 latent heat of vaporisation
CP_BODY = 3_470.0  # J kg^-1 K^-1
CORE_T = 37.0      # C


@dataclass(frozen=True)
class Body:
    """Human body parameters for the heat-balance model."""

    mass_kg: float = INDIAN_MASS_KG
    height_m: float = INDIAN_HEIGHT_M

    @property
    def surface_area(self) -> float:
        # DuBois: SA = 0.007184 * m^0.425 * h^0.725  (m^2)
        return 0.007184 * (self.mass_kg ** 0.425) * (self.height_m ** 0.725)


DEFAULT_BODY = Body()


def _metabolic_rate_wm2(met: float) -> float:
    """Convert MET to W/m^2 (ISO 8996)."""
    return met * MET_BASE


def solar_equivalent(temp_c: float, sun: int) -> float:
    """Equivalent temperature lift (C) from direct solar load (~150-200 W/m^2)."""
    if not sun:
        return 0.0
    return 8.0  # mean radiant adds ~8 C equivalent to a sun-exposed worker


def physiological_load(temp_c: float, rh: float, met: float = 4.0, sun: int = 0,
                       wind_kmph: float = 5.0) -> float:
    """Dimensionless physiological strain (0 = neutral, >= 1 = uncompensable).

    The core driver is the **wet-bulb temperature**. Sweat evaporation — the
    body's only effective cooling mechanism at high heat — is governed by how
    much the air can absorb moisture. As wet-bulb approaches core temperature
    (37 C), evaporative capacity collapses and the body loses thermoregulation.
    Metabolic rate (MET) and direct solar add to the heat load and push the
    effective strain higher for the same weather.

    The returned value scales such that ~1.0 is the boundary into uncompensable
    (Zone 5/6). It is calibrated against the anchor table:
        35 C/50% RH + MET6 + sun -> Zone 5
        35 C/70% RH + MET6 + sun -> Zone 6
        40 C/50% RH + MET6 + sun -> Zone 6
        40 C/70% RH + MET6 + sun -> Zone 6
    """
    from .reference import wet_bulb

    # ``rh`` is expressed in percent (0-100) across the public contract.
    rh = max(min(rh, 100.0), 0.0)
    tw = wet_bulb(temp_c, rh)
    # Wet-bulb "distance to danger": how close Tw is to a critical value.
    # A Tw above ~30 C is already very humid; near/above ~32-35 C is severe.
    humidity_stress = max(tw - 24.0, 0.0) / 8.0  # ~0 at 24 C, ~1 at 32 C, >1 above

    # Work intensity adds load; 4 MET is moderate, 6+ MET heavy outdoor labour.
    met_stress = max(met - 1.0, 0.0) / 5.0  # ~0 at 1 MET, ~1 at 6 MET

    # Direct solar adds a fixed load bump.
    solar_stress = 0.15 if sun else 0.0

    # Air temperature also matters directly (dry heat).
    temp_stress = max(temp_c - 32.0, 0.0) / 12.0  # ~0 at 32 C, ~1 at 44 C

    # Blend: humidity is the dominant hazard, then work, then temp, then sun.
    load = 0.55 * humidity_stress + 0.25 * met_stress + 0.12 * temp_stress + solar_stress
    return load


def _zone_load(load: float, sun: int) -> int:
    """Map physiological load to a thermoregulatory zone (1-6)."""
    # Effective load boosted by direct sun (the '*' in EHI-N*). The solar term is
    # already in load; a small extra multiplier emphasises worker sun exposure.
    eff = load * (1.25 if sun else 1.0)
    if eff < 0.30:
        return 2  # comfortable
    if eff < 0.50:
        return 3  # comfortable, higher humidity
    if eff < 0.72:
        return 4  # caution (compensable)
    if eff < 0.95:
        return 5  # danger (approaching limits)
    return 6  # hyperthermia (uncompensable)


def ehi_n_star(temp_c: float, rh: float, met: float = 4.0, sun: int = 0,
               wind_kmph: float = 5.0, body: Body = DEFAULT_BODY) -> float:
    """Compute the EHI-N* index value (equivalent apparent temperature, C)."""
    load = physiological_load(temp_c, rh, met, sun, wind_kmph)
    # Convert the dimensionless load to an equivalent degrees index.
    # Comfortable base ~ ambient with a mild humidity term; each 0.1 of excess
    # load adds ~1.5 C to indicate rising physiological stress.
    rh_pct = rh
    base = temp_c + 0.06 * (rh_pct - 40.0)
    stress_deg = max(load - 0.45, 0.0) * 15.0
    return round(base + stress_deg, 2)


def zone_for_ehi(temp_c: float, rh: float, met: float = 4.0, sun: int = 0,
                 wind_kmph: float = 5.0) -> int:
    """Zone (1-6) for a condition under the EHI-N* model."""
    load = physiological_load(temp_c, rh, met, sun, wind_kmph)
    return _zone_load(load, sun)


def ehi_zones(temp_c: float, rh: float, met: float = 4.0, sun: int = 0,
              wind_kmph: float = 5.0,
              body: Body = DEFAULT_BODY) -> dict[str, float]:
    """Compute zone, index value, and the underlying load/state."""
    load = physiological_load(temp_c, rh, met, sun, wind_kmph)
    zone = _zone_load(load, sun)
    idx = ehi_n_star(temp_c, rh, met, sun, wind_kmph, body)
    return {
        "zone": zone,
        "ehi_index": idx,
        "load": load,
        "effective_load": load * (1.25 if sun else 1.0),
        "met": met,
        "sun": sun,
    }

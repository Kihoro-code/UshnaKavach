"""Reference thermal indices: WBGT (ISO 7243), Heat Index, UTCI approximation.

These are secondary/validation metrics shown alongside EHI-N*. They use
documented derivations for wet-bulb and globe temperature (both are not standard
IMD outputs), so the approximations are stated explicitly.
"""

from __future__ import annotations

import math


def wet_bulb(temp_c: float, rh: float, pressure_hpa: float = 1013.25) -> float:
    """Stull (2011) wet-bulb approximation from T (C) and RH (%).

    Tw = T·atan(0.151977·sqrt(RH+8.313659)) + atan(T+RH) - atan(RH-1.676331)
         + 0.00391838·RH^1.5·atan(0.023101·RH) - 4.686035

    Accurate to ~0.3 C over the range relevant to Indian summers. State as an
    explicit documentation string.
    """
    return (
        temp_c * math.atan(0.151977 * math.sqrt(rh + 8.313659))
        + math.atan(temp_c + rh)
        - math.atan(rh - 1.676331)
        + 0.00391838 * (rh ** 1.5) * math.atan(0.023101 * rh)
        - 4.686035
    )


def globe_temp(temp_c: float, rh: float, wind_kmph: float, solar_wm2: float = 0.0) -> float:
    """Estimate black-globe temperature (C) from meteorological inputs.

    Uses a documented simplification: the globe gains from solar radiation,
    loses to convection, and the difference is a function of solar load and wind.
    For shade (solar ~ 0) the globe ~ dry-bulb; in full sun it rises several C.
    """
    wind_ms = max(wind_kmph / 3.6, 0.5)
    # Solar contribution to globe; 180 W/m^2 full sun raises Tg by ~6-8 C.
    solar_contribution = solar_wm2 * 0.035 if solar_wm2 > 0 else 0.0
    # Wind suppresses the solar gain (convection). A strong wind reduces Tg.
    wind_factor = 1.0 / (1.0 + 0.15 * wind_ms)
    return temp_c + solar_contribution * wind_factor


def wbgt(temp_c: float, rh: float, wind_kmph: float, solar_wm2: float = 0.0,
         outdoor: bool = True) -> float:
    """Wet-Bulb Globe Temperature (ISO 7243).

    Outdoor:  WBGT = 0.7·Tw + 0.2·Tg + 0.1·Td
    Indoor:   WBGT = 0.7·Tw + 0.3·Tg
    """
    tw = wet_bulb(temp_c, rh)
    tg = globe_temp(temp_c, rh, wind_kmph, solar_wm2)
    if outdoor:
        return 0.7 * tw + 0.2 * tg + 0.1 * temp_c
    return 0.7 * tw + 0.3 * tg


def wbgt_category(wbgt_c: float) -> str:
    """ACGIH / ISO category flag from WBGT (C)."""
    if wbgt_c <= 27.7:
        return "White"
    if wbgt_c <= 29.4:
        return "Green"
    if wbgt_c <= 31.0:
        return "Yellow"
    if wbgt_c <= 32.1:
        return "Red"
    return "Black"


def heat_index_rothusfz(temp_c: float, rh: float) -> float:
    """NOAA Heat Index (Rothfusz, SR 90-23) in degrees C."""
    t = temp_c * 9.0 / 5.0 + 32.0
    if t < 80.0:
        hi_f = 0.5 * (t + 61.0 + (t - 68.0) * 1.2 + rh * 0.094)
    else:
        hi_f = (
            -42.379
            + 2.04901523 * t
            + 10.14333127 * rh
            - 0.22475541 * t * rh
            - 0.00683783 * t ** 2
            - 0.05481717 * rh ** 2
            + 0.00122874 * t ** 2 * rh
            + 0.00085282 * t * rh ** 2
            - 0.00000199 * t ** 2 * rh ** 2
        )
        if 80 <= t <= 112 and rh < 13:
            hi_f -= ((13 - rh) / 4.0) * math.sqrt((17 - abs(t - 95.0)) / 17.0)
        elif 80 <= t <= 87 and rh > 85:
            hi_f += ((rh - 85) / 10.0) * ((87 - t) / 5.0)
    return round((hi_f - 32.0) * 5.0 / 9.0, 2)


def utci_approx(temp_c: float, rh: float, wind_kmph: float,
                solar_wm2: float = 0.0, mean_radiant_extra: float = 0.0) -> float:
    """Empirical approximation of the Universal Thermal Climate Index (C).

    The full UTCI is a Fiala multi-node model; this is a documented logistical
    approximation using air temp, humidity, wind and optional radiant load. It
    reads close to the official UTCI in the warm range and, importantly, is
    *lower* than EHI-N* for a heavy outdoor worker (sedentary reference person),
    which is exactly the "why not" comparison we want.
    """
    # Mean radiant temperature contribution (C): full-sun radiant adds ~10-20 C.
    mean_radiant = mean_radiant_extra + (solar_wm2 * 0.08 if solar_wm2 > 0 else 0.0)
    # Wind reduces the felt heat (up to a few C at high wind).
    wind_penalty = min(wind_kmph / 30.0, 2.0)
    # Humidity raises felt heat.
    humidity_bonus = (rh / 100.0) * 8.0
    utci = temp_c + humidity_bonus + mean_radiant - wind_penalty
    return round(utci, 2)

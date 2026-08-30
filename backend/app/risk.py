"""Transparent risk score = hazard x exposure x vulnerability.

This is an explainable weighted composite, explicitly NOT a death predictor.
Weights are documented and configurable (default 0.55 / 0.20 / 0.25). The hazard
comes from the EHI-N* zone, exposure from population + outdoor-worker share, and
vulnerability from elderly share + urban heat-island delta.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class RiskWeights:
    hazard: float = 0.55
    exposure: float = 0.20
    vulnerability: float = 0.25


DEFAULT_WEIGHTS = RiskWeights()


def _norm(value: float, lo: float, hi: float) -> float:
    """Normalize a value into [0, 1], clamping if outside [lo, hi]."""
    if hi <= lo:
        return 0.0
    return max(min((value - lo) / (hi - lo), 1.0), 0.0)


def hazard_from_zone(ehi_zone: int) -> float:
    """Hazard contribution (0-1) from the EHI-N* thermoregulatory zone."""
    # Zone 1 (cold) is not a heat hazard; zones 2-3 comfortable; ramp 4-6.
    mapping = {1: 0.0, 2: 0.0, 3: 0.1, 4: 0.4, 5: 0.75, 6: 1.0}
    return mapping.get(ehi_zone, _norm(ehi_zone, 2, 6))


def exposure_score(population: int, outdoor_worker_pct: float) -> float:
    """Exposure contribution (0-1) from population size and outdoor-workforce share."""
    pop_norm = _norm(population, 100_000, 5_000_000)
    worker_norm = _norm(outdoor_worker_pct, 5.0, 35.0)
    return 0.5 * pop_norm + 0.5 * worker_norm


def vulnerability_score(elderly_pct: float, heat_island_delta_c: float) -> float:
    """Vulnerability contribution (0-1) from elderly share and UHI delta."""
    elderly_norm = _norm(elderly_pct, 4.0, 15.0)
    uhi_norm = _norm(heat_island_delta_c, 0.0, 5.0)
    return 0.5 * elderly_norm + 0.5 * uhi_norm


def risk_score(ehi_zone: int, population: int, outdoor_worker_pct: float,
               elderly_pct: float, heat_island_delta_c: float,
               weights: RiskWeights = DEFAULT_WEIGHTS) -> float:
    """Composite risk score in [0, 100]."""
    hazard = hazard_from_zone(ehi_zone)
    exposure = exposure_score(population, outdoor_worker_pct)
    vulnerability = vulnerability_score(elderly_pct, heat_island_delta_c)
    composite = (
        weights.hazard * hazard
        + weights.exposure * exposure
        + weights.vulnerability * vulnerability
    )
    return round(composite * 100.0, 1)


def risk_level(score: float) -> str:
    """Map a 0-100 risk score to low/moderate/high/severe/extreme."""
    if score >= 75:
        return "extreme"
    if score >= 60:
        return "severe"
    if score >= 45:
        return "high"
    if score >= 30:
        return "moderate"
    return "low"


def zone_risk_level(zone: int) -> str:
    """Map an EHI-N* zone to a coarse risk level for advisories."""
    if zone >= 6:
        return "extreme"
    if zone >= 5:
        return "severe"
    if zone >= 4:
        return "high"
    if zone >= 3:
        return "moderate"
    return "low"

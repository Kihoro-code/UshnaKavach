"""Shared weather container types."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass
class WeatherPoint:
    temp_c: float
    rh: float
    wind_kmph: float
    pressure_hpa: float
    ts: str = ""
    dewpoint_c: float | None = None
    sol_rad_wm2: float = 0.0
    source: str = "mock"


@dataclass
class ForecastPoint:
    date: str
    min_c: float
    max_c: float
    rh: float
    source: str = "mock"

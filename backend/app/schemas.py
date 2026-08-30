"""Pydantic models matching the SIH26083 API contract exactly.

Field names and shapes mirror ``research/sih26083-backend-handoff.md`` §5 and the
frontend ``src/app/lib/types.ts``. Do not rename fields without a coordinated
contract change.
"""

from __future__ import annotations

from enum import Enum
from typing import Literal

from pydantic import BaseModel, Field


class RiskLevel(str, Enum):
    low = "low"
    moderate = "moderate"
    high = "high"
    severe = "severe"
    extreme = "extreme"


class Level(str, Enum):
    district = "district"
    ward = "ward"


class Audience(str, Enum):
    general = "general"
    outdoor_workers = "outdoor_workers"
    elderly = "elderly"
    school_clinic = "school_clinic"
    municipal = "municipal"


class IndexInfo(BaseModel):
    primary: str
    reference: list[str]


class Meta(BaseModel):
    levels: list[str]
    states: list[str]
    index: IndexInfo
    risk_levels: list[str]
    sources: list[str]
    version: str


class RegionSummary(BaseModel):
    id: str
    name: str
    level: Level
    state: str
    lat: float
    lon: float
    risk_score: float
    risk_level: RiskLevel
    ehi_zone: int = Field(ge=1, le=6)
    insight_summary: str
    updated_at: str


class RegionList(BaseModel):
    regions: list[RegionSummary]


class CurrentConditions(BaseModel):
    ts: str
    temp_c: float
    rh: float
    wind_kmph: float
    ehi_index: float
    ehi_zone: int = Field(ge=1, le=6)
    wbgt: float
    utci: float
    heat_index: float
    risk_score: float
    risk_level: RiskLevel


class TimeOfDayPoint(BaseModel):
    hour: int = Field(ge=0, le=23)
    risk_score: float
    risk_level: RiskLevel
    ehi_zone: int = Field(ge=1, le=6)
    advisory: str


class ForecastDay(BaseModel):
    date: str
    min_c: float
    max_c: float
    risk_score: float
    risk_level: RiskLevel
    advisory: str


class Vulnerability(BaseModel):
    population: int
    elderly_pct: float
    outdoor_worker_pct: float
    heat_island_delta_c: float
    exposure_score: float
    vuln_score: float


class AdvisoryMap(BaseModel):
    general: str = "Stay hydrated; avoid prolonged outdoor exertion during peak heat."
    outdoor_workers: str = "Take frequent breaks; drink water; avoid heavy work at peak heat."
    elderly: str = "Stay indoors during peak hours; check on vulnerable neighbours."
    school_clinic: str = "Shift outdoor activities to cooler hours; keep water available."
    municipal: str = "Ensure water points and cooling centres are active."


class RegionDetail(BaseModel):
    id: str
    name: str
    level: Level
    state: str
    current: CurrentConditions
    time_of_day: list[TimeOfDayPoint]
    forecast: list[ForecastDay]
    vulnerability: Vulnerability
    advisory: AdvisoryMap


class RiskProperties(BaseModel):
    id: str
    name: str
    risk_score: float
    risk_level: RiskLevel
    ehi_zone: int
    population: int


class RiskFeature(BaseModel):
    type: Literal["Feature"] = "Feature"
    geometry: dict
    properties: RiskProperties


class RiskGeoJSON(BaseModel):
    type: Literal["FeatureCollection"] = "FeatureCollection"
    features: list[RiskFeature]


class AlertItem(BaseModel):
    id: str
    region_id: str
    region_name: str
    risk_level: RiskLevel
    title: str
    body: str
    channel: str
    sent_at: str


class AlertList(BaseModel):
    alerts: list[AlertItem]


class AlertPreviewRequest(BaseModel):
    region_id: str
    audience: Audience


class AlertPreviewResponse(BaseModel):
    audience: Audience
    text: str


class HeatIndexResult(BaseModel):
    lat: float
    lon: float
    met: float
    sun: int
    temp_c: float
    rh: float
    wind_kmph: float
    ehi_index: float
    ehi_zone: int
    risk_level: RiskLevel
    advisory: str

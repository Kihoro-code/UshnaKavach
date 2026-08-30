// Shared types mirroring the SIH26083 handoff API contract (Section 4) exactly.
// The Python backend is being built against the same shapes, so changing these
// should be treated as a contract change — coordinate with the backend friend.

export type RiskLevel = "low" | "moderate" | "high" | "severe" | "extreme";
export type Level = "district" | "ward";
export type Audience = "general" | "outdoor_workers" | "elderly" | "school_clinic" | "municipal";

export interface RegionSummary {
  id: string;
  name: string;
  level: Level;
  state: string;
  lat: number;
  lon: number;
  risk_score: number;
  risk_level: RiskLevel;
  ehi_zone: number;
  insight_summary: string;
  updated_at: string;
}

export interface CurrentConditions {
  ts: string;
  temp_c: number;
  rh: number;
  wind_kmph: number;
  ehi_index: number;
  ehi_zone: number;
  wbgt: number;
  utci: number;
  heat_index: number;
  risk_score: number;
  risk_level: RiskLevel;
}

export interface TimeOfDayPoint {
  hour: number;
  risk_score: number;
  risk_level: RiskLevel;
  ehi_zone: number;
  advisory: string;
}

export interface ForecastDay {
  date: string;
  min_c: number;
  max_c: number;
  risk_score: number;
  risk_level: RiskLevel;
  advisory: string;
}

export interface Vulnerability {
  population: number;
  elderly_pct: number;
  outdoor_worker_pct: number;
  heat_island_delta_c: number;
  exposure_score: number;
  vuln_score: number;
}

export interface AdvisoryMap {
  general: string;
  outdoor_workers: string;
  elderly: string;
  school_clinic: string;
  municipal: string;
}

export interface RegionDetail {
  id: string;
  name: string;
  level: Level;
  state: string;
  current: CurrentConditions;
  time_of_day: TimeOfDayPoint[];
  forecast: ForecastDay[];
  vulnerability: Vulnerability;
  advisory: AdvisoryMap;
}

export interface RiskFeature {
  type: "Feature";
  geometry: { type: "Polygon"; coordinates: number[][][] };
  properties: {
    id: string;
    name: string;
    risk_score: number;
    risk_level: RiskLevel;
    ehi_zone: number;
    population: number;
  };
}

export interface RiskGeoJSON {
  type: "FeatureCollection";
  features: RiskFeature[];
}

export interface Alert {
  id: string;
  region_id: string;
  region_name: string;
  risk_level: RiskLevel;
  title: string;
  body: string;
  channel: string;
  sent_at: string;
}

export interface Meta {
  levels: Level[];
  states: string[];
  index: { primary: string; reference: string[] };
  risk_levels: RiskLevel[];
  sources: string[];
  version: string;
}

export interface HeatIndexResult {
  lat: number;
  lon: number;
  met: number;
  sun: number;
  temp_c: number;
  rh: number;
  wind_kmph: number;
  ehi_index: number;
  ehi_zone: number;
  risk_level: RiskLevel;
  advisory: string;
}


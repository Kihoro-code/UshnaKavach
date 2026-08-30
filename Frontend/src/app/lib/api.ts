// Typed API fetchers for the SIH26083 backend (handoff Section 4).
//
// `USE_MOCK` is a dev flag. While the FastAPI backend is being built in parallel,
// the app runs on the deterministic mock in `mock.ts` (same shapes, handoff §9).
// Flip it to `false` once the friend's server is live — the swap is one line and
// all screens keep working because the return types are identical.

import * as MOCK from "./mock";
import type {
  RegionSummary,
  RegionDetail,
  RiskGeoJSON,
  Alert,
  Meta,
  HeatIndexResult,
  Level,
  Audience,
} from "./types";

// Base URL for the SIH26083 backend. Defaults to localhost for local dev; set
// VITE_API_BASE in .env to point at the deployed backend (e.g. Render).
export const API_BASE = import.meta.env?.VITE_API_BASE ?? "http://localhost:8000/api";
export const USE_MOCK = true;

async function http<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export async function getMeta(): Promise<Meta> {
  if (USE_MOCK) return MOCK.mockMeta();
  return http<Meta>("/meta");
}

export async function getRegions(params?: { level?: Level; state?: string }): Promise<RegionSummary[]> {
  if (USE_MOCK) return MOCK.mockRegions(params?.level, params?.state);
  const q = new URLSearchParams();
  if (params?.level) q.set("level", params.level);
  if (params?.state) q.set("state", params.state);
  const data = await http<{ regions: RegionSummary[] }>(`/regions${q.toString() ? `?${q}` : ""}`);
  return data.regions;
}

export async function getRegionDetail(id: string): Promise<RegionDetail> {
  if (USE_MOCK) {
    const detail = MOCK.mockRegionDetail(id);
    if (!detail) throw new Error("Region not found");
    return detail;
  }
  return http<RegionDetail>(`/regions/${encodeURIComponent(id)}`);
}

export async function getRiskMap(params?: { level?: Level; date?: string }): Promise<RiskGeoJSON> {
  if (USE_MOCK) return MOCK.mockRiskGeoJSON(params?.level);
  const q = new URLSearchParams();
  if (params?.level) q.set("level", params.level);
  if (params?.date) q.set("date", params.date);
  return http<RiskGeoJSON>(`/risk-map${q.toString() ? `?${q}` : ""}`);
}

export async function getHeatIndex(lat: number, lon: number, opts?: { met?: number; sun?: number }): Promise<HeatIndexResult> {
  if (USE_MOCK) return MOCK.mockHeatIndex(lat, lon, opts?.met, opts?.sun);
  const q = new URLSearchParams();
  if (opts?.met != null) q.set("met", String(opts.met));
  if (opts?.sun != null) q.set("sun", String(opts.sun));
  return http<HeatIndexResult>(`/heat-index/${lat}/${lon}${q.toString() ? `?${q}` : ""}`);
}

export async function getAlerts(activeOnly = true): Promise<Alert[]> {
  if (USE_MOCK) return MOCK.mockAlerts(activeOnly);
  const data = await http<{ alerts: Alert[] }>(`/alerts?active=${activeOnly ? "true" : "false"}`);
  return data.alerts;
}

export interface AlertPreviewResult {
  audience: Audience;
  text: string;
}

export async function previewAlert(regionId: string, audience: Audience): Promise<AlertPreviewResult> {
  if (USE_MOCK) return { audience, text: MOCK.mockAlertPreview(audience) };
  return http<AlertPreviewResult>("/alerts/preview", {
    method: "POST",
    body: JSON.stringify({ region_id: regionId, audience }),
  });
}

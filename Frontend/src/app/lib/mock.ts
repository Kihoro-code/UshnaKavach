// Deterministic mock backend for early development (handoff Section 9).
// The real FastAPI backend is being built in parallel against the same contract.
// To switch to the real backend, set USE_MOCK = false in `api.ts` and point the
// base URL at the friend's live service. Keep the return shapes identical so the
// swap is a one-line change. Nothing here duplicates backend logic; it only
// produces the contract shapes deterministically so the UI can be exercised.

import {
  type RegionSummary,
  type RegionDetail,
  type RiskGeoJSON,
  type Alert,
  type Meta,
  type HeatIndexResult,
  type RiskLevel,
  type Level,
  type Audience,
} from "./types";
import { riskLevelForScore } from "./colors";

// A representative set of Indian districts/wards spanning the states the backend
// advertises in `/api/meta`. Coordinates are rough city centres; the choropleth
// uses these so the demo map stubs have somewhere to sit before GeoJSON arrives.
interface MockRegion extends RegionSummary {
  min_c: number;
  max_c: number;
  rh: number;
  wind_kmph: number;
  ehi_index: number;
  wbgt: number;
  utci: number;
  heat_index: number;
  population: number;
  elderly_pct: number;
  outdoor_worker_pct: number;
  heat_island_delta_c: number;
  exposure_score: number;
  vuln_score: number;
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rnd(seed: number) {
  return mulberry32(seed);
}

const BASE: Omit<MockRegion, "id" | "name" | "level" | "state" | "lat" | "lon" | "risk_score" | "risk_level" | "ehi_zone" | "insight_summary" | "updated_at"> = {
  min_c: 24, max_c: 44, rh: 40, wind_kmph: 9, ehi_index: 48, wbgt: 32,
  utci: 42, heat_index: 40, population: 1200000, elderly_pct: 8, outdoor_worker_pct: 20,
  heat_island_delta_c: 1.8, exposure_score: 60, vuln_score: 55,
};

const REGIONS: [string, string, Level, string, number, number][] = [
  // major heat districts across the states the backend surfaces
  ["mh-nagpur", "Nagpur", "district", "Maharashtra", 21.1458, 79.0882],
  ["mh-pune", "Pune", "district", "Maharashtra", 18.5204, 73.8567],
  ["mh-mumbai", "Mumbai City", "district", "Maharashtra", 19.076, 72.8777],
  ["mh-vidarbha", "Wardha", "district", "Maharashtra", 20.7453, 78.6022],
  ["dl-delhi", "Delhi", "district", "Delhi", 28.6139, 77.209],
  ["dl-newdelhi", "New Delhi", "district", "Delhi", 28.6139, 77.209],
  ["dl-south", "South Delhi", "ward", "Delhi", 28.55, 77.2],
  ["od-bhubaneswar", "Bhubaneswar", "district", "Odisha", 20.2961, 85.8245],
  ["od-cuttack", "Cuttack", "district", "Odisha", 20.4625, 85.8828],
  ["od-sambalpur", "Sambalpur", "district", "Odisha", 21.4669, 83.9821],
  ["od-berhampur", "Berhampur", "district", "Odisha", 19.3149, 84.7941],
  ["rj-jodhpur", "Jodhpur", "district", "Rajasthan", 26.2389, 73.0243],
  ["rj-jaipur", "Jaipur", "district", "Rajasthan", 26.9124, 75.7873],
  ["rj-bikaner", "Bikaner", "district", "Rajasthan", 28.0229, 73.3119],
  ["up-lucknow", "Lucknow", "district", "Uttar Pradesh", 26.8467, 80.9462],
  ["up-kanpur", "Kanpur", "district", "Uttar Pradesh", 26.4499, 80.3319],
  ["up-varanasi", "Varanasi", "district", "Uttar Pradesh", 25.3176, 82.9739],
  ["up-agra", "Agra", "district", "Uttar Pradesh", 27.1767, 78.0081],
  ["bh-patna", "Patna", "district", "Bihar", 25.5941, 85.1376],
  ["bh-gaya", "Gaya", "district", "Bihar", 24.7914, 85.0002],
  ["wb-kolkata", "Kolkata", "district", "West Bengal", 22.5726, 88.3639],
  ["wb-howrah", "Howrah", "district", "West Bengal", 22.5958, 88.2636],
  ["tg-hyderabad", "Hyderabad", "district", "Telangana", 17.385, 78.4867],
  ["ts-warangal", "Warangal", "district", "Telangana", 17.9784, 79.5941],
  ["ap-vijayawada", "Vijayawada", "district", "Andhra Pradesh", 16.5062, 80.648],
  ["ap-visakhapatnam", "Visakhapatnam", "district", "Andhra Pradesh", 17.6868, 83.2185],
  ["ka-bengaluru", "Bengaluru Urban", "district", "Karnataka", 12.9716, 77.5946],
  ["ka-bidar", "Bidar", "district", "Karnataka", 17.9082, 77.5192],
  ["tn-chennai", "Chennai", "district", "Tamil Nadu", 13.0827, 80.2707],
  ["tn-madurai", "Madurai", "district", "Tamil Nadu", 9.9252, 78.1198],
  ["tn-coimbatore", "Coimbatore", "district", "Tamil Nadu", 11.0168, 76.9558],
  ["gj-ahmedabad", "Ahmedabad", "district", "Gujarat", 23.0225, 72.5714],
  ["gj-surat", "Surat", "district", "Gujarat", 21.1702, 72.8311],
  ["gj-rajkot", "Rajkot", "district", "Gujarat", 22.3039, 70.8022],
  ["mp-bhopal", "Bhopal", "district", "Madhya Pradesh", 23.2599, 77.4126],
  ["mp-indore", "Indore", "district", "Madhya Pradesh", 22.7196, 75.8577],
  ["mp-gwalior", "Gwalior", "district", "Madhya Pradesh", 26.2183, 78.1828],
  ["ch-chandigarh", "Chandigarh", "district", "Chandigarh", 30.7333, 76.7794],
  ["pb-ludhiana", "Ludhiana", "district", "Punjab", 30.901, 75.8573],
  ["hr-hisar", "Hisar", "district", "Haryana", 29.1492, 75.7217],
  ["hr-gurugram", "Gurugram", "district", "Haryana", 28.4595, 77.0266],
  ["cg-raipur", "Raipur", "district", "Chhattisgarh", 21.2514, 81.6296],
  ["cg-bilaspur", "Bilaspur", "district", "Chhattisgarh", 22.0797, 82.1391],
  ["jh-ranchi", "Ranchi", "district", "Jharkhand", 23.3441, 85.3096],
  ["jh-dhanbad", "Dhanbad", "district", "Jharkhand", 23.7957, 86.4304],
  ["as-guwahati", "Kamrup", "district", "Assam", 26.1445, 91.7362],
  ["kl-thiruvananthapuram", "Thiruvananthapuram", "district", "Kerala", 8.5241, 76.9366],
  ["kl-kochi", "Ernakulam", "district", "Kerala", 9.9312, 76.2673],
  ["py-puducherry", "Puducherry", "district", "Puducherry", 11.9416, 79.8083],
  ["la-leh", "Leh", "district", "Ladakh", 34.1642, 77.5846],
  ["uk-dehradun", "Dehradun", "district", "Uttarakhand", 30.3165, 78.0322],
  ["hp-shimla", "Shimla", "district", "Himachal Pradesh", 31.1048, 77.1734],
];

function regionIndex(id: string): number {
  return REGIONS.findIndex((r) => r[0] === id);
}

function riskFor(id: string, lat: number): number {
  // Deterministic but plausible: hotter toward lower latitude (south), with a
  // per-region offset + a mild diurnal seasonality from the current month.
  const r = rnd(hash(id) ^ 0x9e3779b9);
  const southernBias = Math.max(0, (24 - lat)) * 1.6; // hotter in the south
  const month = new Date().getMonth();
  const season = month >= 3 && month <= 6 ? 12 : month >= 10 || month <= 2 ? 4 : 7; // peak Apr–Jun
  const raw = 34 + southernBias + season + r() * 28;
  return Math.max(4, Math.min(98, Math.round(raw)));
}

function buildRegion(row: (typeof REGIONS)[number]): MockRegion {
  const [id, name, level, state, lat, lon] = row;
  const idx = regionIndex(id);
  const r = rnd(hash(id) ^ idx * 0x1234567);
  const rng = mulberry32(hash(id) ^ 0xabcdef);
  const score = riskFor(id, lat);
  const rl: RiskLevel = riskLevelForScore(score);
  const maxT = Math.round(36 + (24 - lat) * 0.35 + rng() * 8);
  const minT = Math.round(24 + (24 - lat) * 0.28 + rng() * 4);
  const rh = Math.round(30 + rng() * 45);
  const widx = letIndex(score, rng);
  const temp = maxT - rng() * 3;
  return {
    id, name, level, state, lat, lon,
    risk_score: score, risk_level: rl,
    ehi_zone: Math.max(1, Math.min(6, Math.round(score / 18) + 1)),
    insight_summary: insightFor(rl),
    updated_at: new Date().toISOString(),
    min_c: minT, max_c: maxT, rh, wind_kmph: Math.round(4 + rng() * 14),
    ehi_index: widx, wbgt: Math.round(temp * 0.75), utci: Math.round(temp + rh * 0.06),
    heat_index: Math.round(temp + (rh / 100) * 4),
    population: Math.round(600000 + r() * 4200000),
    elderly_pct: Number((4 + r() * 12).toFixed(1)),
    outdoor_worker_pct: Number((10 + r() * 22).toFixed(1)),
    heat_island_delta_c: Number((0.4 + r() * 3.2).toFixed(1)),
    exposure_score: Number((30 + r() * 60).toFixed(1)),
    vuln_score: Number((28 + r() * 62).toFixed(1)),
  };
}

function letIndex(score: number, rng: ReturnType<typeof mulberry32>): number {
  const safe = Math.max(20, Math.min(90, score));
  return Number((safe + rng() * 8 - 4).toFixed(1));
}

function insightFor(rl: RiskLevel): string {
  switch (rl) {
    case "extreme": return "Uncompensable heat stress; suspend heavy outdoor work 11:00–17:00.";
    case "severe": return "Dangerous heat for sustained labour; take frequent shade breaks.";
    case "high": return "Significant stress; limit midday outdoor activity and stay hydrated.";
    case "moderate": return "Elevated caution; hydrate and rest in shade during peak hours.";
    default: return "Comfort conditions; no special precautions needed.";
  }
}

export function mockMeta(): Meta {
  return {
    levels: ["district", "ward"],
    states: ["Maharashtra", "Delhi", "Odisha", "Rajasthan", "Uttar Pradesh", "Bihar", "West Bengal", "Telangana", "Karnataka", "Tamil Nadu", "Gujarat", "Madhya Pradesh", "Punjab", "Haryana", "Chhattisgarh", "Jharkhand", "Assam", "Kerala"],
    index: { primary: "EHI-N*", reference: ["WBGT", "UTCI", "Heat Index"] },
    risk_levels: ["low", "moderate", "high", "severe", "extreme"],
    sources: ["IMD API", "ERA5", "GFS", "Census 2011", "MODIS LST"],
    version: "0.1.0",
  };
}

export function mockRegions(level?: Level, state?: string): RegionSummary[] {
  return REGIONS
    .filter((r) => (!level || r[2] === level) && (!state || r[3] === state))
    .map((r) => {
      const b = buildRegion(r);
      const { min_c, max_c, rh, wind_kmph, ehi_index, wbgt, utci, heat_index, population, elderly_pct, outdoor_worker_pct, heat_island_delta_c, exposure_score, vuln_score, ...rest } = b;
      return rest;
    });
}

export function mockRegionDetail(id: string): RegionDetail | undefined {
  const row = REGIONS.find((r) => r[0] === id);
  if (!row) return undefined;
  const b = buildRegion(row);
  const rng = rnd(hash(id) ^ 0xdeadbeef);
  const time_of_day = Array.from({ length: 24 }, (_, h) => {
    // classic diurnal curve, peak ~14:00
    const curve = 0.35 + 0.65 * Math.exp(-((h - 14) ** 2) / 26);
    const score = Math.max(5, Math.min(97, Math.round(b.risk_score * curve)));
    return {
      hour: h,
      risk_score: score,
      risk_level: riskLevelForScore(score),
      ehi_zone: Math.max(1, Math.min(6, Math.round(score / 18) + 1)),
      advisory: hourAdvice(score),
    };
  });
  const forecast = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const jitter = (rng() - 0.5) * 6 + (i === 0 ? 0 : i < 3 ? 2 : 0);
    const score = Math.max(8, Math.min(96, Math.round(b.risk_score + jitter)));
    return {
      date: d.toISOString().slice(0, 10),
      min_c: b.min_c,
      max_c: Math.round(b.max_c + jitter),
      risk_score: score,
      risk_level: riskLevelForScore(score),
      advisory: insightFor(riskLevelForScore(score)),
    };
  });
  return {
    id: b.id, name: b.name, level: b.level, state: b.state,
    current: {
      ts: new Date().toISOString(), temp_c: Number((b.max_c - 2).toFixed(1)),
      rh: b.rh, wind_kmph: b.wind_kmph, ehi_index: b.ehi_index, ehi_zone: b.ehi_zone,
      wbgt: b.wbgt, utci: b.utci, heat_index: b.heat_index,
      risk_score: b.risk_score, risk_level: b.risk_level,
    },
    time_of_day,
    forecast,
    vulnerability: {
      population: b.population, elderly_pct: b.elderly_pct,
      outdoor_worker_pct: b.outdoor_worker_pct, heat_island_delta_c: b.heat_island_delta_c,
      exposure_score: b.exposure_score, vuln_score: b.vuln_score,
    },
    advisory: {
      general: insightFor(b.risk_level),
      outdoor_workers: "Suspend heavy work 11:00–17:00; take a 10-min rest every 20 min.",
      elderly: "Stay indoors during peak hours; check on elderly neighbours.",
      school_clinic: "Shift outdoor activities; keep clinics hydrated and cool.",
      municipal: "Activate cooling centres; prioritise water points and shaded stops.",
    },
  };
}

function hourAdvice(score: number): string {
  const rl = riskLevelForScore(score);
  if (rl === "moderate") return "Moderate stress; stay hydrated.";
  if (rl === "high") return "Limit exertion; take shade breaks.";
  if (rl === "severe") return "Avoid sustained outdoor work; rest frequently.";
  if (rl === "extreme") return "Zone 6 — suspend heavy outdoor work.";
  return "Low stress; normal activity.";
}

export function mockRiskGeoJSON(level?: Level): RiskGeoJSON {
  const features = REGIONS
    .filter((r) => !level || r[2] === level)
    .map((r) => {
      const b = buildRegion(r);
      const box = 1.4;
      const coords = [
        [b.lon - box, b.lat - box],
        [b.lon + box, b.lat - box],
        [b.lon + box, b.lat + box],
        [b.lon - box, b.lat + box],
        [b.lon - box, b.lat - box],
      ];
      return {
        type: "Feature" as const,
        geometry: { type: "Polygon" as const, coordinates: [[coords.map((c) => [c[0], c[1]])]] },
        properties: {
          id: b.id, name: b.name, risk_score: b.risk_score,
          risk_level: b.risk_level, ehi_zone: b.ehi_zone, population: b.population,
        },
      };
    });
  return { type: "FeatureCollection", features };
}

export function mockAlert(id: string): Alert {
  const rng = rnd(hash(id) ^ 0x99bb);
  const region = REGIONS[Math.floor(rng() * REGIONS.length)];
  const b = buildRegion(region);
  return {
    id,
    region_id: b.id,
    region_name: b.name,
    risk_level: b.risk_level,
    title: `${titleFor(b.risk_level)} — ${b.name}`,
    body: insightFor(b.risk_level),
    channel: "SMS",
    sent_at: new Date().toISOString(),
  };
}

function titleFor(rl: RiskLevel): string {
  switch (rl) {
    case "extreme": return "Extreme heat — suspend outdoor work";
    case "severe": return "Severe heat — limit outdoor activity";
    case "high": return "High heat — stay hydrated";
    case "moderate": return "Moderate heat — caution advised";
    default: return "Comfort conditions";
  }
}

export function mockAlerts(activeOnly = true): Alert[] {
  const count = 5;
  const out: Alert[] = [];
  for (let i = 0; i < count; i++) out.push(mockAlert(`al-${i + 1}`));
  return activeOnly ? out : out;
}

export function mockHeatIndex(lat: number, lon: number, met = 4, sun = 1): HeatIndexResult {
  const rng = rnd(hash(`${lat.toFixed(3)},${lon.toFixed(3)}`) ^ 0x5511);
  const temp_c = Number((34 + rng() * 8).toFixed(1));
  const rh = Number((30 + rng() * 45).toFixed(1));
  const wind_kmph = Math.round(4 + rng() * 12);
  const ehi_index = Number((35 + rng() * 45).toFixed(1));
  const score = Math.min(98, Math.round(ehi_index * 1.4));
  const rl = riskLevelForScore(score);
  return {
    lat, lon, met, sun, temp_c, rh, wind_kmph,
    ehi_index, ehi_zone: Math.max(1, Math.min(6, Math.round(score / 18) + 1)),
    risk_level: rl, advisory: insightFor(rl),
  };
}

export function mockAlertPreview(audience: Audience): string {
  switch (audience) {
    case "outdoor_workers": return "Suspend heavy work 11:00–17:00; take a 10-min rest every 20 min.";
    case "elderly": return "Stay indoors during peak heat; check on elderly neighbours.";
    case "school_clinic": return "Shift outdoor activities; keep clinics hydrated and cool.";
    case "municipal": return "Activate cooling centres; prioritise water points and shaded stops.";
    default: return "Avoid outdoor exertion 11:00–17:00; hydrate regularly.";
  }
}


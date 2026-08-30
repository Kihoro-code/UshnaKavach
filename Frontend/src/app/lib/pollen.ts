export interface City {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
}

export const CITIES: City[] = [
  { id: "mh-nagpur", name: "Nagpur", state: "Maharashtra", lat: 21.15, lng: 79.09 },
  { id: "mh-pune", name: "Pune", state: "Maharashtra", lat: 18.52, lng: 73.86 },
  { id: "mh-mumbai", name: "Mumbai", state: "Maharashtra", lat: 19.08, lng: 72.88 },
  { id: "mh-nashik", name: "Nashik", state: "Maharashtra", lat: 19.99, lng: 73.79 },
  { id: "mh-aurangabad", name: "Aurangabad", state: "Maharashtra", lat: 19.88, lng: 75.34 },
  { id: "dl-delhi", name: "Delhi", state: "Delhi", lat: 28.61, lng: 77.21 },
  { id: "dl-newdelhi", name: "New Delhi", state: "Delhi", lat: 28.61, lng: 77.21 },
  { id: "od-bhubaneswar", name: "Bhubaneswar", state: "Odisha", lat: 20.30, lng: 85.82 },
  { id: "od-cuttack", name: "Cuttack", state: "Odisha", lat: 20.46, lng: 85.88 },
  { id: "od-sambalpur", name: "Sambalpur", state: "Odisha", lat: 21.47, lng: 83.98 },
  { id: "od-berhampur", name: "Berhampur", state: "Odisha", lat: 19.31, lng: 84.79 },
  { id: "rj-jodhpur", name: "Jodhpur", state: "Rajasthan", lat: 26.24, lng: 73.02 },
  { id: "rj-jaipur", name: "Jaipur", state: "Rajasthan", lat: 26.91, lng: 75.79 },
  { id: "rj-bikaner", name: "Bikaner", state: "Rajasthan", lat: 28.02, lng: 73.31 },
  { id: "rj-udaipur", name: "Udaipur", state: "Rajasthan", lat: 24.58, lng: 73.69 },
  { id: "up-lucknow", name: "Lucknow", state: "Uttar Pradesh", lat: 26.85, lng: 80.95 },
  { id: "up-kanpur", name: "Kanpur", state: "Uttar Pradesh", lat: 26.45, lng: 80.33 },
  { id: "up-varanasi", name: "Varanasi", state: "Uttar Pradesh", lat: 25.32, lng: 82.97 },
  { id: "up-agra", name: "Agra", state: "Uttar Pradesh", lat: 27.18, lng: 78.01 },
  { id: "bh-patna", name: "Patna", state: "Bihar", lat: 25.59, lng: 85.14 },
  { id: "bh-gaya", name: "Gaya", state: "Bihar", lat: 24.79, lng: 85.00 },
  { id: "wb-kolkata", name: "Kolkata", state: "West Bengal", lat: 22.57, lng: 88.36 },
  { id: "wb-howrah", name: "Howrah", state: "West Bengal", lat: 22.60, lng: 88.26 },
  { id: "tg-hyderabad", name: "Hyderabad", state: "Telangana", lat: 17.39, lng: 78.49 },
  { id: "tg-warangal", name: "Warangal", state: "Telangana", lat: 17.98, lng: 79.59 },
  { id: "ap-vijayawada", name: "Vijayawada", state: "Andhra Pradesh", lat: 16.51, lng: 80.65 },
  { id: "ap-visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", lat: 17.69, lng: 83.22 },
  { id: "ka-bengaluru", name: "Bengaluru", state: "Karnataka", lat: 12.97, lng: 77.59 },
  { id: "ka-bidar", name: "Bidar", state: "Karnataka", lat: 17.91, lng: 77.52 },
  { id: "ka-mysuru", name: "Mysuru", state: "Karnataka", lat: 12.30, lng: 76.64 },
  { id: "tn-chennai", name: "Chennai", state: "Tamil Nadu", lat: 13.08, lng: 80.27 },
  { id: "tn-madurai", name: "Madurai", state: "Tamil Nadu", lat: 9.93, lng: 78.12 },
  { id: "tn-coimbatore", name: "Coimbatore", state: "Tamil Nadu", lat: 11.02, lng: 76.96 },
  { id: "gj-ahmedabad", name: "Ahmedabad", state: "Gujarat", lat: 23.02, lng: 72.57 },
  { id: "gj-surat", name: "Surat", state: "Gujarat", lat: 21.17, lng: 72.83 },
  { id: "gj-rajkot", name: "Rajkot", state: "Gujarat", lat: 22.30, lng: 70.80 },
  { id: "mp-bhopal", name: "Bhopal", state: "Madhya Pradesh", lat: 23.26, lng: 77.41 },
  { id: "mp-indore", name: "Indore", state: "Madhya Pradesh", lat: 22.72, lng: 75.86 },
  { id: "mp-gwalior", name: "Gwalior", state: "Madhya Pradesh", lat: 26.22, lng: 78.18 },
  { id: "ch-chandigarh", name: "Chandigarh", state: "Chandigarh", lat: 30.73, lng: 76.78 },
  { id: "pb-ludhiana", name: "Ludhiana", state: "Punjab", lat: 30.90, lng: 75.86 },
  { id: "pb-amritsar", name: "Amritsar", state: "Punjab", lat: 31.63, lng: 74.87 },
  { id: "hr-hisar", name: "Hisar", state: "Haryana", lat: 29.15, lng: 75.72 },
  { id: "hr-gurugram", name: "Gurugram", state: "Haryana", lat: 28.46, lng: 77.03 },
  { id: "cg-raipur", name: "Raipur", state: "Chhattisgarh", lat: 21.25, lng: 81.63 },
  { id: "cg-bilaspur", name: "Bilaspur", state: "Chhattisgarh", lat: 22.08, lng: 82.14 },
  { id: "jh-ranchi", name: "Ranchi", state: "Jharkhand", lat: 23.34, lng: 85.31 },
  { id: "jh-dhanbad", name: "Dhanbad", state: "Jharkhand", lat: 23.80, lng: 86.43 },
  { id: "as-guwahati", name: "Guwahati", state: "Assam", lat: 26.14, lng: 91.74 },
  { id: "kl-thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", lat: 8.52, lng: 76.94 },
  { id: "kl-kochi", name: "Kochi", state: "Kerala", lat: 9.93, lng: 76.27 },
  { id: "py-puducherry", name: "Puducherry", state: "Puducherry", lat: 11.94, lng: 79.81 },
  { id: "la-leh", name: "Leh", state: "Ladakh", lat: 34.16, lng: 77.58 },
  { id: "uk-dehradun", name: "Dehradun", state: "Uttarakhand", lat: 30.32, lng: 78.03 },
  { id: "hp-shimla", name: "Shimla", state: "Himachal Pradesh", lat: 31.10, lng: 77.17 },
  { id: "portblair", name: "Port Blair", state: "A&N Islands", lat: 11.62, lng: 92.73 },
  { id: "kavaratti", name: "Kavaratti", state: "Lakshadweep", lat: 10.57, lng: 72.64 },
];

export type AllergenType = "tree" | "grass" | "weed";

export interface PollenReading {
  tree: number;
  grass: number;
  weed: number;
  total: number;
}

function hashSeed(s: string): number {
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

function dayOfYear(d: Date): number {
  const start = Date.UTC(d.getUTCFullYear(), 0, 0);
  const diff = d.getTime() - start;
  return Math.floor(diff / 86400000);
}

function bell(day: number, peak: number, width: number): number {
  const x = ((day - peak + 365) % 365);
  const dx = Math.min(x, 365 - x);
  return Math.exp(-(dx * dx) / (2 * width * width));
}

export function seasonalCurve(type: AllergenType, day: number, lat: number): number {
  return curve(type, day, lat);
}

// Heat-risk seasonal shape: a NARROW summer bell so the index swings quickly as the
// date advances (play visibly moves through winter-cool → summer-hot → winter-cool).
// Higher latitudes peak later; the amplitude is a fraction (0..1) so we can map it to
// a 0–12 scale without saturating everything at the top of the ramp.
function curve(type: AllergenType, day: number, lat: number): number {
  const latShift = (lat - 28) * 0.6; // northern peaks arrive later
  const width = type === "tree" ? 40 : type === "grass" ? 44 : 38;
  const peak = type === "tree" ? 196 + latShift : type === "grass" ? 206 + latShift : 200 + latShift;
  return bell(day, peak, width); // 0..1, ≈0 deep winter, ≈1 at the summer peak
}

/**
 * Deterministic 0–12 heat index for a city/date with genuine spatial + temporal spread:
 *  - Temporal: a narrow seasonal bell drives 0→12 over the year, so playing through it
 *    sweeps the whole green→red ramp instead of sitting on one colour.
 *  - Spatial: latitude (hotter south) + longitude (drier interior) + a per-city offset
 *    differentiate cities by several points, so neighbouring regions aren't one flat
 *    colour. The offsets are kept below the cap so typical cities never all clamp to 12.
 */
export function getPollen(cityId: string, date: Date = new Date()): PollenReading {
  const city = CITIES.find((c) => c.id === cityId);
  if (!city) return { tree: 0, grass: 0, weed: 0, total: 0 };
  const d = dayOfYear(date);
  const dailyRand = mulberry32(hashSeed(`${cityId}-${date.toISOString().slice(0, 10)}`));
  const baseRand = mulberry32(hashSeed(cityId));

  // Spatial profile (0–12 scale): hotter toward the south, drier interior hotter than
  // humid coasts, plus a stable per-city offset so the map isn't flat.
  const latTerm = (34 - city.lat) * 0.22;            // south hotter
  const lngTerm = (city.lng - 78) * 0.018;            // interior drier/hotter
  const spatial = latTerm + lngTerm + baseRand() * 2.6;

  // Seasonal envelope drives the 0→12 swing; dip slightly so peak+spatial doesn't clamp.
  const season = (curve("tree", d, city.lat) * 0.55 + curve("grass", d, city.lat) * 0.3 + curve("weed", d, city.lat) * 0.15) * 9.2;
  const jitter = (dailyRand() - 0.5) * 2.2;

  const t = Math.max(0.4, Math.min(12, season + spatial + jitter));
  const g = Math.max(0.4, Math.min(12, season * 0.9 + spatial * 1.05 + jitter * 0.8));
  const w = Math.max(0.4, Math.min(12, season * 1.05 + spatial * 0.95 + jitter));
  const total = Math.max(0.4, Math.min(12, (t + g + w) / 3 * 1.28));
  return { tree: round1(t), grass: round1(g), weed: round1(w), total: round1(total) };
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

export interface SeriesPoint {
  label: string;
  date: Date;
  tree: number;
  grass: number;
  weed: number;
  total: number;
}

export type Range = "day" | "month" | "year";

export function getSeries(cityId: string, range: Range, anchor: Date = new Date()): SeriesPoint[] {
  const out: SeriesPoint[] = [];
  if (range === "day") {
    for (let h = 0; h < 24; h++) {
      const d = new Date(anchor);
      d.setHours(h, 0, 0, 0);
      const r = getPollen(cityId, d);
      const diurnal = Math.sin(((h - 6) / 24) * Math.PI * 2) * 0.5 + 1;
      out.push({
        label: `${h.toString().padStart(2, "0")}:00`,
        date: d,
        tree: round1(r.tree * diurnal),
        grass: round1(r.grass * diurnal),
        weed: round1(r.weed * diurnal),
        total: round1(r.total * diurnal),
      });
    }
  } else if (range === "month") {
    for (let i = 29; i >= 0; i--) {
      const d = new Date(anchor);
      d.setDate(d.getDate() - i);
      const r = getPollen(cityId, d);
      out.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, date: d, ...r });
    }
  } else {
    for (let i = 11; i >= 0; i--) {
      const d = new Date(anchor);
      d.setMonth(d.getMonth() - i, 15);
      const r = getPollen(cityId, d);
      out.push({
        label: d.toLocaleString("en-US", { month: "short" }),
        date: d,
        ...r,
      });
    }
  }
  return out;
}

// Live API swap-in point. Currently delegates to the synthetic generator.
// Replace the body with a real fetch (e.g. NWS HeatRisk, Open-Meteo)
// keeping the same return shape.
export async function fetchPollen(cityId: string, date: Date = new Date()): Promise<PollenReading> {
  return Promise.resolve(getPollen(cityId, date));
}

// ─── Heat-risk display helpers (derived from the 0–12 `total`, no engine change) ──

/** NWS HeatRisk category 0–4 from the 0–12 index (same cut points as severityFor). */
export function heatRiskCategory(total: number): 0 | 1 | 2 | 3 | 4 {
  if (total <= 2) return 0;
  if (total <= 5) return 1;
  if (total <= 8) return 2;
  if (total <= 10) return 3;
  return 4;
}

/** Plausible feels-like temperature (°F) derived from the 0–12 index, warmer in the
 *  south. Maps the index onto roughly 72–116°F. */
export function feelsLikeF(total: number, cityId: string, date: Date = new Date()): number {
  const city = CITIES.find((c) => c.id === cityId);
  const latWarmth = city ? (35 - city.lat) * 0.5 : 0;
  const base = 72 + (total / 12) * 40 + latWarmth;
  return Math.round(base);
}

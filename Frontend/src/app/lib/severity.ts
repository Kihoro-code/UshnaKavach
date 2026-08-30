export type MapMode = "dots" | "outlined" | "radial" | "color";

// 6-band heat-risk palette — green (low) → yellow (mid) → red (high), the NWS
// HeatRisk ramp (None → Minor → Moderate → Major → Extreme).
export const SEVERITY_BANDS = [
  { min: 0,  max: 2,  color: "#5BA834", label: "0–2"   },
  { min: 2,  max: 4,  color: "#94C13D", label: "2–4"   },
  { min: 4,  max: 6,  color: "#E0C53C", label: "4–6"   },
  { min: 6,  max: 8,  color: "#F0A02E", label: "6–8"   },
  { min: 8,  max: 10, color: "#E8662A", label: "8–10"  },
  { min: 10, max: 12, color: "#D6342A", label: "10–12" },
] as const;

const BAND_COLORS = SEVERITY_BANDS.map((b) => b.color);

/** Discrete band color for a 0–12 index value (Circles mode, data panel). */
export function bandColor(value: number): string {
  const v = Math.max(0, Math.min(12, value));
  return BAND_COLORS[Math.min(5, Math.floor(v / 2))];
}

// Gradient stops for Color mode smooth interpolation.
// Magenta arrives exactly at v=9.0.
const GRADIENT_STOPS = [
  { v: 0,  r: 91,  g: 168, b: 52 },  // green (low)
  { v: 3,  r: 148, g: 193, b: 61 },  // yellow-green
  { v: 6,  r: 224, g: 197, b: 60 },  // yellow (mid)
  { v: 8,  r: 240, g: 160, b: 46 },  // amber
  { v: 10, r: 232, g: 102, b: 42 },  // orange
  { v: 12, r: 214, g: 52,  b: 42 },  // red (high)
];

/** Smooth interpolated color for Color mode — transitions to magenta at v=9. */
export function continuousColor(value: number): string {
  const v = Math.max(0, Math.min(12, value));
  let lo = 0;
  for (let i = 1; i < GRADIENT_STOPS.length; i++) {
    if (GRADIENT_STOPS[i].v <= v) lo = i;
    else break;
  }
  const hi = Math.min(lo + 1, GRADIENT_STOPS.length - 1);
  if (lo === hi) {
    const s = GRADIENT_STOPS[lo];
    return `rgb(${s.r},${s.g},${s.b})`;
  }
  const a = GRADIENT_STOPS[lo], b = GRADIENT_STOPS[hi];
  const t = (v - a.v) / (b.v - a.v);
  return `rgb(${Math.round(a.r + t * (b.r - a.r))},${Math.round(a.g + t * (b.g - a.g))},${Math.round(a.b + t * (b.b - a.b))})`;
}

/** 0–1 position within the current 2-unit band (for intra-band effects). */
export function intraRamp(value: number): number {
  const v = Math.max(0, Math.min(12, value));
  const band = Math.min(5, Math.floor(v / 2));
  return (v - band * 2) / 2;
}

/** True for modes that use the severity color palette. */
export function isColorMode(mode: MapMode): boolean {
  return mode === "color" || mode === "outlined";
}

// ─── Backward-compat label/key system (status badge labels + dot sizes) ───────

export type SeverityKey = "low" | "moderate" | "high" | "very-high" | "extreme";

export interface Severity {
  key: SeverityKey;
  label: string;
  color: string;
  cssVar: string;
}

// NWS HeatRisk categories mapped onto the existing green→magenta ramp.
const TABLE: Severity[] = [
  // Labels follow the SIH26083 risk_level enum so the in-app scale matches the API.
  { key: "low",       label: "Low",      color: "#5BA834", cssVar: "--sev-low"     },
  { key: "moderate",  label: "Moderate", color: "#E0C53C", cssVar: "--sev-mod"     },
  { key: "high",      label: "High",     color: "#F0A02E", cssVar: "--sev-high"    },
  { key: "very-high", label: "Severe",   color: "#E8662A", cssVar: "--sev-vhigh"   },
  { key: "extreme",   label: "Extreme",  color: "#D6342A", cssVar: "--sev-extreme" },
];

export function severityFor(value: number): Severity {
  if (value <= 2)  return TABLE[0];
  if (value <= 5)  return TABLE[1];
  if (value <= 8)  return TABLE[2];
  if (value <= 10) return TABLE[3];
  return TABLE[4];
}

export const SEVERITY_STOPS = TABLE;

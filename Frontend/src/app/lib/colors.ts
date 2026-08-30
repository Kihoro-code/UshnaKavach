// Risk color scale — SINGLE SOURCE OF TRUTH for the SIH26083 heat-risk levels.
// These five hex values must match the backend's `risk_level` enum exactly
// (handoff Section 5). Reference these tokens everywhere a level is shown:
// map fills, badges, charts. Never hardcode a hex in a component.
export const RISK_COLORS = {
  low: "#2E7D32",       // Comfort / low risk
  moderate: "#F9A825",  // Elevated caution
  high: "#EF6C00",      // Significant stress
  severe: "#D32F2F",    // Dangerous
  extreme: "#6A1B9A",   // Uncompensable / act now
} as const;

export type RiskLevel = keyof typeof RISK_COLORS;

export const RISK_LEVELS: RiskLevel[] = ["low", "moderate", "high", "severe", "extreme"];

export const RISK_LEVEL_LABELS: Record<RiskLevel, string> = {
  low: "Low",
  moderate: "Moderate",
  high: "High",
  severe: "Severe",
  extreme: "Extreme",
};

export function riskColor(level: RiskLevel): string {
  return RISK_COLORS[level];
}

/** Map a numeric 0–100 risk score onto the 5-level scale (handoff risk_level). */
export function riskLevelForScore(score: number): RiskLevel {
  if (score < 20) return "low";
  if (score < 40) return "moderate";
  if (score < 60) return "high";
  if (score < 80) return "severe";
  return "extreme";
}

/** Map the app's internal 0–12 heat index onto the 5-level scale. */
export function riskLevelForIndex(index: number): RiskLevel {
  if (index <= 2) return "low";
  if (index <= 5) return "moderate";
  if (index <= 8) return "high";
  if (index <= 10) return "severe";
  return "extreme";
}

// Ordered high → low for legends.
export const RISK_LEVELS_HI_LO: RiskLevel[] = ["extreme", "severe", "high", "moderate", "low"];


import { RISK_COLORS, RISK_LEVEL_LABELS, type RiskLevel } from "../../lib/colors";

/** Small colored risk pill used across region lists, alerts, and the map legend. */
export function RiskBadge({ level, label }: { level: RiskLevel; label?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5"
      style={{
        padding: "2px 8px",
        borderRadius: 999,
        background: `${RISK_COLORS[level]}1A`,
        border: `1px solid ${RISK_COLORS[level]}55`,
        fontFamily: "Jura, sans-serif",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: "16px",
        letterSpacing: "0.3px",
        color: RISK_COLORS[level],
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: RISK_COLORS[level] }} />
      {label ?? RISK_LEVEL_LABELS[level]}
    </span>
  );
}


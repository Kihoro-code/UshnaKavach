import { RISK_COLORS, RISK_LEVELS_HI_LO, RISK_LEVEL_LABELS } from "../../lib/colors";

/** Shared 5-level risk scale used on the map, dashboard, and region detail. */
export function RiskLegend({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {RISK_LEVELS_HI_LO.map((level) => (
        <div key={level} className="flex items-center gap-1.5">
          <span style={{ width: compact ? 9 : 12, height: compact ? 9 : 12, borderRadius: 2, background: RISK_COLORS[level] }} />
          <span
            style={{
              fontFamily: "Jura, sans-serif",
              fontSize: compact ? 11 : 12,
              lineHeight: "16px",
              letterSpacing: "0.2px",
              color: "var(--chip-color)",
            }}
          >
            {RISK_LEVEL_LABELS[level]}
          </span>
        </div>
      ))}
    </div>
  );
}


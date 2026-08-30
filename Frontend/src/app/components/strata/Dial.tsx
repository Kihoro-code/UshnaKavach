import { severityFor } from "../../lib/severity";

export function Dial({ label, value }: { label: string; value: number }) {
  const sev = severityFor(value);
  const pct = Math.max(0, Math.min(1, value / 12));
  const size = 88;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct * 0.75); // 270° arc
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(135deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--strata-line)" strokeWidth={stroke} strokeDasharray={`${c * 0.75} ${c}`} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={sev.color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${c * 0.75} ${c}`}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.4s ease, stroke 0.3s" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center" style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 24, color: sev.color }}>
          {value.toFixed(1)}
        </div>
      </div>
      <div className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "Jura, sans-serif", color: "var(--strata-ink-soft)" }}>
        {label}
      </div>
    </div>
  );
}

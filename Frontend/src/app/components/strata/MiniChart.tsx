import { useState, useId } from "react";
import type { SeriesPoint } from "../../lib/pollen";

interface Props {
  data: SeriesPoint[];
  dataKey: keyof SeriesPoint;
  height?: number;
  fill: string;
}

export function MiniChart({ data, dataKey, height = 80, fill }: Props) {
  const gid = useId().replace(/:/g, "");
  const [hover, setHover] = useState<number | null>(null);
  const W = 300;
  const H = height;
  const pad = { l: 2, r: 2, t: 6, b: 2 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const max = 12;
  const n = data.length;
  if (n === 0) return <div style={{ height }} />;

  const x = (i: number) => pad.l + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
  const y = (v: number) => pad.t + (1 - Math.max(0, Math.min(max, v)) / max) * innerH;

  const values = data.map((d) => d[dataKey] as number);
  const linePath = values.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(2)},${y(v).toFixed(2)}`).join(" ");
  const areaPath = `${linePath} L${x(n - 1).toFixed(2)},${(H - pad.b).toFixed(2)} L${x(0).toFixed(2)},${(H - pad.b).toFixed(2)} Z`;

  function onMove(e: React.MouseEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.max(0, Math.min(n - 1, Math.round(((px - pad.l) / innerW) * (n - 1))));
    setHover(i);
  }

  return (
    <div style={{ width: "100%", height }} className="mt-2 relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fill} stopOpacity={0.45} />
            <stop offset="100%" stopColor={fill} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gid})`} />
        <path d={linePath} fill="none" stroke={fill} strokeWidth={1.25} vectorEffect="non-scaling-stroke" />
        {hover !== null && (
          <line
            x1={x(hover)}
            x2={x(hover)}
            y1={pad.t}
            y2={H - pad.b}
            stroke={fill}
            strokeOpacity={0.4}
            vectorEffect="non-scaling-stroke"
          />
        )}
        {hover !== null && (
          <circle cx={x(hover)} cy={y(values[hover])} r={2.5} fill={fill} />
        )}
      </svg>
      {hover !== null && (
        <div
          className="absolute pointer-events-none px-2 py-1 text-[11px]"
          style={{
            left: `${(x(hover) / W) * 100}%`,
            top: 0,
            transform: "translate(-50%, -100%)",
            background: "var(--strata-panel)",
            border: "1px solid var(--strata-line-strong)",
            fontFamily: "'Geist Mono', monospace",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "var(--strata-ink-soft)" }}>{data[hover].label}</span>{" "}
          <span style={{ color: fill }}>{values[hover].toFixed(1)}</span>
        </div>
      )}
    </div>
  );
}

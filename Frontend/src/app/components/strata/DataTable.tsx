import type { SeriesPoint } from "../../lib/pollen";
import { severityFor } from "../../lib/severity";

export function DataTable({ data }: { data: SeriesPoint[] }) {
  return (
    <table className="w-full mt-3 text-[11px]" style={{ fontFamily: "'Geist Mono', monospace" }}>
      <thead>
        <tr style={{ color: "var(--strata-ink-soft)" }}>
          <th className="text-left pb-1.5" style={{ borderBottom: "1px solid var(--strata-line)" }}>Time</th>
          <th className="text-right pb-1.5" style={{ borderBottom: "1px solid var(--strata-line)" }}>Highs</th>
          <th className="text-right pb-1.5" style={{ borderBottom: "1px solid var(--strata-line)" }}>Humidity</th>
          <th className="text-right pb-1.5" style={{ borderBottom: "1px solid var(--strata-line)" }}>Lows</th>
          <th className="text-right pb-1.5" style={{ borderBottom: "1px solid var(--strata-line)" }}>Risk</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          const sev = severityFor(d.total);
          return (
            <tr key={i}>
              <td className="py-1" style={{ color: "var(--strata-ink-soft)" }}>{d.label}</td>
              <td className="text-right py-1">{d.tree.toFixed(1)}</td>
              <td className="text-right py-1">{d.grass.toFixed(1)}</td>
              <td className="text-right py-1">{d.weed.toFixed(1)}</td>
              <td className="text-right py-1" style={{ color: sev.color }}>{d.total.toFixed(1)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

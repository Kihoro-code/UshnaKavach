import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Droplets, Thermometer, Wind, Sun } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getRegionDetail } from "../lib/api";
import { riskColor } from "../lib/colors";
import { RiskBadge } from "../components/risk/RiskBadge";
import { RiskLegend } from "../components/risk/RiskLegend";
import { Loading, ErrorBlock } from "../components/risk/AsyncState";

const ADVISORY_AUDIENCES: { key: keyof typeof AUDIENCE_LABEL; label: string; desc: string }[] = [
  { key: "general", label: "General", desc: "Everyone" },
  { key: "outdoor_workers", label: "Outdoor Workers", desc: "Labour, construction, transport" },
  { key: "elderly", label: "Elderly", desc: "65+ and vulnerable" },
  { key: "school_clinic", label: "Schools & Clinics", desc: "Institutions" },
  { key: "municipal", label: "Municipal", desc: "Cooling centres, water points" },
];

const AUDIENCE_LABEL = {
  general: "General",
  outdoor_workers: "Outdoor Workers",
  elderly: "Elderly",
  school_clinic: "Schools & Clinics",
  municipal: "Municipal",
};

export function RegionDetail() {
  const { id = "" } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<Awaited<ReturnType<typeof getRegionDetail>> | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true); setError("");
    getRegionDetail(id)
      .then((d) => { if (!cancelled) setData(d); })
      .catch((e) => { if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load region"); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  return (
    <div className="mx-auto px-4 py-6" style={{ maxWidth: 1080, color: "var(--strata-ink)" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "Jura, sans-serif", fontSize: 13, color: "var(--chip-color)", textDecoration: "none", marginBottom: 16 }}>
        <ArrowLeft size={14} /> Back to dashboard
      </Link>

      <h1 style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 34, margin: "0 0 4px" }}>
        {data ? data.name : "Region"}
      </h1>
      <div style={{ fontFamily: "Jura, sans-serif", fontSize: 13, color: "var(--chip-color)", marginBottom: 20 }}>
        {data ? `${data.level} · ${data.state}` : "Loading"}
      </div>

      {loading && <Loading label="Loading region…" />}
      {error && <ErrorBlock message={error} onRetry={load} />}
      {!loading && !error && data && (
        <div className="flex flex-col" style={{ gap: 20 }}>
          {/* Current conditions + risk */}
          <section className="strata-chrome" style={{ padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div className="flex items-center gap-4">
              <RiskBadge level={data.current.risk_level} />
              <div className="flex flex-col">
                <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 100, fontSize: 40, lineHeight: "42px" }}>
                  {data.current.ehi_index.toFixed(1)}
                </span>
                <span style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>
                  EHI-N* index
                </span>
              </div>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(70px, auto))", gap: "6px 24px" }}>
              <Metric icon={<Thermometer size={13} />} label="Temp" value={`${data.current.temp_c.toFixed(1)}°C`} />
              <Metric icon={<Droplets size={13} />} label="RH" value={`${data.current.rh.toFixed(0)}%`} />
              <Metric icon={<Wind size={13} />} label="Wind" value={`${data.current.wind_kmph.toFixed(0)} km/h`} />
              <Metric icon={<Sun size={13} />} label="Zone" value={`${data.current.ehi_zone}`} />
              <Metric icon={null} label="WBGT" value={`${data.current.wbgt.toFixed(0)}°C`} />
              <Metric icon={null} label="UTCI" value={`${data.current.utci.toFixed(0)}°C`} />
              <Metric icon={null} label="Heat Index" value={`${data.current.heat_index.toFixed(0)}°C`} />
            </div>
          </section>

          {/* Time-of-day curve with safe-hours */}
          <section className="strata-chrome" style={{ padding: 16 }}>
            <SectionHeading title="Time of day" sub="Which hours are safe to work" />
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.time_of_day}>
                  <defs>
                    {RISK_BANDS.map((b) => (
                      <linearGradient key={b.level} id={`tod-${b.level}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={riskColor(b.level)} stopOpacity={0.5} />
                        <stop offset="100%" stopColor={riskColor(b.level)} stopOpacity={0.1} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid stroke="var(--strata-line)" strokeDasharray="2 2" vertical={false} />
                  <XAxis dataKey="hour" tick={{ fill: "var(--chip-color)", fontSize: 11, fontFamily: "Jura" }} tickFormatter={(h) => `${h}:00`} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fill: "var(--chip-color)", fontSize: 11, fontFamily: "Jura" }} axisLine={false} tickLine={false} width={36} />
                  <Tooltip content={<HourTooltip />} />
                  <Area dataKey="risk_score" stroke="var(--strata-ink)" strokeWidth={2} fill="url(#tod-high)" />
                  {/* Safe-hours band: risk < 60 (below High) */}
                  <ReferenceArea y1={0} y2={60} fill="rgba(46,125,50,0.08)" stroke="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{ fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--chip-color)", marginTop: 6 }}>
              Safe hours are shaded where risk is below <b style={{ color: "var(--strata-ink)" }}>High</b>.
            </div>
          </section>

          {/* 7-day forecast */}
          <section className="strata-chrome" style={{ padding: 16 }}>
            <SectionHeading title="7-day forecast" sub="Daily peak heat risk" />
            <div style={{ marginBottom: 8 }}>
              <RiskLegend compact />
            </div>
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.forecast}>
                  <CartesianGrid stroke="var(--strata-line)" strokeDasharray="2 2" vertical={false} />
                  <XAxis dataKey="date" tick={{ fill: "var(--chip-color)", fontSize: 11, fontFamily: "Jura" }} tickFormatter={(d) => d.slice(5)} axisLine={false} tickLine={false} />
                  <YAxis domain={[20, 50]} tick={{ fill: "var(--chip-color)", fontSize: 11, fontFamily: "Jura" }} axisLine={false} tickLine={false} width={36} label={{ value: "max °C", angle: -90, position: "insideLeft", fill: "var(--chip-color)", fontSize: 11 }} />
                  <Tooltip content={<ForecastTooltip />} />
                  <Bar dataKey="max_c" radius={[3, 3, 0, 0]}>
                    {data.forecast.map((f, i) => (
                      <Cell key={i} fill={riskColor(f.risk_level)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Vulnerability */}
          <section className="strata-chrome" style={{ padding: 16 }}>
            <SectionHeading title="Vulnerability" sub="Who is most exposed" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
              <VulnCard label="Population" value={data.vulnerability.population.toLocaleString("en-IN")} />
              <VulnCard label="Elderly %" value={`${data.vulnerability.elderly_pct.toFixed(1)}%`} />
              <VulnCard label="Outdoor workers %" value={`${data.vulnerability.outdoor_worker_pct.toFixed(1)}%`} />
              <VulnCard label="Heat island Δ" value={`+${data.vulnerability.heat_island_delta_c.toFixed(1)}°C`} />
              <VulnCard label="Exposure" value={data.vulnerability.exposure_score.toFixed(0)} />
              <VulnCard label="Vulnerability" value={data.vulnerability.vuln_score.toFixed(0)} highlight />
            </div>
          </section>

          {/* Advisories */}
          <section>
            <SectionHeading title="Advisories" sub="Role-specific guidance" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              {ADVISORY_AUDIENCES.map((a) => {
                const text = data.advisory[a.key as keyof typeof data.advisory];
                return (
                  <div key={a.key} className="strata-chrome" style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 300, fontSize: 15, color: "var(--strata-ink)" }}>{a.label}</div>
                    <div style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>{a.desc}</div>
                    <div style={{ fontFamily: "Jura, sans-serif", fontSize: 13, color: "var(--strata-ink-soft)", lineHeight: "19px", marginTop: 4 }}>{text}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode | null; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span style={{ color: "var(--chip-color)" }}>{icon}</span>}
      <div>
        <div style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>{label}</div>
        <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 300, fontSize: 16, color: "var(--strata-ink)" }}>{value}</div>
      </div>
    </div>
  );
}

function SectionHeading({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 20, color: "var(--strata-ink)" }}>{title}</div>
      <div style={{ fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--chip-color)" }}>{sub}</div>
    </div>
  );
}

function VulnCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="strata-chrome" style={{ padding: 12, border: highlight ? "1px solid var(--strata-line-strong)" : undefined }}>
      <div style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>{label}</div>
      <div style={{ fontFamily: "Geist, sans-serif", fontWeight: highlight ? 500 : 300, fontSize: 22, color: "var(--strata-ink)", marginTop: 2 }}>{value}</div>
    </div>
  );
}

const RISK_BANDS = [
  { level: "low" as const, max: 20 },
  { level: "moderate" as const, max: 40 },
  { level: "high" as const, max: 60 },
  { level: "severe" as const, max: 80 },
  { level: "extreme" as const, max: 100 },
];

function HourTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <TooltipBox>
      <div>{p.hour}:00</div>
      <div className="flex items-center gap-1"><span style={{ width: 8, height: 8, borderRadius: "50%", background: riskColor(p.risk_level) }} /> {p.risk_level} · {p.risk_score}</div>
      <div>{p.advisory}</div>
    </TooltipBox>
  );
}

function ForecastTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <TooltipBox>
      <div>{p.date}</div>
      <div className="flex items-center gap-1"><span style={{ width: 8, height: 8, borderRadius: "50%", background: riskColor(p.risk_level) }} /> {p.risk_level}</div>
      <div>{p.max_c}°C / {p.min_c}°C</div>
    </TooltipBox>
  );
}

function TooltipBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--strata-panel)", border: "1px solid var(--hairline)", borderRadius: 6, padding: "8px 10px", fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--strata-ink)", boxShadow: "0 6px 20px rgba(0,0,0,0.14)" }}>
      {children}
    </div>
  );
}

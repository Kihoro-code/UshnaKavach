import { useEffect, useState } from "react";
import { Bell, Megaphone } from "lucide-react";
import { getAlerts } from "../lib/api";
import type { Alert } from "../lib/types";
import { RiskBadge } from "../components/risk/RiskBadge";
import { Loading, Empty, ErrorBlock } from "../components/risk/AsyncState";

export function Alerts() {
  const [activeOnly, setActiveOnly] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true); setError("");
    getAlerts(activeOnly)
      .then((a) => { if (!cancelled) setAlerts(a); })
      .catch((e) => { if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load alerts"); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [activeOnly]);

  return (
    <div className="mx-auto px-4 py-6" style={{ maxWidth: 860, color: "var(--strata-ink)" }}>
      <div className="flex items-center justify-between flex-wrap" style={{ gap: 12, marginBottom: 4 }}>
        <div className="flex items-center gap-2">
          <Bell size={18} color="var(--strata-ink)" />
          <h1 style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 28, margin: 0 }}>Alerts</h1>
        </div>
        <label className="flex items-center gap-2" style={{ fontFamily: "Jura, sans-serif", fontSize: 13, color: "var(--chip-color)" }}>
          <input type="checkbox" checked={activeOnly} onChange={(e) => setActiveOnly(e.target.checked)} />
          Active only
        </label>
      </div>
      <div style={{ fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--chip-color)", marginBottom: 20 }}>
        Audience-specific advisories delivered via SMS / WhatsApp / email.
      </div>

      {loading && <Loading label="Loading alerts…" />}
      {error && <ErrorBlock message={error} onRetry={() => setActiveOnly((v) => v)} />}
      {!loading && !error && alerts.length === 0 && <Empty icon={<Megaphone size={26} />} message="No active alerts right now." />}
      {!loading && !error && alerts.length > 0 && (
        <div className="flex flex-col" style={{ gap: 12 }}>
          {alerts.map((a) => (
            <div key={a.id} className="strata-chrome" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="flex items-center justify-between" style={{ gap: 8, flexWrap: "wrap" }}>
                <div className="flex items-center gap-3">
                  <RiskBadge level={a.risk_level} />
                  <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 300, fontSize: 15, color: "var(--strata-ink)" }}>
                    {a.title}
                  </span>
                </div>
                <span style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>
                  {new Date(a.sent_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                </span>
              </div>
              <div style={{ fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--strata-ink-soft)", lineHeight: "18px" }}>
                {a.region_name} · {a.body}
              </div>
              <div className="flex items-center gap-2" style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>
                <Megaphone size={12} /> Channel: {a.channel}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


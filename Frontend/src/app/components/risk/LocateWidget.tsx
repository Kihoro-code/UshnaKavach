import { useState } from "react";
import { LocateFixed, MapPin } from "lucide-react";
import { getHeatIndex } from "../../lib/api";
import type { HeatIndexResult } from "../../lib/types";
import { RiskBadge } from "./RiskBadge";
import { Loading, ErrorBlock } from "./AsyncState";

const GEO_STATUS = {
  idle: "idle",
  locating: "locating",
  denied: "denied",
  error: "error",
} as const;
type GeoStatus = (typeof GEO_STATUS)[keyof typeof GEO_STATUS];

/** "Check my location" — browser geolocation (with manual lat/lon fallback) that
 *  returns the EHI-N* index + zone + advisory from the API.
 *  `compact` renders a slim single-row control that fits the KPI strip; otherwise
 *  it renders the full-width widget with the advisory line. */
export function LocateWidget({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<GeoStatus>("idle");
  const [result, setResult] = useState<HeatIndexResult | null>(null);
  const [error, setError] = useState("");
  const [coords, setCoords] = useState<{ lat: string; lon: string }>({ lat: "", lon: "" });
  const [manual, setManual] = useState(false);

  async function lookup(lat: number, lon: number) {
    setError("");
    setStatus("locating");
    try {
      const res = await getHeatIndex(lat, lon);
      setResult(res);
      setStatus("idle");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Location lookup failed");
      setStatus("error");
    }
  }

  function locate() {
    if (!("geolocation" in navigator)) {
      setStatus("denied");
      setManual(true);
      return;
    }
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        lookup(pos.coords.latitude, pos.coords.longitude);
        setCoords({ lat: pos.coords.latitude.toFixed(4), lon: pos.coords.longitude.toFixed(4) });
      },
      () => {
        setStatus("denied");
        setManual(true);
        setError("Location permission denied. Enter your coordinates manually.");
      },
      { timeout: 8000 },
    );
  }

  function submitManual(e: React.FormEvent) {
    e.preventDefault();
    const lat = Number(coords.lat), lon = Number(coords.lon);
    if (!isFinite(lat) || !isFinite(lon)) {
      setError("Enter valid latitude and longitude.");
      return;
    }
    lookup(lat, lon);
  }

  if (compact) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {!result && !manual && (
          <button
            onClick={locate}
            disabled={status === "locating"}
            className="flex items-center gap-1.5"
            style={{
              padding: "3px 9px",
              borderRadius: 4,
              background: "var(--chrome-bg)",
              color: "var(--strata-ink)",
              fontFamily: "Jura, sans-serif",
              fontSize: 12,
              opacity: status === "locating" ? 0.6 : 1,
              whiteSpace: "nowrap",
            }}
          >
            <LocateFixed size={12} />
            {status === "locating" ? "Locating…" : "Locate me"}
          </button>
        )}

        {!result && manual && (
          <form onSubmit={submitManual} className="flex items-center gap-1">
            <input value={coords.lat} onChange={(e) => setCoords((c) => ({ ...c, lat: e.target.value }))} placeholder="Lat" inputMode="decimal"
              className="strata-scroll" style={{ width: 52, background: "var(--strata-panel)", border: "1px solid var(--hairline)", borderRadius: 3, padding: "2px 5px", color: "var(--strata-ink)", fontFamily: "Geist Mono, monospace", fontSize: 11 }} />
            <input value={coords.lon} onChange={(e) => setCoords((c) => ({ ...c, lon: e.target.value }))} placeholder="Lon" inputMode="decimal"
              className="strata-scroll" style={{ width: 52, background: "var(--strata-panel)", border: "1px solid var(--hairline)", borderRadius: 3, padding: "2px 5px", color: "var(--strata-ink)", fontFamily: "Geist Mono, monospace", fontSize: 11 }} />
            <button type="submit" style={{ padding: "2px 7px", borderRadius: 3, background: "var(--chip-active-bg)", color: "var(--chip-active-color)", fontFamily: "Jura, sans-serif", fontSize: 11 }}>Check</button>
          </form>
        )}

        {result && (
          <div className="flex items-center gap-2" style={{ whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 300, fontSize: 15, color: "var(--strata-ink)" }}>{result.ehi_index.toFixed(1)}</span>
            <span style={{ fontFamily: "Jura, sans-serif", fontSize: 10, color: "var(--chip-color)" }}>Zone {result.ehi_zone}</span>
            <RiskBadge level={result.risk_level} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="strata-chrome" style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin size={14} color="var(--chip-color-strong)" />
          <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 14, color: "var(--strata-ink)" }}>
            Check my location
          </span>
        </div>
        {manual && (
          <button onClick={() => setManual(false)} style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)", background: "transparent" }}>
            Use device
          </button>
        )}
      </div>

      {!manual ? (
        <button
          onClick={locate}
          className="flex items-center justify-center gap-2"
          disabled={status === "locating"}
          style={{
            padding: "8px 12px",
            borderRadius: 4,
            background: "var(--chrome-bg)",
            color: "var(--strata-ink)",
            fontFamily: "Jura, sans-serif",
            fontSize: 13,
            opacity: status === "locating" ? 0.6 : 1,
          }}
        >
          <LocateFixed size={14} />
          {status === "locating" ? "Locating…" : "Locate me"}
        </button>
      ) : (
        <form onSubmit={submitManual} className="flex items-center gap-1.5">
          <input
            value={coords.lat}
            onChange={(e) => setCoords((c) => ({ ...c, lat: e.target.value }))}
            placeholder="Lat"
            inputMode="decimal"
            className="strata-scroll"
            style={{
              flex: 1, minWidth: 0, background: "var(--strata-panel)", border: "1px solid var(--hairline)",
              borderRadius: 4, padding: "6px 8px", color: "var(--strata-ink)",
              fontFamily: "Geist Mono, monospace", fontSize: 12,
            }}
          />
          <input
            value={coords.lon}
            onChange={(e) => setCoords((c) => ({ ...c, lon: e.target.value }))}
            placeholder="Lon"
            inputMode="decimal"
            className="strata-scroll"
            style={{
              flex: 1, minWidth: 0, background: "var(--strata-panel)", border: "1px solid var(--hairline)",
              borderRadius: 4, padding: "6px 8px", color: "var(--strata-ink)",
              fontFamily: "Geist Mono, monospace", fontSize: 12,
            }}
          />
          <button
            type="submit"
            style={{ padding: "6px 10px", borderRadius: 4, background: "var(--chip-active-bg)", color: "var(--chip-active-color)", fontFamily: "Jura, sans-serif", fontSize: 12 }}
          >
            Check
          </button>
        </form>
      )}

      {status === "locating" && <Loading label="Checking heat index…" />}
      {status === "error" && <ErrorBlock message={error} onRetry={locate} />}
      {result && (
        <div className="flex items-center justify-between" style={{ gap: 10 }}>
          <div className="flex flex-col" style={{ gap: 2 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 100, fontSize: 30, lineHeight: "32px", color: "var(--strata-ink)" }}>
                {result.ehi_index.toFixed(1)}
              </span>
              <span style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>
                EHI-N* · Zone {result.ehi_zone}
              </span>
            </div>
            <span style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>
              {result.temp_c.toFixed(1)}°C · {result.rh.toFixed(0)}% RH
            </span>
          </div>
          <RiskBadge level={result.risk_level} />
        </div>
      )}
      {result && (
        <div style={{ fontFamily: "Jura, sans-serif", fontSize: 12, color: "var(--strata-ink-soft)", lineHeight: "18px" }}>
          {result.advisory}
        </div>
      )}
    </div>
  );
}

export default LocateWidget;

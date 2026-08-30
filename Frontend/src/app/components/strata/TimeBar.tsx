import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import type { Range } from "../../lib/pollen";
import type { Viewport } from "./MapPanel";

interface Props {
  date: Date;
  onChangeDate: (d: Date) => void;
  range: Range;
  onChangeRange: (r: Range) => void;
  playing: boolean;
  onTogglePlay: () => void;
  viewport?: Viewport;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TODAY_YEAR = new Date().getFullYear();
const YEAR_MIN = TODAY_YEAR - 5;
const YEAR_MAX = TODAY_YEAR + 5;

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Normalised 0-1 position of the selected date within the current range
function getT(date: Date, range: Range): number {
  if (range === "day") {
    const dim = daysInMonth(date.getFullYear(), date.getMonth());
    return (date.getDate() - 1) / Math.max(1, dim - 1);
  }
  if (range === "month") {
    return date.getMonth() / 11;
  }
  // year
  return Math.max(0, Math.min(1, (date.getFullYear() - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)));
}

// Build tick array: [{label, t}] for rendering
function getTicks(date: Date, range: Range, viewport: Viewport = "desktop"): { label: string; t: number }[] {
  if (range === "day") {
    const y = date.getFullYear(), m = date.getMonth();
    const dim = daysInMonth(y, m);
    const step = viewport === "mobile" ? 10 : viewport === "tablet" ? 7 : 5;
    const days: number[] = [1];
    for (let d = step; d <= dim; d += step) days.push(d);
    if (days[days.length - 1] !== dim) days.push(dim);
    return days.map((d) => ({
      label: String(d),
      t: (d - 1) / Math.max(1, dim - 1),
    }));
  }
  if (range === "month") {
    // Desktop: all 12. Compact: fewer labels, evenly spread so they span Jan→Dec edge-to-edge.
    let show: number[];
    if (viewport === "desktop") {
      show = MONTHS.map((_, i) => i);
    } else {
      const count = viewport === "mobile" ? 4 : 6; // mobile ~every 3rd, tablet ~every other
      show = Array.from({ length: count }, (_, k) => Math.round((k * 11) / (count - 1)));
    }
    return show.map((i) => ({ label: MONTHS[i], t: i / 11 }));
  }
  // year — 11 ticks, thin on mobile
  const ticks: { label: string; t: number }[] = [];
  for (let y = YEAR_MIN; y <= YEAR_MAX; y++) {
    if (viewport === "mobile" && (y - YEAR_MIN) % 2 !== 0) continue;
    ticks.push({ label: String(y), t: (y - YEAR_MIN) / (YEAR_MAX - YEAR_MIN) });
  }
  return ticks;
}

// Map a drag position (0-1) to a new Date given the current date and range
function dateFromT(tt: number, date: Date, range: Range): Date {
  const clamped = Math.max(0, Math.min(1, tt));
  if (range === "day") {
    const dim = daysInMonth(date.getFullYear(), date.getMonth());
    const day = Math.max(1, Math.min(dim, Math.round(clamped * (dim - 1)) + 1));
    return new Date(date.getFullYear(), date.getMonth(), day);
  }
  if (range === "month") {
    const month = Math.max(0, Math.min(11, Math.round(clamped * 11)));
    const day = Math.min(date.getDate(), daysInMonth(date.getFullYear(), month));
    return new Date(date.getFullYear(), month, day);
  }
  // year
  const year = Math.max(YEAR_MIN, Math.min(YEAR_MAX, Math.round(clamped * (YEAR_MAX - YEAR_MIN)) + YEAR_MIN));
  const day = Math.min(date.getDate(), daysInMonth(year, date.getMonth()));
  return new Date(year, date.getMonth(), day);
}

export function TimeBar({ date, onChangeDate, range, onChangeRange, playing, onTogglePlay, viewport = "desktop" }: Props) {
  const [drag, setDrag] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const t = getT(date, range);
  const ticks = getTicks(date, range, viewport);

  function setFromX(clientX: number) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const tt = (clientX - rect.left) / rect.width;
    onChangeDate(dateFromT(tt, date, range));
  }

  useEffect(() => {
    if (!drag) return;
    const move = (e: PointerEvent) => setFromX(e.clientX);
    const up = () => setDrag(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [drag, date, range]);

  const showExtras = viewport === "desktop";

  return (
    <div className="flex items-stretch gap-2" style={{ height: 44 }}>
      {/* Day / Month / Year toggle */}
      <div className="strata-chrome flex items-center gap-1 p-1">
        {(["day", "month", "year"] as Range[]).map((r) => (
          <button key={r} onClick={() => onChangeRange(r)} className="strata-chip" data-active={range === r}>
            {r}
          </button>
        ))}
      </div>

      {/* Scrubber */}
      <div className="strata-chrome flex-1 relative overflow-hidden">
        <div
          ref={trackRef}
          className="relative h-full cursor-pointer select-none px-2 py-1.5"
          onPointerDown={(e) => {
            (e.target as Element).setPointerCapture?.(e.pointerId);
            setDrag(true);
            setFromX(e.clientX);
          }}
        >
          {/* Tick marks absolutely positioned; endpoints align to the edges so they never clip */}
          <div className="absolute inset-x-2 bottom-1.5" style={{ height: 24, pointerEvents: "none" }}>
            {ticks.map((tick) => {
              const atStart = tick.t <= 0.001;
              const atEnd = tick.t >= 0.999;
              const transform = atStart ? "translateX(0)" : atEnd ? "translateX(-100%)" : "translateX(-50%)";
              const align = atStart ? "flex-start" : atEnd ? "flex-end" : "center";
              return (
                <div
                  key={tick.label}
                  className="absolute flex flex-col"
                  style={{ left: `${tick.t * 100}%`, transform, bottom: 0, alignItems: align }}
                >
                  <div className="rounded-sm" style={{ width: 1, height: 6, background: "var(--tick-color)", marginBottom: 2 }} />
                  <span className="strata-tick-text whitespace-nowrap" style={{ fontSize: 10 }}>{tick.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical playhead */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{ left: `${t * 100}%`, height: 34, width: 1, background: "var(--playhead-color)", borderRadius: 1, boxShadow: "0 0 1px rgba(0,0,0,0.5)" }}
        />
      </div>

      {/* Play + Today — desktop only; on compact screens the scrubber needs the space */}
      {showExtras && (
        <>
          <button
            aria-label={playing ? "Pause" : "Play"}
            onClick={onTogglePlay}
            className="strata-chrome flex items-center justify-center px-3"
            style={{ color: "var(--chip-color-strong)" }}
          >
            {playing ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
          </button>
          <button
            onClick={() => onChangeDate(new Date())}
            className="strata-chrome flex items-center justify-center px-3"
            style={{
              fontFamily: "'Jura', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: "0.4px",
              color: "var(--chip-color-strong)",
            }}
          >
            Today
          </button>
        </>
      )}
    </div>
  );
}

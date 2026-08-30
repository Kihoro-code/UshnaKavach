import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface Props {
  date: Date;
  onChange: (d: Date) => void;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  return Math.floor((d.getTime() - start.getTime()) / 86400000);
}
function daysInYear(year: number): number {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365;
}

export function TimeScrubber({ date, onChange }: Props) {
  const [playing, setPlaying] = useState(false);
  const [drag, setDrag] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = daysInYear(date.getFullYear());
  const doy = dayOfYear(date);
  const t = doy / total;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      const next = new Date(date);
      next.setDate(next.getDate() + 3);
      if (next.getFullYear() !== date.getFullYear()) {
        next.setMonth(0, 1);
      }
      onChange(next);
    }, 110);
    return () => window.clearInterval(id);
  }, [playing, date, onChange]);

  function setFromX(clientX: number) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const tt = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newDoy = Math.max(1, Math.round(tt * total));
    const d = new Date(date.getFullYear(), 0, newDoy);
    onChange(d);
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
  }, [drag]);

  return (
    <div className="strata-chrome flex items-stretch" style={{ height: 40 }}>
      <button
        aria-label={playing ? "Pause" : "Play"}
        onClick={() => setPlaying((p) => !p)}
        className="strata-chip"
        style={{ borderRight: "1px solid var(--strata-line-strong)" }}
      >
        {playing ? <Pause size={11} /> : <Play size={11} />}
      </button>

      <div
        ref={trackRef}
        className="relative flex-1 cursor-pointer select-none mx-3 my-1"
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture?.(e.pointerId);
          setDrag(true);
          setFromX(e.clientX);
        }}
      >
        {/* Track baseline */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px" style={{ background: "var(--strata-line-strong)" }} />
        {/* Month ticks + labels */}
        {MONTHS.map((m, i) => {
          const left = `${(i / 12) * 100}%`;
          return (
            <div key={m} className="absolute top-0 bottom-0 flex flex-col justify-between" style={{ left, transform: "translateX(-50%)" }}>
              <span
                className="text-[9px] tracking-widest uppercase"
                style={{ color: "var(--strata-ink-soft)", fontFamily: "Jura, sans-serif" }}
              >
                {m}
              </span>
              <span className="self-center w-px h-1.5" style={{ background: "var(--strata-line-strong)" }} />
            </div>
          );
        })}
        {/* Filled portion */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-px"
          style={{ left: 0, width: `${t * 100}%`, background: "var(--strata-ink)" }}
        />
        {/* Playhead */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{ left: `${t * 100}%` }}
        >
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: "var(--strata-ink)", boxShadow: "0 0 0 3px var(--strata-panel)" }}
          />
        </div>
      </div>

      <div
        className="tabular-nums px-3 flex items-center"
        style={{ color: "var(--strata-ink-soft)", fontFamily: "'Geist Mono', monospace", fontSize: 11 }}
      >
        {date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
      </div>

      <button
        onClick={() => {
          setPlaying(false);
          onChange(new Date());
        }}
        className="strata-chip"
        style={{ gap: 6 }}
      >
        <RotateCcw size={10} /> Today
      </button>
    </div>
  );
}

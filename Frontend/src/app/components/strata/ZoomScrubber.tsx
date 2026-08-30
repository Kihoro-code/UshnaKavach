import { useEffect, useRef, useState } from "react";

interface Props {
  zoom: number;
  onChange: (z: number) => void;
}

const MIN = 0.5, MAX = 4;
// Ticks ordered top → bottom (high to low) to match the design.
const TICKS = [4, 3, 2, 1, 0.5];
const ROW_H = 84; // height of each tick row (5 rows ≈ 420px overall)

export function ZoomScrubber({ zoom, onChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(false);

  function setFromY(clientY: number) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const t = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    const z = MAX - t * (MAX - MIN);
    onChange(Math.round(z * 10) / 10);
  }

  useEffect(() => {
    if (!drag) return;
    const move = (e: PointerEvent) => setFromY(e.clientY);
    const up = () => setDrag(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [drag]);

  // Map zoom to a t in [0,1] where 0=top (12×) and 1=bottom (1×).
  const handleT = (MAX - zoom) / (MAX - MIN);

  return (
    <div className="strata-chrome relative" style={{ padding: "8px 6px" }}>
      <div
        ref={trackRef}
        className="relative cursor-pointer select-none"
        style={{ width: 34 }}
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture?.(e.pointerId);
          setDrag(true);
          setFromY(e.clientY);
        }}
      >
        {TICKS.map((v, i) => (
          <div
            key={v}
            className="flex items-center justify-between"
            style={{ height: ROW_H, marginTop: i === 0 ? 0 : 0 }}
          >
            <span className="strata-tick-text tabular-nums" style={{ minWidth: 19 }}>
              {v}×
            </span>
            <span style={{ width: 8, height: 1, background: "var(--tick-color)", borderRadius: 1 }} />
          </div>
        ))}
        {/* Horizontal playhead — interpolated between top tick (idx 0) and bottom tick (idx 6) */}
        <div
          className="absolute -translate-y-1/2 pointer-events-none"
          style={{
            top: ROW_H / 2 + handleT * ROW_H * (TICKS.length - 1),
            left: 0,
            width: 28,
            height: 1,
            background: "var(--playhead-color)",
            borderRadius: 1,
            boxShadow: "0 0 1px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}

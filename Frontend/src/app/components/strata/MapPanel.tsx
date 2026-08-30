import { useMemo, useRef, useState, useEffect } from "react";
import { CITIES, getPollen } from "../../lib/pollen";
import { bandColor, continuousColor, SEVERITY_BANDS, type MapMode } from "../../lib/severity";
import { isIndia } from "../../lib/usGeo";
import { TimeBar } from "./TimeBar";
import { ZoomScrubber } from "./ZoomScrubber";
import type { Range } from "../../lib/pollen";

export type { MapMode };
export type Viewport = "mobile" | "tablet" | "desktop";

interface Props {
  selectedCityId: string;
  onSelectCity: (id: string) => void;
  date: Date;
  onChangeDate: (d: Date) => void;
  range: Range;
  onChangeRange: (r: Range) => void;
  mode: MapMode;
  onChangeMode: (m: MapMode) => void;
  theme: "light" | "dark";
  viewport?: Viewport;
  isDocked?: boolean;
}

const W = 980;
const H = 720;
const STEP = 10;
const COLOR_STEP = 7; // denser grid for Color mode
const SPARSE_STEP = 16; // coarser grid for Circles so marks stay distinct
const RADIAL_STEP = 15.6; // Radial: ~5% more elements than SPARSE_STEP (count ∝ 1/step²)
const BORDER_STEP = 5;  // finer fixed grid for the coastline so it reads hi-fi (independent of marks)
const MIN_ZOOM = 0.5; // allow zooming out below 1× to fit the whole country
const MAX_ZOOM = 4; // cap zoom-in — beyond this the field gets too sparse to read
// Drawn-content bounds (mainland + insets) used for pan clamping. Keeping the viewport
// centre inside this box lets any city be centred (even at ≤1×) without drifting into void.
const CONTENT_X0 = 150, CONTENT_X1 = 900, CONTENT_Y0 = 40, CONTENT_Y1 = 700;
const EMPTY_GRID = { cells: [] as Cell[], cols: 0, rows: 0 };
// India geographic bounds (lng 68–97, lat 6.6–36.5) — expanded south so Lakshadweep
// (≈8–12°N) and A&N (≈7–14°N) render in place, and expanded north so the Himalayan arc
// (up to ~35.3°N in Ladakh) is not clipped at the top of the view.
const LNG_MIN = 68, LNG_MAX = 97;
const LAT_MIN = 6.6, LAT_MAX = 36.5;
// Mainland bounds — chosen so cell centres land on the master grid (origin STEP/2, step STEP).
const MX0 = 160, MX1 = 890; // 890 - 160 = 730 = 73 * STEP
const MY0 = 60, MY1 = 660; // 660 - 60 = 600 = 60 * STEP

function projectMainland(lat: number, lng: number) {
  return {
    x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * (MX1 - MX0) + MX0,
    y: (1 - (lat - LAT_MIN) / (LAT_MAX - LAT_MIN)) * (MY1 - MY0) + MY0,
  };
}
function unprojectMainland(x: number, y: number) {
  return {
    lng: ((x - MX0) / (MX1 - MX0)) * (LNG_MAX - LNG_MIN) + LNG_MIN,
    lat: LAT_MIN + (1 - (y - MY0) / (MY1 - MY0)) * (LAT_MAX - LAT_MIN),
  };
}

interface Cell {
  i: number; j: number;
  x: number; y: number;
  lat: number; lng: number;
  inside: boolean;
  value: number;
}

function buildGrid(
  bounds: { x0: number; y0: number; x1: number; y1: number },
  step: number,
  inside: (lat: number, lng: number) => boolean,
  unproj: (x: number, y: number) => { lat: number; lng: number },
  cityValues: { lat: number; lng: number; v: number }[],
): { cells: Cell[]; cols: number; rows: number } {
  const cols = Math.floor((bounds.x1 - bounds.x0) / step);
  const rows = Math.floor((bounds.y1 - bounds.y0) / step);
  const cells: Cell[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x = bounds.x0 + (i + 0.5) * step;
      const y = bounds.y0 + (j + 0.5) * step;
      const { lat, lng } = unproj(x, y);
      const isIn = inside(lat, lng);
      let value = 0;
      if (isIn) {
        // Inverse-distance weighted interpolation in lat/lng space.
        let wsum = 0, vsum = 0;
        for (const c of cityValues) {
          const dx = (c.lng - lng);
          const dy = (c.lat - lat);
          const d2 = dx * dx + dy * dy + 0.05;
          const w = 1 / (d2 * d2);
          wsum += w;
          vsum += w * c.v;
        }
        value = wsum > 0 ? vsum / wsum : 0;
      }
      cells.push({ i, j, x, y, lat, lng, inside: isIn, value });
    }
  }
  return { cells, cols, rows };
}

// Pre-built unit spokes as a single SVG path string. Each spoke runs from an inner
// radius (SPOKE_INNER) outward to unit length so there is always a visible gap between
// the centre disc and the spokes. Using one path per burst (instead of 18 <line>s)
// cuts the DOM element count ~6x and keeps zoom/repaint fast.
const SPOKE_INNER = 0.28;
const RADIAL_SPOKES = (() => {
  const N = 18;
  const arr: { x: number; y: number }[] = [];
  for (let k = 0; k < N; k++) {
    const a = (k / N) * Math.PI * 2;
    arr.push({ x: Math.cos(a), y: Math.sin(a) });
  }
  return arr;
})();
const RADIAL_SPOKES_PATH = RADIAL_SPOKES.map(
  (s) => `M${(s.x * SPOKE_INNER).toFixed(3)} ${(s.y * SPOKE_INNER).toFixed(3)} L${s.x.toFixed(3)} ${s.y.toFixed(3)}`,
).join(" ");

const RADIAL_TRANSITION = "transform 450ms cubic-bezier(.22,.7,.28,1), opacity 450ms cubic-bezier(.22,.7,.28,1)";

// Bands ordered high → low for legend display (left = highest severity)
const LEGEND_BANDS_HI_LO = [...SEVERITY_BANDS].slice().reverse();
const LEGEND_CX = [12, 36, 60, 84, 108, 132] as const;

function PollenIndexLegend({ mode, theme }: { mode: MapMode; theme: "light" | "dark" }) {
  if (mode === "radial") {
    // Five decreasing radial bursts. Each burst is tinted with its ABSOLUTE severity
    // colour so the legend matches the on-map radial field (which now also colour-codes
    // by risk level, not a uniform monochrome stroke).
    const radialKeySpokes = [
      "M11.35 10H19M11.17 10.68L17.79 14.5M10.68 11.17L14.5 17.79M10 11.35V19M9.33 11.17L5.5 17.79M8.83 10.68L2.21 14.5M8.65 10H1M8.83 9.32L2.21 5.5M9.32 8.83L5.5 2.21M10 8.65V1M10.68 8.83L14.5 2.21M11.17 9.32L17.79 5.5",
      "M42.9 10H48M42.78 10.45L47.2 13M42.45 10.78L45 15.2M42 10.9V16M41.55 10.78L39 15.2M41.22 10.45L36.8 13M41.1 10H36M41.22 9.55L36.8 7M41.55 9.22L39 4.8M42 9.1V4M42.45 9.22L45 4.8M42.78 9.55L47.2 7",
      "M70.17 10H74M70.08 10.34L73.4 12.25M69.84 10.58L71.75 13.9M69.5 10.68V14.5M69.16 10.58L67.25 13.9M68.92 10.34L65.6 12.25M68.83 10H65M68.92 9.66L65.6 7.75M69.16 9.42L67.25 6.1M69.5 9.32V5.5M69.84 9.42L71.75 6.1M70.08 9.66L73.4 7.75",
      "M94.45 10H97M94.39 10.22L96.6 11.5M94.22 10.39L95.5 12.6M94 10.45V13M93.78 10.39L92.5 12.6M93.61 10.22L91.4 11.5M93.55 10H91M93.61 9.78L91.4 8.5M93.78 9.61L92.5 7.4M94 9.55V7M94.22 9.61L95.5 7.4M94.39 9.78L96.6 8.5",
      "M116.3 10H118M116.26 10.15L117.73 11M116.15 10.26L117 11.73M116 10.3V12M115.85 10.26L115 11.73M115.74 10.15L114.27 11M115.7 10H114M115.74 9.85L114.27 9M115.85 9.74L115 8.27M116 9.7V8M116.15 9.74L117 8.27M116.26 9.85L117.73 9",
    ];
    return (
      <svg width={148} height={25} viewBox="0 0 119 20" fill="none" style={{ display: "block" }}>
        {radialKeySpokes.map((d, i) => {
          // Left→right = High→Low. Map each burst to a severity colour along the ramp.
          const severity = 1 - i / (radialKeySpokes.length - 1); // 1 (High) → 0 (Low)
          return (
            <path key={i} d={d} stroke={continuousColor(severity * 12)} strokeOpacity={0.9} strokeWidth={0.5} strokeLinecap="round" />
          );
        })}
      </svg>
    );
  }

  if (mode === "dots") {
    const tiers = [1.0, 0.78, 0.58, 0.4, 0.22, 0.08];
    const dotFill = theme === "dark" ? "#ffffff" : "#5D5C5B";
    return (
      <svg width={148} height={20} viewBox="0 0 148 20" fill="none" style={{ display: "block" }}>
        {tiers.map((t, i) => {
          const r = (0.12 + Math.pow(t, 0.7) * 0.34) * 16;
          return <circle key={i} cx={LEGEND_CX[i]} cy={10} r={r.toFixed(2)} fill={dotFill} />;
        })}
      </svg>
    );
  }

  if (mode === "color") {
    return (
      <svg width={148} height={20} viewBox="0 0 148 20" fill="none" style={{ display: "block" }}>
        {LEGEND_BANDS_HI_LO.map((band, i) => {
          const midVal = (band.min + band.max) / 2;
          return (
            <circle key={i} cx={LEGEND_CX[i]} cy={10} r={6} fill={continuousColor(midVal)} />
          );
        })}
      </svg>
    );
  }

  // outlined (Circles)
  return (
    <svg width={148} height={20} viewBox="0 0 148 20" fill="none" style={{ display: "block" }}>
      {LEGEND_BANDS_HI_LO.map((band, i) => {
        const t = (band.min + band.max) / 2 / 12;
        const r = ((0.18 + Math.pow(t, 0.7) * 0.77) * 11).toFixed(2);
        return (
          <circle key={i} cx={LEGEND_CX[i]} cy={10} r={r} fill="none" stroke={band.color} strokeWidth={0.5}
            style={{ mixBlendMode: theme === "dark" ? "normal" : "multiply" }} />
        );
      })}
    </svg>
  );
}

function renderRadialBurst(
  c: { x: number; y: number; value: number },
  key: string,
  sparseStep: number,
  tNorm: number,
  absNorm: number,
) {
  // tNorm is the contrast-stretched value (0 = lowest on map, 1 = highest), so bursts
  // shrink in low-risk areas and bloom where heat peaks. Colour uses the ABSOLUTE
  // severity (absNorm = value/12) so every burst keeps its risk colour whether the
  // map is paused or playing — no collapse to a single shade at rest.
  const spokeScale = sparseStep * (0.12 + Math.pow(tNorm, 1.15) * 4.3);
  return (
    <g key={key} transform={`translate(${c.x} ${c.y})`} opacity={0.4}>
      <path
        d={RADIAL_SPOKES_PATH}
        fill="none"
        stroke={continuousColor(absNorm * 12)}
        strokeWidth={0.3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{
          transform: `scale(${spokeScale.toFixed(3)})`,
          transformOrigin: "0 0",
          transition: `${RADIAL_TRANSITION}, stroke 450ms ease`,
        }}
      />
    </g>
  );
}

interface PopupState {
  containerX: number; containerY: number;
  cityName: string; stateName: string; value: number;
}

export function MapPanel({ selectedCityId, onSelectCity, date, onChangeDate, range, onChangeRange, mode, onChangeMode, theme, viewport = "desktop", isDocked = false }: Props) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [drag, setDrag] = useState<{ x: number; y: number; px: number; py: number } | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [popup, setPopup] = useState<PopupState | null>(null);
  // True while the user is directly manipulating (1-finger pan or 2-finger pinch), where
  // we drive the transform imperatively per frame — so the eased CSS transition must be off.
  // For wheel / scrubber / button zoom it stays on, smoothing those discrete jumps.
  const [directManip, setDirectManip] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const didDragRef = useRef(false);
  const clickStartRef = useRef<{ x: number; y: number } | null>(null);
  // Pinch-to-zoom tracking
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchInitRef = useRef<{ dist: number; zoom: number } | null>(null);
  // Imperative pan during drag — avoids re-rendering thousands of cells per frame
  const mainlandGroupRef = useRef<SVGGElement>(null);
  const panRef = useRef(pan);
  const zoomRef = useRef(zoom);
  const wheelAccumRef = useRef(0);
  const wheelRafRef = useRef<number | null>(null);

  useEffect(() => { panRef.current = pan; }, [pan]);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);

  // Compose the pan/zoom transform string both groups share.
  function groupTransform(px: number, py: number, z: number) {
    return `translate(${(px + (W / 2) * (1 - z)).toFixed(2)} ${(py + (H / 2) * (1 - z)).toFixed(2)}) scale(${z})`;
  }

  // Pan clamp — keep the viewport centre within the drawn content (mainland + insets),
  // so any city can be centred (incl. at ≤1×) but you can't drag off into empty space.
  function clampPan(p: { x: number; y: number }, z: number) {
    const xMin = z * (W / 2 - CONTENT_X1), xMax = z * (W / 2 - CONTENT_X0);
    const yMin = z * (H / 2 - CONTENT_Y1), yMax = z * (H / 2 - CONTENT_Y0);
    return {
      x: Math.max(xMin, Math.min(xMax, p.x)),
      y: Math.max(yMin, Math.min(yMax, p.y)),
    };
  }

  useEffect(() => {
    setPan((p) => {
      const c = clampPan(p, zoom);
      return c.x === p.x && c.y === p.y ? p : c;
    });
  }, [zoom]);

  // Centre the view on the selected city (IP-detected on load, or any later selection).
  useEffect(() => {
    const city = CITIES.find((c) => c.id === selectedCityId);
    if (!city) return;
    const p = projectMainland(city.lat, city.lng);
    const z = zoomRef.current;
    setPan(clampPan({ x: z * (W / 2 - p.x), y: z * (H / 2 - p.y) }, z));
  }, [selectedCityId]);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      const next = new Date(date);
      next.setDate(next.getDate() + 9);
      if (next.getFullYear() !== date.getFullYear()) next.setMonth(0, 1);
      onChangeDate(next);
    }, 110);
    return () => window.clearInterval(id);
  }, [playing, date, onChangeDate]);

  const cityReadings = useMemo(
    () =>
      CITIES.map((c) => {
        const r = getPollen(c.id, date);
        return { city: c, value: r.total };
      }),
    [date],
  );

  // Zoom-driven detail: quantize the zoom into 4 detail levels so we cache a small
  // number of grids. Higher detail → smaller step → more cells per visible area,
  // and each dot/burst shrinks proportionally so visual density goes up (not size).
  const detailMul = zoom < 1.5 ? 1 : zoom < 3 ? 2 : zoom < 6 ? 3 : 4;
  const liveStep = STEP / detailMul;
  const liveColorStep = COLOR_STEP / detailMul;
  const liveSparseStep = SPARSE_STEP / detailMul;
  const liveRadialStep = RADIAL_STEP / detailMul;

  // Visible viewBox rect (in unscaled SVG units) — used to cull cells outside the viewport.
  // Transform composition is `translate(panX + (W/2)(1-zoom)) scale(zoom)`, so a viewBox
  // point P is shown at (panX + (W/2)(1-zoom) + zoom*P). Inverting for the visible window
  // [0, W] × [0, H]: P_min = ((W/2)(zoom-1) - pan) / zoom, P_max = P_min + W/zoom.
  const visibleRect = useMemo(() => {
    // Extra viewport-fraction margin so an in-progress imperative pan (which doesn't
    // re-cull until release) stays covered without blank edges.
    const halfPad = liveStep * 1.5 + (Math.max(W, H) * 0.3) / zoom;
    const vx0 = ((W / 2) * (zoom - 1) - pan.x) / zoom - halfPad;
    const vy0 = ((H / 2) * (zoom - 1) - pan.y) / zoom - halfPad;
    const vw = W / zoom + halfPad * 2;
    const vh = H / zoom + halfPad * 2;
    return { x0: vx0, y0: vy0, x1: vx0 + vw, y1: vy0 + vh };
  }, [zoom, pan.x, pan.y, liveStep]);

  function inView(x: number, y: number) {
    return x >= visibleRect.x0 && x <= visibleRect.x1 && y >= visibleRect.y0 && y <= visibleRect.y1;
  }

  // All city values now feed one unified India field (mainland + A&N + Lakshadweep
  // rendered together in their true geographic position).
  const allCityVals = useMemo(
    () => cityReadings.map((r) => ({ lat: r.city.lat, lng: r.city.lng, v: r.value })),
    [cityReadings],
  );

  // Only the active mode's grid is built each render — the other modes return null so we
  // don't run IDW for fields that aren't on screen (the big per-tick savings during play).
  const mainlandGrid = useMemo(
    () => mode !== "dots" ? null : buildGrid({ x0: MX0, y0: MY0, x1: MX1, y1: MY1 },
      liveStep, isIndia, unprojectMainland, allCityVals),
    [allCityVals, liveStep, mode],
  );
  const colorMainlandGrid = useMemo(
    () => mode !== "color" ? null : buildGrid({ x0: MX0, y0: MY0, x1: MX1, y1: MY1 },
      liveColorStep, isIndia, unprojectMainland, allCityVals),
    [allCityVals, liveColorStep, mode],
  );
  const sparseMainlandGrid = useMemo(
    () => mode !== "outlined" ? null : buildGrid({ x0: MX0, y0: MY0, x1: MX1, y1: MY1 },
      liveSparseStep, isIndia, unprojectMainland, allCityVals),
    [allCityVals, liveSparseStep, mode],
  );
  const radialMainlandGrid = useMemo(
    () => mode !== "radial" ? null : buildGrid({ x0: MX0, y0: MY0, x1: MX1, y1: MY1 },
      liveRadialStep, isIndia, unprojectMainland, allCityVals),
    [allCityVals, liveRadialStep, mode],
  );

  // Fixed fine-resolution geometry grid used only to draw a hi-fi coastline — finer than
  // the halftone marks and independent of zoom, so the India shape reads detailed.
  // Geometry-only (empty cityValues), so memoized once.
  const borderMainlandGrid = useMemo(
    () => buildGrid({ x0: MX0, y0: MY0, x1: MX1, y1: MY1 }, BORDER_STEP,
      isIndia, unprojectMainland, []),
    [],
  );

  // Geometry-only grid at fixed STEP — used for state borders & coord labels, which
  // depend only on cell positions, so this is built once and never recomputes.
  const geoMainlandGrid = useMemo(
    () => buildGrid({ x0: MX0, y0: MY0, x1: MX1, y1: MY1 }, STEP,
      isIndia, unprojectMainland, []),
    [],
  );

  // Stepped coastline edges: for each inside cell, draw edges facing an outside neighbour.
  function buildBorderSegs(grid: { cells: Cell[]; cols: number; rows: number }) {
    const segs: [number, number, number, number][] = [];
    const { cells, cols, rows } = grid;
    const at = (i: number, j: number) =>
      i >= 0 && i < cols && j >= 0 && j < rows ? cells[j * cols + i] : null;
    const half = BORDER_STEP / 2;
    for (const c of cells) {
      if (!c.inside) continue;
      const left = c.x - half, right = c.x + half, top = c.y - half, bot = c.y + half;
      if (!at(c.i - 1, c.j)?.inside) segs.push([left, top, left, bot]);
      if (!at(c.i + 1, c.j)?.inside) segs.push([right, top, right, bot]);
      if (!at(c.i, c.j - 1)?.inside) segs.push([left, top, right, top]);
      if (!at(c.i, c.j + 1)?.inside) segs.push([left, bot, right, bot]);
    }
    return segs;
  }

  const borderSegments = useMemo(() => buildBorderSegs(borderMainlandGrid), [borderMainlandGrid]);

  useEffect(() => {
    const onUp = (e: PointerEvent) => {
      pointersRef.current.delete(e.pointerId);
      if (pointersRef.current.size < 2) pinchInitRef.current = null;
      if (pointersRef.current.size === 0) setDirectManip(false);
      setDrag(null);
    };
    window.addEventListener("pointerup", onUp);
    return () => window.removeEventListener("pointerup", onUp);
  }, []);

  // Auto-dismiss popup after 4 s
  useEffect(() => {
    if (!popup) return;
    const id = setTimeout(() => setPopup(null), 4000);
    return () => clearTimeout(id);
  }, [popup]);

  // Wheel / trackpad pinch zoom — native non-passive listener so we can preventDefault
  // and stop the page from scrolling. Pinch gestures on macOS trackpads arrive as
  // wheel events with ctrlKey=true; both paths funnel into the same multiplicative zoom.
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Accumulate deltas and apply once per animation frame so rapid wheel/trackpad
      // events don't trigger multiple state updates (and grid rebuilds) per tick.
      wheelAccumRef.current += Math.max(-50, Math.min(50, e.deltaY));
      if (wheelRafRef.current != null) return;
      wheelRafRef.current = requestAnimationFrame(() => {
        const factor = Math.exp(-wheelAccumRef.current * 0.005);
        wheelAccumRef.current = 0;
        wheelRafRef.current = null;
        setZoom((z) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM,z * factor)));
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (wheelRafRef.current != null) cancelAnimationFrame(wheelRafRef.current);
    };
  }, []);

  function getSVGCoords(clientX: number, clientY: number) {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse());
    const dx = pan.x + (W / 2) * (1 - zoom);
    const dy = pan.y + (H / 2) * (1 - zoom);
    return { x: (svgPt.x - dx) / zoom, y: (svgPt.y - dy) / zoom };
  }

  function handleMapClick(clientX: number, clientY: number) {
    const { x, y } = getSVGCoords(clientX, clientY);
    // Check map bounds (single unified India field).
    const isMainland = x >= MX0 && x <= MX1 && y >= MY0 && y <= MY1;
    if (!isMainland) return;

    // Find nearest city by lat/lng proximity
    let bestCity = CITIES[0];
    let bestDist = Infinity;
    for (const c of CITIES) {
      const proj = projectMainland(c.lat, c.lng);
      const d = Math.hypot(proj.x - x, proj.y - y);
      if (d < bestDist) { bestDist = d; bestCity = c; }
    }

    const pollen = getPollen(bestCity.id, date);
    const container = containerRef.current;
    const containerRect = container?.getBoundingClientRect();
    const cx = containerRect ? clientX - containerRect.left : clientX;
    const cy = containerRect ? clientY - containerRect.top : clientY;
    setPopup({ containerX: cx, containerY: cy, cityName: bestCity.name, stateName: bestCity.state, value: pollen.total });
    onSelectCity(bestCity.id);
  }

  function onMove(e: React.PointerEvent) {
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    // Pinch zoom
    if (pointersRef.current.size === 2 && pinchInitRef.current) {
      const pts = [...pointersRef.current.values()];
      const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
      const ratio = dist / pinchInitRef.current.dist;
      setZoom(Math.max(MIN_ZOOM, Math.min(MAX_ZOOM,pinchInitRef.current.zoom * ratio)));
      return;
    }
    if (!drag) return;
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scale = Math.min(rect.width / W, rect.height / H) || 1;
    const dx = (e.clientX - drag.x) / scale;
    const dy = (e.clientY - drag.y) / scale;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDragRef.current = true;
    // Imperative transform update — no React re-render during the drag
    const next = clampPan({ x: drag.px + dx, y: drag.py + dy }, zoom);
    panRef.current = next;
    const tf = groupTransform(next.x, next.y, zoom);
    if (mainlandGroupRef.current) mainlandGroupRef.current.setAttribute("transform", tf);
  }

  // Assign each mainland cell to its nearest city's state (geography, not date-dependent)
  const cityStateLocations = useMemo(
    () => CITIES.map(c => {
      const p = projectMainland(c.lat, c.lng);
      return { px: p.x, py: p.y, state: c.state };
    }),
    [],
  );

  const mainlandCellStates = useMemo(() => {
    return geoMainlandGrid.cells.map(c => {
      if (!c.inside) return "";
      let best = "", bestD = Infinity;
      for (const ci of cityStateLocations) {
        const d = (ci.px - c.x) ** 2 + (ci.py - c.y) ** 2;
        if (d < bestD) { bestD = d; best = ci.state; }
      }
      return best;
    });
  }, [geoMainlandGrid, cityStateLocations]);

  // Stepped state border segments — same algorithm as the country border. Pure geometry
  // off the fixed geo grid, so this is computed once (not on every date/zoom change).
  const stateBorderSegs = useMemo(() => {
    const segs: [number, number, number, number][] = [];
    const { cells, cols, rows } = geoMainlandGrid;
    const at = (i: number, j: number) =>
      i >= 0 && i < cols && j >= 0 && j < rows ? cells[j * cols + i] : null;
    const stateAt = (i: number, j: number) =>
      i >= 0 && i < cols && j >= 0 && j < rows ? mainlandCellStates[j * cols + i] : "";

    for (const c of cells) {
      if (!c.inside) continue;
      const myState = mainlandCellStates[c.j * cols + c.i];
      if (!myState) continue;
      const half = STEP / 2;
      const { x, y } = c;
      if (at(c.i - 1, c.j)?.inside && stateAt(c.i - 1, c.j) !== myState) segs.push([x - half, y - half, x - half, y + half]);
      if (at(c.i + 1, c.j)?.inside && stateAt(c.i + 1, c.j) !== myState) segs.push([x + half, y - half, x + half, y + half]);
      if (at(c.i, c.j - 1)?.inside && stateAt(c.i, c.j - 1) !== myState) segs.push([x - half, y - half, x + half, y - half]);
      if (at(c.i, c.j + 1)?.inside && stateAt(c.i, c.j + 1) !== myState) segs.push([x - half, y + half, x + half, y + half]);
    }
    return segs;
  }, [geoMainlandGrid, mainlandCellStates]);

  // 1× → no labels. 2×+ → state two-letter pills only. Cities are never labelled.
  const showStateLabels = zoom >= 2;
  const showCoordLabels = false;

  const stateCentroids = useMemo(() => {
    const map: Record<string, { lat: number; lng: number; n: number }> = {};
    for (const c of CITIES) {
      const cur = map[c.state] || { lat: 0, lng: 0, n: 0 };
      cur.lat += c.lat; cur.lng += c.lng; cur.n += 1;
      map[c.state] = cur;
    }
    return Object.entries(map).map(([state, v]) => ({
      state,
      ...projectMainland(v.lat / v.n, v.lng / v.n),
    }));
  }, []);

  // Coord labels — sparse grid points where no city is near
  const coordLabels = useMemo(() => {
    const out: { x: number; y: number; lat: number; lng: number }[] = [];
    const { cells } = geoMainlandGrid;
    for (const c of cells) {
      if (!c.inside) continue;
      if ((c.i % 5 !== 0) || (c.j % 5 !== 0)) continue;
      const minD = Math.min(
        ...cityReadings
          .map((r) => {
            const p = projectMainland(r.city.lat, r.city.lng);
            return Math.hypot(p.x - c.x, p.y - c.y);
          }),
      );
      if (minD > 70) out.push({ x: c.x, y: c.y, lat: c.lat, lng: c.lng });
    }
    return out;
  }, [geoMainlandGrid, cityReadings]);

  function renderHalftoneCell(c: Cell, m: MapMode, key: string) {
    // Contrast-stretched value drives mark size so high/low areas read clearly
    const t = normValue(c.value);
    // Absolute severity (0–1 on the 0–12 scale) drives COLOUR. Using absolute value
    // (not the contrast-stretched t) means a given heat level is always the same colour,
    // so the map is accurate and colours stay put when playback is paused.
    const a = Math.max(0, Math.min(1, c.value / 12));

    if (m === "radial") return renderRadialBurst(c, key, liveRadialStep, t, a);

    if (m === "dots") {
      // Solid dot; clear small→large ramp, max diameter 0.92·STEP so dots never touch.
      // Animate size via a GPU-composited transform: scale (unit circle scaled about its
      // own centre) so it glides between states on play/scrub instead of repainting `r`.
      const rMin = 0.08 * liveStep, rMax = 0.46 * liveStep;
      const r = (rMin + Math.pow(t, 1.1) * (rMax - rMin)).toFixed(3);
      return (
        <circle
          key={key}
          cx={c.x}
          cy={c.y}
          r={1}
          fill={theme === "dark" ? "#ffffff" : "#5D5C5B"}
          style={{ transformBox: "fill-box", transformOrigin: "center", transform: `scale(${r})`, transition: "transform 450ms cubic-bezier(.22,.7,.28,1)" }}
        />
      );
    }

    if (m === "outlined") {
      // Open ring — max ≈ one sparse-cell radius. Size via composited transform: scale;
      // non-scaling-stroke keeps the hairline constant as it scales.
      const rMin = 0.12 * liveSparseStep, rMax = 1.0 * liveSparseStep;
      const r = (rMin + Math.pow(t, 1.1) * (rMax - rMin)).toFixed(3);
      return (
        <circle
          key={key}
          cx={c.x}
          cy={c.y}
          r={1}
          fill="none"
          stroke={bandColor(c.value)}
          strokeWidth={0.5}
          vectorEffect="non-scaling-stroke"
          style={{ transformBox: "fill-box", transformOrigin: "center", transform: `scale(${r})`, mixBlendMode: theme === "dark" ? "normal" : "multiply", transition: "transform 450ms cubic-bezier(.22,.7,.28,1), stroke 450ms ease" }}
        />
      );
    }

    // color — fill colour is the ABSOLUTE severity so low/high areas are always the
    // correct risk colour and remain stable when paused. Only size (dot radius) used
    // contrast-stretch; here size is constant so the mark simply reflects severity.
    const dotR = (liveColorStep * 0.55).toFixed(3);
    return (
      <circle
        key={key}
        cx={c.x}
        cy={c.y}
        r={dotR}
        fill={continuousColor(a * 12)}
        style={{ transition: "fill 450ms ease" }}
      />
    );
  }

  // Each mode picks its grid density: Color → dense, Radial → radial, Circles → sparse, Dots → standard.
  // Only the active mode's grid is non-null (the others were skipped), so this resolves it.
  type Grid = ReturnType<typeof buildGrid>;
  const activeMainlandGrid =
    (mode === "color" ? colorMainlandGrid : mode === "radial" ? radialMainlandGrid : mode === "outlined" ? sparseMainlandGrid : mainlandGrid) ?? EMPTY_GRID;

  // Contrast-stretch: heat values often cluster, so a fixed 0–12
  // barely varies. Normalize against the active field's actual min/max so mark size spans
  // the full visible range and the spatial high/low structure stays legible.
  const valueExtent = useMemo(() => {
    let lo = Infinity, hi = -Infinity;
    for (const c of activeMainlandGrid.cells) {
      if (!c.inside) continue;
      if (c.value < lo) lo = c.value;
      if (c.value > hi) hi = c.value;
    }
    if (!isFinite(lo)) return { lo: 0, hi: 12 };
    if (hi - lo < 0.5) hi = lo + 0.5;
    return { lo, hi };
  }, [activeMainlandGrid]);

  function normValue(v: number) {
    return Math.max(0, Math.min(1, (v - valueExtent.lo) / (valueExtent.hi - valueExtent.lo)));
  }

  // Pre-render the halftone field once per data/zoom change. Memoizing the element array
  // means hover/popup/drag/directManip re-renders DON'T re-map thousands of SVG nodes.
  // (Pan is imperative; play still updates via the active grid / valueExtent deps below.)
  const fieldDeps = [activeMainlandGrid, mode, theme, valueExtent.lo, valueExtent.hi, visibleRect, liveStep, liveSparseStep, liveRadialStep, liveColorStep];
  const mainlandCells = useMemo(
    () => activeMainlandGrid.cells.map((c) => (!c.inside || !inView(c.x, c.y)) ? null : renderHalftoneCell(c, mode, `c${c.i}-${c.j}`)),
    fieldDeps, // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Ghost dot grid is now a CSS background on the card container (fills the full card)

  const isMobile = viewport === "mobile";
  const isCompact = viewport !== "desktop";
  const controlsOpacity = isDocked ? 0 : 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full select-none"
        style={{ cursor: drag ? "grabbing" : "grab", touchAction: "none", display: "block" }}
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture?.(e.pointerId);
          pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
          setDirectManip(true);
          if (pointersRef.current.size === 1) {
            setDrag({ x: e.clientX, y: e.clientY, px: pan.x, py: pan.y });
            didDragRef.current = false;
            clickStartRef.current = { x: e.clientX, y: e.clientY };
          } else if (pointersRef.current.size === 2) {
            setDrag(null);
            const pts = [...pointersRef.current.values()];
            const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
            pinchInitRef.current = { dist, zoom };
          }
        }}
        onPointerMove={onMove}
        onPointerUp={(e) => {
          if (!didDragRef.current && clickStartRef.current) {
            const ds = Math.hypot(e.clientX - clickStartRef.current.x, e.clientY - clickStartRef.current.y);
            if (ds < 6) handleMapClick(e.clientX, e.clientY);
          } else if (didDragRef.current) {
            // Commit the imperative pan once so culling / visibleRect recompute a single time
            setPan(panRef.current);
          }
          pointersRef.current.delete(e.pointerId);
          if (pointersRef.current.size < 2) pinchInitRef.current = null;
          if (pointersRef.current.size === 0) setDirectManip(false);
          setDrag(null);
        }}
      >
        {/* Mainland transformed group (pan/zoom) */}
        <g ref={mainlandGroupRef} transform={groupTransform(pan.x, pan.y, zoom)}
          style={{ transition: directManip ? "none" : "transform 170ms cubic-bezier(.22,.7,.28,1)" }}>
          {/* Stepped border — viewport-culled */}
          <g stroke="var(--strata-line-strong)" strokeWidth={0.8} fill="none" vectorEffect="non-scaling-stroke">
            {borderSegments.map((s, i) => {
              if (!inView((s[0] + s[2]) / 2, (s[1] + s[3]) / 2)) return null;
              return <line key={`b${i}`} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} />;
            })}
          </g>

          {/* Halftone field — square dot grid, viewport-culled (memoized) */}
          <g>{mainlandCells}</g>

          {/* State borders — stepped cell-boundary lines, viewport-culled */}
          <g stroke={theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
            strokeWidth={0.8} fill="none" vectorEffect="non-scaling-stroke">
            {stateBorderSegs.map((s, i) => {
              if (!inView((s[0] + s[2]) / 2, (s[1] + s[3]) / 2)) return null;
              return <line key={`st${i}`} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} />;
            })}
          </g>

          {/* State labels (low zoom) — frosted pills */}
          {showStateLabels && (
            <g style={{ pointerEvents: "none" }}>
              {stateCentroids.map((s) => {
                const w = 32, h = 18;
                const inv = (1 / zoom).toFixed(3);
                return (
                  <g key={s.state} transform={`translate(${s.x.toFixed(2)} ${s.y.toFixed(2)}) scale(${inv})`}>
                    <rect
                      x={-w / 2}
                      y={-h / 2}
                      width={w}
                      height={h}
                      rx={h / 2}
                      fill="var(--strata-panel)"
                      fillOpacity={0.92}
                      stroke="var(--strata-line-strong)"
                      strokeWidth={0.7}
                      vectorEffect="non-scaling-stroke"
                    />
                    <text
                      x={0}
                      y={0.5}
                      fontSize={12}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="var(--strata-ink)"
                      fillOpacity={0.92}
                      style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, letterSpacing: "0.14em" }}
                    >
                      {s.state}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* Coordinate labels at sparse grid points without nearby cities */}
          {showCoordLabels && (
            <g style={{ pointerEvents: "none" }} fill="var(--strata-ink-soft)">
              {coordLabels.map((c, i) => (
                <text
                  key={`co${i}`}
                  x={c.x}
                  y={c.y - 6}
                  fontSize={7}
                  textAnchor="middle"
                  style={{ fontFamily: "'Geist Mono', monospace", paintOrder: "stroke", stroke: "var(--strata-bg)", strokeWidth: 2 }}
                >
                  {c.lat.toFixed(1)}°,{c.lng.toFixed(1)}°
                </text>
              ))}
            </g>
          )}

          {/* City markers — invisible hit targets + labels */}
          <g>
            {cityReadings
              .map(({ city, value }) => {
                const p = projectMainland(city.lat, city.lng);
                const markerColor = bandColor(value);
                const isSelected = city.id === selectedCityId;
                const isHover = hover === city.id;
                return (
                  <g
                    key={city.id}
                    style={{ cursor: "pointer" }}
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => onSelectCity(city.id)}
                    onMouseEnter={() => setHover(city.id)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <circle cx={p.x} cy={p.y} r={10} fill="transparent" />
                    {isSelected && (
                      <>
                        <circle cx={p.x} cy={p.y} r={11} fill="none" stroke="var(--strata-bg)" strokeWidth={3} vectorEffect="non-scaling-stroke" />
                        <circle cx={p.x} cy={p.y} r={11} fill="none" stroke={markerColor} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                        <circle cx={p.x} cy={p.y} r={2.6} fill={markerColor} />
                      </>
                    )}
                    {!isSelected && isHover && (
                      <circle cx={p.x} cy={p.y} r={9} fill="none" stroke="var(--strata-ink)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                    )}
                  </g>
                );
              })}
          </g>
        </g>

      </svg>

      {/* All floating controls — fade out when docked */}
      <div style={{ opacity: controlsOpacity, transition: "opacity 300ms ease", pointerEvents: isDocked ? "none" : undefined }}>

        {/* Top — time bar */}
        <div className="absolute top-3 left-3 right-3 z-10">
          <TimeBar
            date={date}
            onChangeDate={onChangeDate}
            range={range}
            onChangeRange={onChangeRange}
            playing={playing}
            onTogglePlay={() => setPlaying((p) => !p)}
            viewport={viewport}
          />
        </div>

        {/* Right — zoom scrubber (desktop) or ±buttons (compact) */}
        {!isCompact ? (
          <div className="absolute right-4 z-10" style={{ top: "50%", transform: "translateY(-50%)" }}>
            <ZoomScrubber zoom={zoom} onChange={setZoom} />
          </div>
        ) : (
          <div className="absolute right-3 z-10 flex flex-col gap-1" style={{ top: "50%", transform: "translateY(-50%)" }}>
            {[
              { label: "+", delta: 1.5 },
              { label: "−", delta: -1.5 },
            ].map(({ label, delta }) => (
              <button
                key={label}
                onClick={() => setZoom((z) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM,z + delta)))}
                className="strata-chrome flex items-center justify-center"
                style={{ width: 36, height: 36, fontSize: 18, color: "var(--chip-color-strong)" }}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Bottom — Mode + Legend (legend hidden on mobile) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-stretch gap-1">
          <div className="strata-chrome flex flex-col gap-2 justify-center" style={{ padding: "4px 8px" }}>
            <span className="strata-label">Mode</span>
            <div className="flex items-center gap-1">
              {(["radial", "color", "outlined", "dots"] as MapMode[]).map((m) => (
                <button key={m} onClick={() => onChangeMode(m)} className="strata-chip" data-active={mode === m}>
                  {m === "outlined" ? "Circles" : m === "radial" ? "Radial" : m === "color" ? "Color" : "Dots"}
                </button>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div className="strata-chrome flex flex-col gap-2 justify-center" style={{ padding: 8 }}>
              <span className="strata-label">Heat Risk</span>
              <div className="flex items-center gap-1.5">
                <span className="strata-tick-text" style={{ color: "var(--chip-color)" }}>High</span>
                <PollenIndexLegend mode={mode} theme={theme} />
                <span className="strata-tick-text" style={{ color: "var(--chip-color)" }}>Low</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click-to-popup */}
      {popup && (
        <div
          className="absolute strata-chrome pointer-events-none"
          style={{
            left: Math.max(8, Math.min(popup.containerX - 70, 9999)),
            top: Math.max(8, popup.containerY - 90),
            width: 150,
            padding: "8px 12px",
            borderRadius: 6,
            zIndex: 40,
          }}
        >
          <div style={{ fontFamily: "Jura, sans-serif", fontSize: 10, letterSpacing: "0.3px", color: "var(--chip-color)", marginBottom: 2 }}>
            {popup.cityName}, {popup.stateName}
          </div>
          <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 100, fontSize: 32, lineHeight: "36px", color: "var(--strata-ink)" }}>
            {popup.value.toFixed(1)}
          </div>
          <div style={{ fontFamily: "Jura, sans-serif", fontSize: 10, color: "var(--chip-color)" }}>
            Heat Risk
          </div>
        </div>
      )}

    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { CITIES, getPollen, getSeries, seasonalCurve, heatRiskCategory, feelsLikeF, type Range, type AllergenType } from "../../lib/pollen";
import { severityFor, bandColor, continuousColor, isColorMode, type SeverityKey, type MapMode } from "../../lib/severity";
import dialPaths from "../../../imports/DialCircle/svg-ail4i9y55e";

// The synthetic engine keeps its original tree/grass/weed field names; these are the
// heat-risk drivers they now represent, surfaced everywhere in the UI.
const DRIVER_LABEL: Record<AllergenType, string> = {
  tree: "Daytime Highs",
  grass: "Humidity",
  weed: "Overnight Lows",
};

// Smoothly tween a number toward its target (easeOutCubic), retargeting cleanly if the
// target changes mid-animation — so values glide/count rather than snapping (e.g. on play).
function useAnimatedNumber(target: number, duration = 650) {
  const [display, setDisplay] = useState(target);
  const displayRef = useRef(target);
  useEffect(() => {
    const from = displayRef.current;
    const to = target;
    if (Math.abs(from - to) < 0.005) { displayRef.current = to; setDisplay(to); return; }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = from + (to - from) * eased;
      displayRef.current = v;
      setDisplay(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return display;
}

// Catmull-Rom → cubic-bezier: draws a smooth curve through the given points so line
// charts read as flowing curves instead of kinked polylines.
function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  let d = `M${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
  }
  return d;
}

// Measure an element's live width (for responsive label thinning).
function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => setW(entries[0].contentRect.width));
    ro.observe(el);
    setW(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);
  return [ref, w] as const;
}

// Lightweight hover tooltip bubble anchored above its trigger (no external deps).
function HoverTip({ tip, children, width = 190 }: { tip: React.ReactNode; children: React.ReactNode; width?: number }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          style={{
            position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
            zIndex: 60, width, padding: "8px 10px", borderRadius: 6,
            background: "var(--strata-panel)", border: "0.5px solid var(--hairline)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.14)",
            fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 11, lineHeight: "16px",
            letterSpacing: "0.2px", color: "var(--strata-ink)", textAlign: "left", pointerEvents: "none",
            whiteSpace: "normal",
          }}
        >
          {tip}
        </span>
      )}
    </span>
  );
}

// Full-screen overlay used by the section Expand buttons to show an enlarged, detailed chart.
function Modal({ title, subtitle, onClose, children }: { title: string; subtitle?: string; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--strata-bg)", color: "var(--strata-ink)", borderRadius: 10,
          border: "0.5px solid var(--hairline)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          width: "min(760px, 92vw)", maxHeight: "88vh", overflowY: "auto", padding: 28,
        }}
      >
        <div className="flex items-start justify-between" style={{ marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 22, lineHeight: "28px" }}>{title}</div>
            {subtitle && <div style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, letterSpacing: "0.3px", color: "var(--chip-color)", marginTop: 4 }}>{subtitle}</div>}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ width: 30, height: 30, borderRadius: 6, border: "0.5px solid var(--hairline)", background: "transparent", color: "var(--strata-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16, lineHeight: 1 }}
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

interface Props {
  cityId: string;
  range: Range;
  date: Date;
  theme: "light" | "dark";
  mode: MapMode;
  onSelectCity?: (id: string) => void;
  onOpenDetail?: (id: string) => void;
}

const HAIRLINE = "0.5px solid var(--hairline)";
const SECTION_PB = 48; // whitespace before each section keyline

export function LeftPanel({ cityId, date, mode, onSelectCity, onOpenDetail }: Props) {
  const city = CITIES.find((c) => c.id === cityId)!;
  const reading = useMemo(() => getPollen(cityId, date), [cityId, date]);
  // The 12-month series only changes per year/city, so don't rebuild it on every 3-day
  // play tick. (Day series legitimately changes each day, so it stays keyed on date.)
  const year = date.getFullYear();
  const dayKey = `${date.getMonth()}-${date.getDate()}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const yearSeries = useMemo(() => getSeries(cityId, "year", date), [cityId, year]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const daySeries = useMemo(() => getSeries(cityId, "day", date), [cityId, dayKey]);
  const useColor = isColorMode(mode);

  return (
    <div
      style={{ background: "var(--strata-bg)", color: "var(--strata-ink)", containerType: "inline-size" }}
    >
      {/* 16px side margins so keylines don't run edge-to-edge */}
      <div style={{ margin: "0 16px" }}>
        <div className="px-6 pb-[40px] flex flex-col gap-[40px]" style={{ paddingTop: 32, borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
          <LocationPicker city={city} onDetail={onOpenDetail ? () => onOpenDetail(cityId) : undefined} />
          <Headline value={reading.total} feelsLike={feelsLikeF(reading.total, cityId, date)} useColor={useColor} />
        </div>

        <Breakdown tree={reading.tree} grass={reading.grass} weed={reading.weed} useColor={useColor} />
        <Forecast7Day cityId={cityId} date={date} useColor={useColor} />
        <PollenCalendar cityLat={city.lat} cityId={cityId} date={date} useColor={useColor} />
        <AllergySeasons cityLat={city.lat} date={date} useColor={useColor} treeColor={bandColor(reading.tree)} grassColor={bandColor(reading.grass)} weedColor={bandColor(reading.weed)} />
        <YearAtGlance series={yearSeries} date={date} useColor={useColor} />
        <TodayByHour series={daySeries} useColor={useColor} overallValue={reading.total} />
        <Footer />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Location picker
// ─────────────────────────────────────────────────────────────────────────────
function ChevronDownIcon() {
  return (
    <svg width={9} height={6} fill="none" viewBox="0 0 9 6">
      <path d="M1 1L4.4973 4.4973L7.9946 1" stroke="var(--strata-ink)" strokeLinecap="round" strokeWidth={1} />
    </svg>
  );
}

function LocationPicker({ city, onDetail }: { city: { name: string; state: string }; onDetail?: () => void }) {
  return (
    <div className="flex items-start gap-[9px]">
      <button onClick={onDetail} className="flex items-center gap-[6px]" style={{ cursor: onDetail ? "pointer" : "default", background: "transparent" }}>
        <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 18, lineHeight: "27px", letterSpacing: "0.02px" }}>
          {city.name}
        </span>
        <ChevronDownIcon />
      </button>
      <div style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--chip-color)", paddingTop: 2 }}>
        {city.state}, India
      </div>
      {onDetail && (
        <button
          onClick={onDetail}
          style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)", background: "transparent", marginLeft: 4, paddingTop: 3 }}
        >
          View details →
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Headline + Status badge
// ─────────────────────────────────────────────────────────────────────────────
function Headline({ value, feelsLike, useColor }: { value: number; feelsLike: number; useColor: boolean }) {
  const shown = useAnimatedNumber(value);
  const shownFeels = useAnimatedNumber(feelsLike);
  const category = heatRiskCategory(value);
  return (
    <div className="flex items-start gap-[18px] flex-wrap">
      <div className="flex flex-col">
        <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 100, fontSize: "clamp(40px, 34cqw, 148.9px)", lineHeight: "clamp(40px, 34cqw, 148.9px)", letterSpacing: "0", color: useColor ? bandColor(shown) : "var(--strata-ink)", transition: "color 300ms ease" }}>
          {category}
        </div>
        <div style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 13, lineHeight: "18px", letterSpacing: "0.6px", color: "var(--chip-color)", marginTop: 6 }}>
          Feels like {Math.round(shownFeels)}°F · HeatRisk {category}/4
        </div>
      </div>
      <div style={{ paddingTop: 8 }}>
        <StatusBadge value={shown} useColor={useColor} />
      </div>
    </div>
  );
}

const DOT_SIZES: Record<SeverityKey, number> = {
  low: 4.5,
  moderate: 6.5,
  high: 8,
  "very-high": 10,
  extreme: 10,
};

function StatusBadge({ value, useColor }: { value: number; useColor: boolean }) {
  const sev = severityFor(value);
  const dot = DOT_SIZES[sev.key];
  const dotColor = useColor ? bandColor(value) : "var(--strata-ink)";
  return (
    <div
      className="inline-flex items-center justify-center"
      style={{ background: "var(--badge-bg)", borderRadius: 3, padding: 6, gap: 5 }}
    >
      <div style={{ width: dot, height: dot, borderRadius: "50%", background: dotColor, transition: "background 300ms ease" }} />
      <span style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "12px", letterSpacing: "0.4px", color: "var(--strata-ink)" }}>
        {sev.label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Heat drivers — three compass gauges
// ─────────────────────────────────────────────────────────────────────────────
function Breakdown({ tree, grass, weed, useColor }: { tree: number; grass: number; weed: number; useColor: boolean }) {
  return (
    <section style={{ borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
      <div className="px-6 pt-5 flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <h3 style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 18, lineHeight: "27px", margin: 0 }}>
            Heat Drivers
          </h3>
          <InfoButton tip="Today's heat risk split into Daytime Highs, Humidity and Overnight Lows, each on the 0–12 scale. The dial shows the level at a glance." />
        </div>
      </div>
      <div className="flex px-6 pb-[40px]" style={{ marginTop: 30 }}>
        <BreakdownColumn label={DRIVER_LABEL.tree} value={tree} useColor={useColor} />
        <div style={{ width: 1, alignSelf: "stretch", background: "var(--hairline)", flexShrink: 0, margin: "0 16px" }} />
        <BreakdownColumn label={DRIVER_LABEL.grass} value={grass} useColor={useColor} />
        <div style={{ width: 1, alignSelf: "stretch", background: "var(--hairline)", flexShrink: 0, margin: "0 16px" }} />
        <BreakdownColumn label={DRIVER_LABEL.weed} value={weed} useColor={useColor} />
      </div>
    </section>
  );
}

function BreakdownColumn({ label, value, useColor }: { label: string; value: number; useColor: boolean }) {
  const shown = useAnimatedNumber(value);
  return (
    <div className="flex-1 flex flex-col items-center gap-[14px] py-[10px]" style={{ minWidth: 80 }}>
      <div className="self-stretch flex flex-col items-start gap-[6px]">
        <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 12, lineHeight: "18px", letterSpacing: "0.6px" }}>{label}</span>
        <StatusBadge value={shown} useColor={useColor} />
      </div>
      <CompassGauge value={shown} />
      <div style={{ fontFamily: "Geist, sans-serif", fontWeight: 300, fontSize: 32, lineHeight: "32px", color: useColor ? bandColor(shown) : "var(--strata-ink)", transition: "color 300ms ease" }}>
        {shown.toFixed(1)}
      </div>
    </div>
  );
}

// Imported Figma dial: full tick-ring face + a clean straight needle.
// ViewBox and centre come from the imported design (svg-ail4i9y55e).
function CompassGauge({ value }: { value: number }) {
  const VB_W = 87.908, VB_H = 86.6521;
  const cx = 43.9534, cy = 43.3255; // dial centre (from the imported tick geometry)
  const rNeedle = 34; // reaches just inside the inner tick band
  const pct = Math.max(0, Math.min(1, value / 12));
  // Needle sweep: bottom-left (-225°) clockwise 270° → bottom-right at max (matches design)
  const needleAngle = -225 + pct * 270;
  const rad = (needleAngle * Math.PI) / 180;
  const tipX = cx + rNeedle * Math.cos(rad);
  const tipY = cy + rNeedle * Math.sin(rad);

  return (
    <svg width={88} height={88} viewBox={`0 0 ${VB_W} ${VB_H}`} fill="none">
      {/* Dial face — tick ring from the imported design */}
      <path
        d={dialPaths.p4176180}
        stroke="var(--strata-ink)"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeOpacity="0.5"
        strokeWidth="0.615782"
      />
      {/* Value-driven needle */}
      <line
        x1={cx}
        y1={cy}
        x2={tipX.toFixed(3)}
        y2={tipY.toFixed(3)}
        stroke="var(--strata-ink)"
        strokeLinecap="square"
        strokeWidth="1.26112"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7-day forecast — species × day matrix
// ─────────────────────────────────────────────────────────────────────────────
type Species = "tree" | "grass" | "weed";

const SPECIES_LISTS: Record<Species, string[]> = {
  tree: ["Air Temp", "Heat Index", "Surface", "Solar Load", "UV"],
  grass: ["Rel. Humidity", "Dew Point", "Mugginess"],
  weed: ["Overnight Low", "Warm Nights", "Min Relief"],
};

function speciesMultiplier(speciesName: string, dayOffset: number): number {
  // Deterministic hash: name + day → 0.7..1.15 multiplier so each row varies a bit by day
  let h = 2166136261;
  const key = `${speciesName}-${dayOffset}`;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const u = ((h >>> 0) % 1000) / 1000;
  return 0.7 + u * 0.5;
}

function Forecast7Day({ cityId, date, useColor }: { cityId: string; date: Date; useColor: boolean }) {
  const [species, setSpecies] = useState<Species>("tree");
  const speciesNames = SPECIES_LISTS[species];
  const days = useMemo(() => {
    const out: { date: Date; values: Record<string, number> }[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(date);
      d.setDate(d.getDate() + i);
      const r = getPollen(cityId, d);
      const base = species === "tree" ? r.tree : species === "grass" ? r.grass : r.weed;
      const values: Record<string, number> = {};
      for (const name of speciesNames) {
        values[name] = Math.max(0, Math.min(12, base * speciesMultiplier(name, i)));
      }
      out.push({ date: d, values });
    }
    return out;
  }, [cityId, date, species, speciesNames]);

  const labels = useMemo(
    () => days.map((d, i) => (i === 0 ? "Today" : d.date.toLocaleDateString("en-US", { weekday: "short" }))),
    [days],
  );

  return (
    <section style={{ borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
      <div className="px-6 pt-5 flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <SectionTitle small>7-day Forecast</SectionTitle>
          <InfoButton tip="Daily heat-risk outlook for the next 7 days. Larger, more filled dots mean higher predicted risk." />
        </div>
        <SegmentedToggle
          options={[
            { key: "tree", label: "Highs" },
            { key: "grass", label: "Humidity" },
            { key: "weed", label: "Lows" },
          ]}
          value={species}
          onChange={(v) => setSpecies(v as Species)}
        />
      </div>
      <div className="px-6 pb-5" style={{ marginTop: 30 }}>
        {/* Header row: empty left + day columns */}
        <div className="grid items-center" style={{ gridTemplateColumns: "76px repeat(7, minmax(0, 1fr))", paddingBottom: 8 }}>
          <span />
          {labels.map((l, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", letterSpacing: "0.4px" }}
            >
              {l}
            </div>
          ))}
        </div>
        {/* Body */}
        {speciesNames.map((name) => (
          <div
            key={name}
            className="grid items-center"
            style={{ gridTemplateColumns: "76px repeat(7, minmax(0, 1fr))", paddingTop: 10, paddingBottom: 10 }}
          >
            <span style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 12, lineHeight: "18px", letterSpacing: "0.6px" }}>
              {name}
            </span>
            {days.map((d, i) => (
              <div key={i} className="flex items-center justify-center">
                <RingDot value={d.values[name]} useColor={useColor} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function RingDot({ value, useColor }: { value: number; useColor: boolean }) {
  const t = Math.max(0, Math.min(1, value / 12));
  const dotColor = useColor ? bandColor(value) : "var(--strata-ink)";
  if (useColor) {
    // Solid dot: size scales with heat risk
    const r = 1.4 + t * 5.6;
    return (
      <svg width={18} height={18} viewBox="0 0 18 18">
        <circle cx={9} cy={9} r={r} fill={dotColor} />
      </svg>
    );
  }
  // Ring + inner fill for Radial/Dots modes
  const outerR = 7;
  const innerR = 0.6 + t * 5.4;
  const fillOpacity = 0.35 + t * 0.65;
  const ringOpacity = 0.4 + t * 0.4;
  return (
    <svg width={18} height={18} viewBox="0 0 18 18">
      <circle cx={9} cy={9} r={outerR} fill="none" stroke={dotColor} strokeOpacity={ringOpacity} strokeWidth={0.6} />
      <circle cx={9} cy={9} r={innerR} fill={dotColor} fillOpacity={fillOpacity} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Heat Calendar
// ─────────────────────────────────────────────────────────────────────────────
type CalGranularity = "day" | "week" | "month";
type CalRange = "3m" | "9m" | "12m";

// Each calendar row is a specific heat phenomenon. The peak day-of-year offset varies
// per row so they intensify at slightly different times across the season; the base
// curve comes from `seasonalCurve(category, ...)`.
const CAL_SPECIES: { name: string; category: AllergenType; offsetDays: number }[] = [
  { name: "Spring Warmth", category: "tree", offsetDays: -55 },
  { name: "Early Heat", category: "tree", offsetDays: -30 },
  { name: "Peak Sun", category: "tree", offsetDays: -8 },
  { name: "Daytime Highs", category: "tree", offsetDays: 0 },
  { name: "Heat Waves", category: "tree", offsetDays: 12 },
  { name: "UV Load", category: "tree", offsetDays: 22 },
  { name: "Dew Point", category: "grass", offsetDays: -6 },
  { name: "Humidity", category: "grass", offsetDays: 0 },
  { name: "Mugginess", category: "grass", offsetDays: 14 },
  { name: "Warm Nights", category: "weed", offsetDays: -12 },
  { name: "Overnight Lows", category: "weed", offsetDays: 0 },
  { name: "Tropical Nights", category: "weed", offsetDays: 16 },
];

function PollenCalendar({ cityLat, date, useColor }: { cityLat: number; cityId: string; date: Date; useColor: boolean }) {
  const [granularity, setGranularity] = useState<CalGranularity>("month");
  const [calRange, setCalRange] = useState<CalRange>("12m");
  const [axisRef, axisW] = useWidth<HTMLDivElement>();

  const rangeMonths = calRange === "3m" ? 3 : calRange === "9m" ? 9 : 12;
  const samplesPerMonth = granularity === "day" ? 30 : granularity === "week" ? 4 : 1;
  const totalSamples = rangeMonths * samplesPerMonth;

  // Build samples ending at `date`. For 12m range, anchor to the calendar year so it reads Jan..Dec.
  const startDate = useMemo(() => {
    const d = new Date(date);
    if (calRange === "12m") {
      d.setMonth(0, 1);
    } else {
      d.setMonth(d.getMonth() - rangeMonths + 1, 1);
    }
    return d;
  }, [date, calRange, rangeMonths]);

  // For each species, sample its (offset) curve across the window.
  const speciesSamples = useMemo(() => {
    const stepDays = granularity === "day" ? 1 : granularity === "week" ? 7 : 30;
    return CAL_SPECIES.map((sp) => {
      const values: number[] = [];
      for (let i = 0; i < totalSamples; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i * stepDays);
        const baseDoy = Math.floor((d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86400000);
        const shifted = ((baseDoy - sp.offsetDays) % 365 + 365) % 365;
        values.push(seasonalCurve(sp.category, shifted, cityLat));
      }
      return { name: sp.name, values };
    });
  }, [startDate, totalSamples, granularity, cityLat]);

  // Month axis labels
  const months = useMemo(() => {
    const labels: { label: string; pos: number }[] = [];
    for (let i = 0; i < rangeMonths; i++) {
      const d = new Date(startDate);
      d.setMonth(d.getMonth() + i);
      labels.push({
        label: d.toLocaleDateString("en-US", { month: "short" }),
        pos: (i + 0.5) / rangeMonths,
      });
    }
    return labels;
  }, [startDate, rangeMonths]);

  return (
    <section style={{ borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
      <div className="px-6 pt-5 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-[9px]">
          <SectionTitle small>Heat Calendar</SectionTitle>
          <InfoButton tip="When each heat factor is active across the year. Brighter stretches mark peak season; switch the range and granularity above." />
        </div>
        <div className="flex items-center gap-2">
          <SegmentedToggle
            options={[
              { key: "day", label: "Day" },
              { key: "week", label: "Week" },
              { key: "month", label: "Month" },
            ]}
            value={granularity}
            onChange={(v) => setGranularity(v as CalGranularity)}
          />
          <SegmentedToggle
            options={[
              { key: "3m", label: "3M" },
              { key: "9m", label: "9M" },
              { key: "12m", label: "12M" },
            ]}
            value={calRange}
            onChange={(v) => setCalRange(v as CalRange)}
          />
        </div>
      </div>
      <div className="px-6 pb-5" style={{ marginTop: 30 }}>
        {/* Month axis — sits over the bar column only (label column reserved on right).
            Thin labels so they never collide: keep ~32px of breathing room per label. */}
        <div className="flex items-center" style={{ marginBottom: 8 }}>
          <div ref={axisRef} className="flex-1 relative" style={{ height: 18 }}>
            {(() => {
              const fit = axisW > 0 ? Math.max(1, Math.floor(axisW / 32)) : months.length;
              const stride = Math.max(1, Math.ceil(months.length / fit));
              return months.map((m, i) => {
                if (i % stride !== 0) return null;
                return (
                  <span
                    key={i}
                    className="absolute"
                    style={{
                      left: `${m.pos * 100}%`,
                      transform: "translateX(-50%)",
                      fontFamily: "Jura, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      lineHeight: "18px",
                      letterSpacing: "0.3px",
                      color: "var(--chip-color)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {m.label}
                  </span>
                );
              });
            })()}
          </div>
          <div style={{ width: 70 }} />
        </div>
        {/* Species bars — one row per species */}
        <div className="flex flex-col gap-[8px]">
          {speciesSamples.map((sp) => (
            <SeasonBar key={sp.name} samples={sp.values} label={sp.name} useColor={useColor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeasonBar({ samples, label, useColor }: { samples: number[]; label: string; useColor: boolean }) {
  const id = `cal-${label.toLowerCase()}-grad`;
  const stops = samples.map((v, i) => ({
    offset: (i / Math.max(1, samples.length - 1)) * 100,
    v: Math.max(0, Math.min(1, v)),
  }));
  return (
    <div className="flex items-center">
      <div className="flex-1" style={{ height: 3 }}>
        <svg width="100%" height={3} preserveAspectRatio="none" viewBox="0 0 100 3">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
              {stops.map((s, i) =>
                useColor ? (
                  <stop key={i} offset={`${s.offset}%`} stopColor={continuousColor(s.v * 12)} stopOpacity={s.v < 0.05 ? 0 : 1} />
                ) : (
                  <stop key={i} offset={`${s.offset}%`} stopColor="var(--strata-ink)" stopOpacity={(0.04 + s.v * 0.92).toFixed(3)} />
                )
              )}
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100" height="3" fill={`url(#${id})`} />
        </svg>
      </div>
      <span
        style={{
          width: 70,
          paddingLeft: 10,
          fontFamily: "Jura, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          letterSpacing: "0.3px",
          color: "var(--chip-color)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Allergy seasons — overlapping bell curves (smooth, hover, expandable)
// ─────────────────────────────────────────────────────────────────────────────
type SeasonProps = { cityLat: number; date: Date; useColor: boolean; treeColor: string; grassColor: string; weedColor: string };

function SeasonsChart({ cityLat, date, useColor, treeColor, grassColor, weedColor, height, detailed }: SeasonProps & { height: number; detailed?: boolean }) {
  const W = 280, padY = 8;
  const N = 53;
  const [hover, setHover] = useState<{ frac: number; idx: number } | null>(null);
  // The SVG uses preserveAspectRatio="none" so it stretches horizontally to fit
  // the container. That makes pattern <circle>s render as squashed ellipses. We
  // measure the rendered width and compensate so the weed dots stay perfectly
  // round at any container size.
  const containerRef = useRef<HTMLDivElement>(null);
  const [aspectX, setAspectX] = useState(1);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setAspectX(Math.max(0.001, el.clientWidth / W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const treeStroke = useColor ? treeColor : "var(--strata-ink)";
  const grassFill = useColor ? grassColor : "var(--strata-ink)";
  const weedFill = useColor ? weedColor : "var(--strata-ink)";

  const Y = (v: number) => height - padY - Math.max(0, Math.min(1, v)) * (height - padY * 2);

  // Curves depend only on latitude + chart height (NOT the date), so they don't rebuild
  // every play tick — only the "today" marker below moves with the date.
  const data = useMemo(() => {
    const tree: number[] = [], grass: number[] = [], weed: number[] = [];
    for (let i = 0; i < N; i++) {
      const doy = Math.round((i / (N - 1)) * 364);
      tree.push(seasonalCurve("tree", doy, cityLat));
      grass.push(seasonalCurve("grass", doy, cityLat));
      weed.push(seasonalCurve("weed", doy, cityLat));
    }
    const pts = (arr: number[]) => arr.map((v, i) => ({ x: (i / (N - 1)) * W, y: Y(v) }));
    const area = (p: { x: number; y: number }[]) => `${smoothPath(p)} L${W},${height - padY} L0,${height - padY} Z`;
    return {
      tree, grass, weed,
      treeLine: smoothPath(pts(tree)),
      grassArea: area(pts(grass)),
      weedArea: area(pts(weed)),
    };
  }, [cityLat, height]);

  const todayDoy = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const todayFrac = todayDoy / 365;

  function onMove(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    setHover({ frac, idx: Math.round(frac * (N - 1)) });
  }

  const hoverMonth = hover ? new Date(date.getFullYear(), 0, 1 + Math.round((hover.idx / (N - 1)) * 364)).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
  const rows = hover
    ? [
        { label: DRIVER_LABEL.tree, v: data.tree[hover.idx], c: treeStroke },
        { label: DRIVER_LABEL.grass, v: data.grass[hover.idx], c: grassFill },
        { label: DRIVER_LABEL.weed, v: data.weed[hover.idx], c: weedFill },
      ]
    : [];

  const weedPatId = "weedDotPat";
  // Target on-screen dot radius (px). Halved from the previous 1.1 user-space
  // value so dots are 50% smaller. Tile and ellipse rx are scaled by aspectX
  // so the rendered dots are perfect circles regardless of container width.
  const dotR = 0.55;
  const tilePx = 5; // tile size in screen pixels
  const tileX = tilePx / aspectX;
  const tileY = tilePx;

  return (
    <div ref={containerRef} className="relative" style={{ height }} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg width="100%" height={height} viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="none" style={{ display: "block" }}>
        <defs>
          {/* Small dot pattern used for Weed area in color modes */}
          <pattern id={weedPatId} patternUnits="userSpaceOnUse" width={tileX} height={tileY}>
            <ellipse cx={tileX / 2} cy={tileY / 2} rx={dotR / aspectX} ry={dotR} fill={weedFill} />
          </pattern>
        </defs>
        {detailed && [0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1={0} x2={W} y1={Y(g)} y2={Y(g)} stroke="var(--hairline)" strokeOpacity={0.4} strokeWidth={0.5} vectorEffect="non-scaling-stroke" />
        ))}
        <path d={data.weedArea} fill={useColor ? `url(#${weedPatId})` : weedFill} fillOpacity={useColor ? 1 : 0.18} />
        <path d={data.grassArea} fill={grassFill} fillOpacity={useColor ? 0.85 : 0.35} />
        <path d={data.treeLine} fill="none" stroke={treeStroke} strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
        {/* Today marker */}
        <line x1={todayFrac * W} y1={padY - 2} x2={todayFrac * W} y2={height - padY} stroke="var(--strata-ink)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        <line x1={todayFrac * W - 3} y1={padY - 2} x2={todayFrac * W + 3} y2={padY - 2} stroke="var(--strata-ink)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        {hover && (
          <line x1={hover.frac * W} y1={padY - 2} x2={hover.frac * W} y2={height - padY} stroke="var(--strata-ink)" strokeOpacity={0.45} strokeWidth={0.8} strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
        )}
      </svg>

      {/* Hover dots on each curve */}
      {hover && rows.map((r) => (
        <div key={r.label} style={{ position: "absolute", left: `${hover.frac * 100}%`, top: `${(Y(r.v) / height) * 100}%`, width: 5, height: 5, borderRadius: "50%", background: r.c, transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      ))}

      {/* Hover tooltip */}
      {hover && (
        <div
          style={{
            position: "absolute", top: 0, left: `${hover.frac * 100}%`,
            transform: `translateX(${hover.frac > 0.6 ? "calc(-100% - 8px)" : "8px"})`,
            background: "var(--strata-panel)", border: "0.5px solid var(--hairline)", borderRadius: 6,
            boxShadow: "0 6px 20px rgba(0,0,0,0.14)", padding: "7px 9px", pointerEvents: "none", minWidth: 96,
            fontFamily: "Jura, sans-serif",
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: "0.3px", color: "var(--chip-color)", marginBottom: 4 }}>{hoverMonth}</div>
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between" style={{ gap: 10, fontSize: 11, color: "var(--strata-ink)" }}>
              <span className="flex items-center" style={{ gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: r.c }} />
                {r.label}
              </span>
              <span style={{ fontFamily: "Geist Mono, monospace" }}>{(r.v * 12).toFixed(1)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SeasonsLegend({ useColor, treeColor, grassColor, weedColor }: Omit<SeasonProps, "cityLat" | "date">) {
  return (
    <div className="flex items-center gap-4">
      {[
        { label: DRIVER_LABEL.tree, swatch: "outline", color: treeColor },
        { label: DRIVER_LABEL.grass, swatch: "mid", color: grassColor },
        { label: DRIVER_LABEL.weed, swatch: "light", color: weedColor },
      ].map((it) => (
        <div key={it.label} className="flex items-center gap-1.5">
          <span
            style={{
              width: 10, height: 10, borderRadius: 2,
              background: useColor
                ? it.swatch === "outline" ? "transparent" : it.color
                : it.swatch === "outline" ? "transparent" : it.swatch === "mid" ? "rgba(0,0,0,0.32)" : "rgba(0,0,0,0.14)",
              border: it.swatch === "outline" ? `1px solid ${useColor ? it.color : "var(--strata-ink)"}` : "none",
              opacity: it.swatch === "light" ? 0.5 : 1,
            }}
          />
          <span style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, letterSpacing: "0.3px", color: "var(--chip-color)" }}>
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function MonthAxis() {
  return (
    <div className="flex items-center" style={{ paddingTop: 6 }}>
      {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
        <div key={i} className="flex-1 text-center" style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", letterSpacing: "0.3px", color: "var(--chip-color)" }}>
          {m}
        </div>
      ))}
    </div>
  );
}

function AllergySeasons(props: SeasonProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section style={{ borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
      <div className="px-6 pt-5 flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <SectionTitle small>Heat Season</SectionTitle>
          <InfoButton tip="Seasonal intensity curves for Daytime Highs, Humidity and Overnight Lows across the year. The vertical marker is today. Hover for exact levels." />
        </div>
        <ExpandButton onClick={() => setExpanded(true)} />
      </div>
      <div className="px-6 pb-5" style={{ marginTop: 30 }}>
        <div className="flex items-stretch gap-2">
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.3px", color: "var(--chip-color)", textAlign: "center", alignSelf: "center", paddingBottom: 18 }}>
            Intensity
          </div>
          <div className="flex-1">
            <SeasonsChart {...props} height={180} />
            <MonthAxis />
            <div className="text-center" style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.3px", color: "var(--chip-color)", marginTop: 4 }}>
              Month
            </div>
          </div>
        </div>
        <div className="mt-3">
          <SeasonsLegend useColor={props.useColor} treeColor={props.treeColor} grassColor={props.grassColor} weedColor={props.weedColor} />
        </div>
      </div>

      {expanded && (
        <Modal title="Heat Season" subtitle="Daytime highs, humidity and overnight lows across the full year" onClose={() => setExpanded(false)}>
          <SeasonsChart {...props} height={320} detailed />
          <MonthAxis />
          <div className="flex items-center justify-between mt-4">
            <SeasonsLegend useColor={props.useColor} treeColor={props.treeColor} grassColor={props.grassColor} weedColor={props.weedColor} />
            <span style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)" }}>Risk 0–12 · hover for exact levels</span>
          </div>
        </Modal>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Year at a glance — month-ring donut
// ─────────────────────────────────────────────────────────────────────────────
const MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function YearAtGlance({ series, date, useColor }: { series: { total: number }[]; date: Date; useColor: boolean }) {
  const currentMonth = date.getMonth();
  const [expanded, setExpanded] = useState(false);
  const intensities = series.map((p) => Math.max(0, Math.min(1, p.total / 12)));
  const values = series.map((p) => p.total);
  return (
    <section style={{ borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
      <div className="px-6 pt-5 flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <SectionTitle small>Year At A Glance</SectionTitle>
          <InfoButton tip="Average heat risk for each month of the year. The pointer marks the current month. Hover a segment for its value." />
        </div>
        <ExpandButton onClick={() => setExpanded(true)} />
      </div>
      <div className="px-6 pb-6 flex items-center justify-center" style={{ marginTop: 30 }}>
        <MonthRing intensities={intensities} values={values} currentMonth={currentMonth} year={date.getFullYear()} useColor={useColor} fluid />
      </div>

      {expanded && (
        <Modal title="Year At A Glance" subtitle={`Monthly average heat risk · ${date.getFullYear()}`} onClose={() => setExpanded(false)}>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: 32 }}>
            <MonthRing intensities={intensities} values={values} currentMonth={currentMonth} year={date.getFullYear()} useColor={useColor} size={300} />
            <div className="flex flex-col" style={{ gap: 6, minWidth: 180 }}>
              {MONTH_SHORT.map((m, i) => (
                <div key={m} className="flex items-center justify-between" style={{ gap: 12, fontFamily: "Jura, sans-serif", fontSize: 12, color: i === currentMonth ? "var(--strata-ink)" : "var(--chip-color)" }}>
                  <span className="flex items-center" style={{ gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: useColor ? continuousColor(values[i]) : "var(--strata-ink)", opacity: useColor ? 1 : 0.2 + intensities[i] * 0.8 }} />
                    {m}{i === currentMonth ? " · now" : ""}
                  </span>
                  <span style={{ fontFamily: "Geist Mono, monospace", color: "var(--strata-ink)" }}>{values[i].toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

function MonthRing({ intensities, values, currentMonth, year, useColor, size = 220, fluid = false }: { intensities: number[]; values: number[]; currentMonth: number; year: number; useColor: boolean; size?: number; fluid?: boolean }) {
  const [hoverI, setHoverI] = useState<number | null>(null);
  const cx = size / 2, cy = size / 2;
  const rOuter = size * 0.418;
  const rInner = size * 0.291;
  const gap = 1.2; // degrees
  const segDeg = 360 / 12;
  // Months arranged starting at top (-90°), clockwise
  function arcPath(i: number) {
    const a0 = -90 + i * segDeg + gap / 2;
    const a1 = -90 + (i + 1) * segDeg - gap / 2;
    const r0 = (a0 * Math.PI) / 180;
    const r1 = (a1 * Math.PI) / 180;
    const x0o = cx + rOuter * Math.cos(r0);
    const y0o = cy + rOuter * Math.sin(r0);
    const x1o = cx + rOuter * Math.cos(r1);
    const y1o = cy + rOuter * Math.sin(r1);
    const x1i = cx + rInner * Math.cos(r1);
    const y1i = cy + rInner * Math.sin(r1);
    const x0i = cx + rInner * Math.cos(r0);
    const y0i = cy + rInner * Math.sin(r0);
    return `M${x0o.toFixed(2)},${y0o.toFixed(2)} A${rOuter},${rOuter} 0 0 1 ${x1o.toFixed(2)},${y1o.toFixed(2)} L${x1i.toFixed(2)},${y1i.toFixed(2)} A${rInner},${rInner} 0 0 0 ${x0i.toFixed(2)},${y0i.toFixed(2)} Z`;
  }

  // Marker — straight 1px line from outside the ring with a small dot at its tip.
  const markerAngle = -90 + (currentMonth + 0.5) * segDeg;
  const mr = (markerAngle * Math.PI) / 180;
  const lineStartR = rOuter + 4;
  const lineEndR = rOuter + 12;
  const lineStartX = cx + lineStartR * Math.cos(mr);
  const lineStartY = cy + lineStartR * Math.sin(mr);
  const lineEndX = cx + lineEndR * Math.cos(mr);
  const lineEndY = cy + lineEndR * Math.sin(mr);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={fluid ? "100%" : size}
      height={fluid ? undefined : size}
      style={fluid ? { display: "block", width: "100%", maxWidth: 440, height: "auto", aspectRatio: "1 / 1" } : undefined}
    >
      {/* Segments */}
      {intensities.map((v, i) => (
        <path key={i} d={arcPath(i)}
          fill={useColor ? continuousColor(values[i]) : "var(--strata-ink)"}
          opacity={useColor ? (hoverI === null || hoverI === i ? 1 : 0.45) : Number((0.06 + v * 0.78).toFixed(3)) * (hoverI === null || hoverI === i ? 1 : 0.5)}
          stroke={hoverI === i ? "var(--strata-ink)" : "none"}
          strokeWidth={hoverI === i ? 1 : 0}
          style={{ cursor: "pointer", transition: "opacity 150ms ease" }}
          onMouseEnter={() => setHoverI(i)}
          onMouseLeave={() => setHoverI(null)} />
      ))}
      {/* Month labels just inside segments */}
      {MONTH_SHORT.map((m, i) => {
        const a = -90 + (i + 0.5) * segDeg;
        const r = (a * Math.PI) / 180;
        const lr = (rOuter + rInner) / 2;
        const lx = cx + lr * Math.cos(r);
        const ly = cy + lr * Math.sin(r);
        const isCurrent = i === currentMonth;
        return (
          <text
            key={i}
            x={lx.toFixed(1)}
            y={ly.toFixed(1)}
            dominantBaseline="middle"
            textAnchor="middle"
            style={{
              fontFamily: "Jura, sans-serif",
              fontWeight: 400,
              fontSize: 10,
              letterSpacing: "0.3px",
              fill: isCurrent ? "var(--strata-bg)" : "var(--strata-bg)",
              opacity: isCurrent ? 0.95 : 0.7,
            }}
          >
            {m[0]}
          </text>
        );
      })}
      {/* Outer marker: straight 1px line with a dot at its tip */}
      <line
        x1={lineStartX.toFixed(2)}
        y1={lineStartY.toFixed(2)}
        x2={lineEndX.toFixed(2)}
        y2={lineEndY.toFixed(2)}
        stroke="var(--strata-ink)"
        strokeWidth={1}
      />
      <circle cx={lineEndX.toFixed(2)} cy={lineEndY.toFixed(2)} r={2.2} fill="var(--strata-ink)" />
      {/* Centre text — shows the current month + year, or the hovered month + its value */}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontFamily: "Geist, sans-serif", fontWeight: 200, fontSize: 22, fill: "var(--strata-ink)" }}
      >
        {MONTH_SHORT[hoverI ?? currentMonth]}
      </text>
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fontFamily: hoverI !== null ? "Geist Mono, monospace" : "Jura, sans-serif", fontWeight: 400, fontSize: 12, letterSpacing: "0.4px", fill: hoverI !== null ? "var(--strata-ink)" : "var(--chip-color)" }}
      >
        {hoverI !== null ? `${values[hoverI].toFixed(1)} risk` : year}
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Today by hour (smooth, hover, expandable)
// ─────────────────────────────────────────────────────────────────────────────
type HourData = { label: string; total: number }[];

// Vertical gradient stops for the color-mode hour chart stroke — red at top (high
// heat) fading through orange to green at the bottom (low risk).
const HOUR_COLOR_STOPS = [
  { offset: "0%",   color: "#DF4D2A" },
  { offset: "20%",  color: "#EC832C" },
  { offset: "40%",  color: "#E8B335" },
  { offset: "60%",  color: "#C7C43C" },
  { offset: "80%",  color: "#94C13D" },
  { offset: "100%", color: "#6EB037" },
];

function HourChart({ data, useColor, overallValue, height, detailed }: { data: HourData; useColor: boolean; overallValue: number; height: number; detailed?: boolean }) {
  const W = 280, pad = 16, max = 12;
  const n = data.length;
  const [hover, setHover] = useState<{ frac: number; idx: number } | null>(null);
  // For the hover dot color we still want a single representative color.
  const lineColor = useColor ? continuousColor(overallValue) : "var(--strata-ink)";
  const gradId = useColor ? "hourColorGrad" : "hourGrayGrad";

  const X = (i: number) => pad + (i / (n - 1)) * (W - pad * 2);
  const Y = (v: number) => pad + (1 - v / max) * (height - pad * 2);

  const { linePath, areaPath } = useMemo(() => {
    if (n === 0) return { linePath: "", areaPath: "" };
    const pts = data.map((d, i) => ({ x: X(i), y: Y(d.total) }));
    const line = smoothPath(pts);
    return { linePath: line, areaPath: `${line} L${X(n - 1)},${height - pad} L${X(0)},${height - pad} Z` };
  }, [data, height]);

  if (n === 0) return null;

  function onMove(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    const frac = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    setHover({ frac, idx: Math.round(frac * (n - 1)) });
  }

  const hx = hover ? X(hover.idx) : 0;
  const hy = hover ? Y(data[hover.idx].total) : 0;

  return (
    <div className="relative" style={{ height }} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg width="100%" height={height} viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="none" overflow="visible" style={{ display: "block" }}>
        <defs>
          {useColor ? (
            <linearGradient id={gradId} x1="0" y1={pad} x2="0" y2={height - pad} gradientUnits="userSpaceOnUse">
              {HOUR_COLOR_STOPS.map((s) => (
                <stop key={s.offset} offset={s.offset} stopColor={s.color} />
              ))}
            </linearGradient>
          ) : (
            <linearGradient id={gradId} x1="0" y1={pad} x2="0" y2={height - pad} gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="var(--strata-ink)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--strata-ink)" stopOpacity="0.2" />
            </linearGradient>
          )}
        </defs>
        {detailed && [0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1={0} x2={W} y1={Y(g * max)} y2={Y(g * max)} stroke="var(--hairline)" strokeOpacity={0.4} strokeWidth={0.5} vectorEffect="non-scaling-stroke" />
        ))}
        {/* Subtle area fill for depth */}
        <path d={areaPath} fill={`url(#${gradId})`} fillOpacity={useColor ? 0.09 : 0.09} />
        {/* Gradient stroke line */}
        <path d={linePath} fill="none" stroke={`url(#${gradId})`} strokeWidth={3} strokeLinecap="round" />
        {hover && (
          <line x1={hx} y1={pad - 4} x2={hx} y2={height - pad} stroke="var(--strata-ink)" strokeOpacity={0.45} strokeWidth={0.8} strokeDasharray="2 2" vectorEffect="non-scaling-stroke" />
        )}
      </svg>
      {hover && (
        <div style={{ position: "absolute", left: `${(hx / W) * 100}%`, top: `${(hy / height) * 100}%`, width: 6, height: 6, borderRadius: "50%", background: lineColor, transform: "translate(-50%,-50%)", pointerEvents: "none", boxShadow: "0 0 0 2px var(--strata-bg)" }} />
      )}
      {hover && (
        <div
          style={{
            position: "absolute", top: 0, left: `${(hx / W) * 100}%`,
            transform: `translateX(${hover.frac > 0.6 ? "calc(-100% - 8px)" : "8px"})`,
            background: "var(--strata-panel)", border: "0.5px solid var(--hairline)", borderRadius: 6,
            boxShadow: "0 6px 20px rgba(0,0,0,0.14)", padding: "7px 9px", pointerEvents: "none",
            fontFamily: "Jura, sans-serif", whiteSpace: "nowrap",
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: "0.3px", color: "var(--chip-color)" }}>{data[hover.idx].label}</div>
          <div style={{ fontFamily: "Geist Mono, monospace", fontSize: 13, color: "var(--strata-ink)", marginTop: 2 }}>{data[hover.idx].total.toFixed(1)}</div>
        </div>
      )}
    </div>
  );
}

function HourAxis({ ticks }: { ticks: number[] }) {
  return (
    <div className="flex items-center" style={{ paddingTop: 6 }}>
      {ticks.map((h, i) => (
        <div
          key={h}
          className="flex-1"
          style={{
            fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "18px", letterSpacing: "0.3px",
            color: "var(--chip-color)", textAlign: i === 0 ? "left" : i === ticks.length - 1 ? "right" : "center",
          }}
        >
          {h.toString().padStart(2, "0")}:00
        </div>
      ))}
    </div>
  );
}

function TodayByHour({ series, useColor, overallValue }: { series: HourData; useColor: boolean; overallValue: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section style={{ borderBottom: HAIRLINE, paddingBottom: SECTION_PB }}>
      <div className="px-6 pt-5 flex items-center justify-between">
        <div className="flex items-center gap-[9px]">
          <SectionTitle small>Today By Hour</SectionTitle>
          <InfoButton tip="How today's heat risk rises and falls hour by hour. Levels are usually highest mid-afternoon. Hover for the hourly value." />
        </div>
        <ExpandButton onClick={() => setExpanded(true)} />
      </div>
      <div className="px-6 pb-5" style={{ marginTop: 30 }}>
        <div className="flex items-stretch gap-2">
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.3px", color: "var(--chip-color)", textAlign: "center", alignSelf: "center", paddingBottom: 22 }}>
            Risk
          </div>
          <div className="flex-1">
            <HourChart data={series} useColor={useColor} overallValue={overallValue} height={210} />
            <HourAxis ticks={[0, 6, 12, 18, 23]} />
            <div className="text-center" style={{ fontFamily: "Jura, sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: "0.3px", color: "var(--chip-color)", marginTop: 4 }}>
              Hour of day
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <Modal title="Today By Hour" subtitle="Hourly heat risk for the current day" onClose={() => setExpanded(false)}>
          <HourChart data={series} useColor={useColor} overallValue={overallValue} height={300} detailed />
          <HourAxis ticks={[0, 3, 6, 9, 12, 15, 18, 21, 23]} />
          <div className="text-center" style={{ fontFamily: "Jura, sans-serif", fontSize: 11, color: "var(--chip-color)", marginTop: 8 }}>Hour of day · risk 0–12</div>
        </Modal>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared bits
// ─────────────────────────────────────────────────────────────────────────────
function SectionTitle({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <h3
      style={{
        fontFamily: "Geist, sans-serif",
        fontWeight: 200,
        fontSize: small ? 16 : 18,
        lineHeight: small ? "24px" : "27px",
        letterSpacing: small ? "0.32px" : 0,
        color: "var(--strata-ink)",
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
}

function SegmentedToggle({
  options,
  value,
  onChange,
}: {
  options: { key: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      className="flex items-center gap-[4px] p-[4px] shrink-0"
      style={{ background: "var(--chrome-bg)", borderRadius: 4 }}
    >
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          style={{
            fontFamily: "Jura, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "15px",
            letterSpacing: "0.4px",
            color: value === o.key ? "var(--chip-active-color)" : "var(--chip-color)",
            background: value === o.key ? "var(--chip-active-bg)" : "transparent",
            boxShadow: value === o.key ? "0px 1px 0.75px rgba(0,0,0,0.25)" : "none",
            borderRadius: 2,
            padding: "4px 8px",
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function InfoButton({ tip }: { tip: string }) {
  return (
    <HoverTip tip={tip}>
      <div
        className="inline-flex items-center justify-center"
        style={{
          width: 16,
          height: 16,
          borderRadius: 16,
          border: "0.55px solid var(--chip-color)",
          fontFamily: "Geist, sans-serif",
          fontWeight: 300,
          fontSize: 12,
          lineHeight: "12px",
          color: "var(--chip-color)",
          cursor: "help",
        }}
      >
        i
      </div>
    </HoverTip>
  );
}

function ExpandButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "Jura, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "18px",
        letterSpacing: "0.4px",
        color: "var(--chip-color)",
        background: "transparent",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      Expand
    </button>
  );
}

function Footer() {
  return (
    <div className="px-6 py-5">
      <span
        style={{
          fontFamily: "Jura, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "22px",
          letterSpacing: "0.4px",
          color: "var(--chip-color)",
        }}
      >
        HeatRisk, 2026
      </span>
    </div>
  );
}

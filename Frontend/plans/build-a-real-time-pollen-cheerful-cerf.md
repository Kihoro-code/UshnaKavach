# Strata — Real-Time Pollen Dashboard

## Context
Build "Strata", a clean, technical, monospace-led pollen dashboard. Two-zone layout: scrollable data panel (left) + interactive US map (right). The two are linked — clicking a city on the map updates everything in the panel. Data is generated synthetically (deterministic, seasonal, latitude-aware) but the fetch layer is structured so a real API can be swapped in later. Fully responsive (map becomes primary ≤1023px) with a dark mode toggle.

## Data model (synthetic)
`src/app/lib/pollen.ts`
- `CITIES`: ~60–80 US cities with `{id, name, state, lat, lng}` covering geographic spread.
- `seededRandom(seed)`: mulberry32 PRNG; seed derived from city id + date.
- `seasonalCurve(type, dayOfYear, lat)`: bell curves
  - Tree: peak ~day 100, narrower in north, earlier in south
  - Grass: peak ~day 160
  - Weed: peak ~day 240
  - Latitude shifts peak ±20 days, scales amplitude
- `getPollen(cityId, date)` → `{ tree, grass, weed, total }` each 0–12, deterministic.
- `getSeries(cityId, range: 'day'|'month'|'year')` → array for charts.
- `fetchPollen(cityId, date)` async wrapper that currently calls the synthetic generator; comment marks the swap-in point for a real API.

## Severity scale
`src/app/lib/severity.ts` — buckets 0–12 → {label, color token}: Low (0–2), Moderate (3–5), High (6–8), Very High (9–10), Extreme (11–12). Colors as CSS vars so dark mode reskins cleanly.

## Components (`src/app/components/`)
- `StrataLogo.tsx` — adapted from `/src/imports/StrataLogo` (use SVG paths, swap fill to `currentColor`).
- `Header.tsx` — logo, dark mode toggle, search/location selector.
- `LeftPanel.tsx` — scroll container, composes:
  - `LocationHeader.tsx` — city, state, coords, timestamp
  - `PollenIndex.tsx` — large headline number colored by severity + severity badge
  - `AllergenDials.tsx` — three radial dials (Tree/Grass/Weed) with values; SVG arc.
  - `TimeControls.tsx` — segmented Day/Month/Year toggle
  - `DataTable.tsx` — recent readings
  - `MiniCharts.tsx` — 2–3 small recharts sparkline/area charts
- `MapPanel.tsx` — composes:
  - `USMap.tsx` — SVG of US states (use a simple existing topojson-derived path set or inline path data; equirectangular projection helper `project(lat,lng)`)
  - Pan via pointer drag, zoom via scrubber slider (scales dot radius and labels visibility)
  - `CityDot.tsx` — radius + fill encode intensity; click handler
  - `MapModeToggle.tsx` — Dots / Outlined / Radial / Color
  - `MapLegend.tsx` — high→low gradient with severity stops
  - Label adaptation: zoom < 1.2 → state abbreviations; ≥1.2 → city names; missing city name → coords

## State (`src/app/App.tsx`)
- `selectedCityId`, `date`, `range`, `mapMode`, `zoom`, `pan`, `theme`
- React context `StrataContext` to share with both panels (avoid prop drilling).
- Clicking a `CityDot` → `setSelectedCityId` → entire left panel re-derives via `getPollen`.

## Theming
- Add Geist + Jura imports to `src/styles/fonts.css`.
- Define monospace-led type stack and severity color tokens in `src/styles/theme.css` for both light and dark schemes (`.dark` selector).
- Dark mode toggle flips `document.documentElement.classList`.

## Responsive
- Desktop ≥1024px: two-column grid (left 420px / right flex).
- ≤1023px: stack vertically, map first (hero), panel below as a scrollable section. Map fills viewport width; left panel becomes a vertically scrolling stack.

## Visual reference
Match attached Figma design closely — large light-weight Geist numerals, Jura for labels, subtle borders, dense but airy spacing, dot-encoded map.

## Design system check
`@figma/*`, `@make-kits/*`, `@screentime/*` packages — read `package.json`, then read each present package's `guidelines/setup.md` and `Guidelines.md` before authoring UI; use kit primitives (Button, Toggle, Slider, Card, Badge) where available rather than rolling custom.

## Verification
- `pnpm` install any new deps (`recharts` for charts).
- Open preview surface (not localhost): confirm
  - Clicking different cities updates left panel headline, dials, table, charts, and color.
  - Time range toggle updates charts.
  - Zoom scrubber scales dots and progressively reveals labels (state → city → coords).
  - Map mode toggle visibly changes encoding (filled dots, outlined rings, radial gradient halos, pure color tiles).
  - Dark mode toggle swaps theme tokens cleanly.
  - At ≤1023px, layout reflows with map on top.
  - Synthetic data is stable per city across reloads (deterministic seed).

---

# UPDATE: Burst Refinement, Zoom Perf, Legend, Left Panel Rebuild

## Context
Three targeted fixes plus one major rebuild:
1. **Bursts have a dot in the gap** — design (`src/imports/PollenScale-1`) shows bursts as **stroke-only** spokes with empty centers, no filled dot. Current implementation adds a filled centre disc that fills the gap.
2. **Zoom still feels slow** — even after removing density-tied rebuilds, painting ~1100+ cells with per-cell CSS transitions on every frame stutters at high zoom. Need viewport culling so only visible cells render.
3. **Pollen Index legend** — must mirror the burst update (no centre dot).
4. **Left panel is far from the design** — needs a full rebuild against `src/imports/Container-1` reference: location picker, big headline + status badge, three-up dial circles, 7-day forecast grid, allergy seasons grid, year-at-a-glance, today-by-hour.

## 1. Burst — remove centre dot, keep gap

`src/app/components/strata/MapPanel.tsx` — `renderRadialBurst()` and the inline `PollenIndexLegend()` (top of file):
- Drop the `<circle r={dotR} ...>` element entirely. The burst becomes just the scaled `<path d={RADIAL_SPOKES_PATH}>` with `SPOKE_INNER = 0.28` keeping spokes outside an empty centre.
- Keep `opacity={0.6}` on the wrapping `<g>`.
- Match design stroke: `strokeWidth={0.5}` (already), `strokeOpacity={0.6}` baked on the path, `strokeLinecap="round"`.
- Remove the `transition: r 380ms` style (no circle to animate).
- Update `PollenIndexLegend` tier rendering to match: each tier is just `<path>` scaled — no centre circle.

## 2. Zoom — viewport culling

`src/app/components/strata/MapPanel.tsx`:
- Compute the visible viewBox rect each render from `pan` and `zoom` (cheap arithmetic): the part of viewBox actually showing on screen.
  - Visible: `vx0 = (W/2)*(1 - 1/zoom) - pan.x/zoom`, similarly `vy0`, plus full visible width/height = `W/zoom`, `H/zoom`.
- In the `mainlandGrid.cells.map(...)` and `akGrid.cells.map(...)` callbacks, skip cells whose `(c.x, c.y)` falls outside the visible rect plus a small margin (~`liveStep`). Same for ghostDots.
- Wrap the cell list in a `useMemo` keyed on `[mainlandGrid, mode, viewBoxRect, cellSizeMul]` so React reuses fibers between renders that don't change visible cells.
- Also memo the rendered ghost dots & border segments by visible rect.
- Effect: at zoom 4× a viewport area is 1/16 of the canvas → roughly 1/16 of cells render → far fewer SVG nodes for the browser to repaint each frame.

## 3. Left panel rebuild — match `src/imports/Container-1`

Rewrite `src/app/components/strata/LeftPanel.tsx` and add child components in `src/app/components/strata/leftpanel/`:

### Sections (top to bottom)
1. **Header** — `LocationPicker` (Geist ExtraLight 18px city name + chevron-down icon) and a small "STATE/REGION" caps line (`Jura Regular 12px tracking 1.6px uppercase rgba(0,0,0,0.4)`). Re-uses `CITIES` from `src/app/lib/pollen.ts`.
2. **Headline** — huge `reading.total.toFixed(1)` in **Geist Thin 148px** with negative tracking (`-7.4455px`), and a `StatusBadge` next to it (small black dot + `severityFor(reading.total).label` in Jura Regular 12px on `rgba(0,0,0,0.03)` rounded-3px chip).
3. **Pollen breakdown** — title row "Pollen breakdown" (Geist ExtraLight 18px) + a circle "i" info button. Below, three equal columns (Tree / Grass / Weed), each with: species label (Geist ExtraLight 12px tracking 0.6px), severity badge (dot + label, dot size scales with severity), `DialCircle` (87.9px round with arrow direction indicator pointing at the value's position on the arc), large value (Geist Light 32px). Columns separated by left hairline. Reuse `severityFor()` for badge labels.
4. **7-day forecast** — title row "7-day forecast" (Geist ExtraLight 16px) + Tree/Grass/Weeds segmented toggle (`Jura Medium 12px`, frosted `rgba(0,0,0,0.05)` 4px-radius pill, active = filled black). Below, 7 day columns: header row with day labels (Today, Thu…) Jura Regular 12px, then 7 `PollenDot` rows (one per species probably — design shows pollen dots in a column for each day; small SVG icons). Reuse `getSeries(cityId, 'day' or similar, date)` adapted to 7 future days; will need a small extension `getForecast(cityId, date, days)` in `src/app/lib/pollen.ts`.
5. **Allergy seasons** — section with single-letter month columns (J F M A M J J A S O N D) and three rows (Tree / Grass / Weed) showing seasonal bar with a current-month marker. Build from `seasonalCurve()` in `src/app/lib/pollen.ts` sampled at 12 monthly midpoints; render bar opacity proportional to value.
6. **Year at a glance** — months Jan–Dec across, with current month emphasised in Geist ExtraLight 18px below the row.
7. **Today by hour** — uses existing `getSeries(cityId, 'day', date)` for hourly series; render compact line/dot strip.
8. **Footer** — small "Strata, 2026" caption (Jura Regular 12px rgba(0,0,0,0.4)).

### Design tokens to add to `src/styles/theme.css`
- `--badge-bg: rgba(0,0,0,0.03)` (light) / `rgba(255,255,255,0.04)` (dark).
- `--hairline: rgba(0,0,0,0.08)` (light) / `rgba(255,255,255,0.08)` (dark).
- Jura tracking helpers via inline styles (no class needed).

### Reused utilities
- `severityFor(value)` — `src/app/lib/severity.ts` for status labels and dot colours.
- `getPollen(cityId, date)`, `getSeries(cityId, range, date)` — `src/app/lib/pollen.ts`.
- `CITIES` — same module.
- Existing `Header` search/select dropdown logic remains in the top header bar; the in-panel `LocationPicker` triggers the same `setCityId` from App via prop, opening either a small inline dropdown or the same Header search.
- `MiniChart` (`src/app/components/strata/MiniChart.tsx`) reused inside "Today by hour" for the hourly trend.

### Files
- Modify: `src/app/components/strata/LeftPanel.tsx` (rebuild), `src/styles/theme.css` (badge/hairline tokens), `src/app/lib/pollen.ts` (small `getForecast` helper if needed).
- New: `src/app/components/strata/leftpanel/Headline.tsx`, `Breakdown.tsx`, `DialCircle.tsx`, `Forecast7Day.tsx`, `AllergySeasons.tsx`, `YearAtGlance.tsx`, `TodayByHour.tsx`, `StatusBadge.tsx`.
- Existing `Dial.tsx` will be replaced by the new `DialCircle.tsx`; old `Dial.tsx` can be deleted once unreferenced.

### Out of scope
- Info-button (`i`) tooltip behaviour — render the chip but no popup yet.
- "Expand" buttons (Allergy seasons, Year at a glance, Today by hour) — render the chip but no expanded view yet.

---

# UPDATE 2: Left Panel — six refinements

## Context
The data panel was rebuilt against `Container-1` and the structure / spacing now matches. Six remaining issues against the latest Figma reference (`src/imports/ArchivedPlayInternalMakeApps`): the global header should belong to the panel column not the whole app; the breakdown dials need a proper compass-style needle/tick rendering; the 7-day forecast should be a species×day matrix; a new Pollen Calendar section is missing; Allergy seasons should be overlapping bell curves; Year at a glance should be a round month-ring donut.

## 1. Sticky panel-only header
- Remove `<Header>` from `src/app/App.tsx` (it currently sits above the layout grid spanning both columns) and render it inside `LeftPanel.tsx` as the first child with `position: sticky; top: 0; z-index` so it stays put while the panel scrolls.
- Drop the existing `pt-[89px]` top padding on the location/headline block; the sticky header now occupies that space (logo + wordmark on the left, theme toggle on the right).
- The map's overlays (TimeBar, ZoomScrubber, Mode/Legend panels) keep their own positioning — no change to `MapPanel.tsx`.
- `Header.tsx` keeps the existing search dropdown wired to `setCityId`; just shrinks slightly to fit the panel column (drop the inline date strip and any centre content; use only logo + theme toggle).
- Files: `src/app/App.tsx`, `src/app/components/strata/LeftPanel.tsx`, `src/app/components/strata/Header.tsx`.

## 2. Breakdown dials → compass gauges
Replace the current `DialCircle` in `LeftPanel.tsx` with a meter-style gauge:
- Round face with a thin outer stroke ring.
- Fine tick marks around the rim — major ticks every 30°, minor every 10° — drawn as short radial line segments via a single `<g>` of pre-computed lines.
- Straight thin needle from centre to a point inside the rim; needle angle = `start + value/12 * sweep`. Use `start = -225°`, `sweep = 270°` (matching the existing arc convention).
- Small filled hub circle at the centre.
- The category badge (`StatusBadge`) renders **above** the dial; the numeric value renders **below** in `Geist Light 32px` tinted with the severity colour from `severityFor(value).color` (currently uses `--strata-ink`).
- Reuse `severityFor` from `src/app/lib/severity.ts`. No new files.

## 3. 7-day forecast → species × day matrix
- Add a new lib helper or inline generator: given `cityId` and start date, sample `getPollen(cityId, d)` for 7 consecutive days, then derive sub-species values by deterministic per-species multipliers seeded off `(cityId, speciesName)`. This avoids extending `pollen.ts` heavily.
- For Tree mode, list **Oak, Cedar, Maple, Birch, Pine** down the left column. Grass and Weed can use single rows (Grass; Ragweed/Plantain) — keep this minimal until the user requests more.
- 7 day columns headed `Today, Thu, Fri, Sat, Sun, Mon, Tue` (computed from `date`).
- Each cell renders a **concentric ring dot**: outer ring (stroke), inner filled disc whose radius scales with the cell's intensity (0–12). Use a small `RingDot` SVG component (4 elements: outer ring, inner filled disc).
- Title-row toggle (existing `SegmentedToggle`) flips which species list is shown.
- Files: `src/app/components/strata/LeftPanel.tsx` only. New `RingDot` helper inside the same file.

## 4. New "Pollen Calendar" section
Insert between Forecast and Allergy seasons.
- Header row: title `Pollen Calendar` + two segmented toggles: `[Day | Week | Month]` (granularity) and `[3M | 9M | 12M]` (range).
- Body (Month view, default): for each species (Tree, Grass, Weed) draw a horizontal **season bar** = a faint background track plus a black band whose horizontal opacity gradient fades in then out across the species's active months.
  - Source the band shape from `seasonalCurve(type, dayOfYear, lat)` in `src/app/lib/pollen.ts` sampled monthly; render via inline SVG `<linearGradient>` whose stops are computed from the curve.
  - Place the species label at the right end of its bar.
- A compact month axis (J F M A M J J A S O N D or Jan…Dec depending on range) along the top.
- Day/Week views and 3M/9M/12M ranges: render the same component with different sample resolution and date-window. Keep the implementation single-render-path: a `samples: {label, value}[]` driven by the active range/granularity.
- New component inline: `PollenCalendar` in `LeftPanel.tsx`. Reuses `seasonalCurve` (export it from `pollen.ts` if not already exported — check `src/app/lib/pollen.ts`).

## 5. Allergy seasons → overlapping bell curves
Replace the current bar grid with three smooth bell curves on a single chart.
- 12-month x-axis (Jan → Dec).
- For each species, sample `seasonalCurve(type, dayOfYear, latitudeOfSelectedCity)` at ~52 weekly points; build an SVG path.
- Render order so Tree (darker outlined stroke), Grass (mid-grey fill at ~0.45 opacity), Weed (lightest fill at ~0.25) layer cleanly. Tree gets a stroked outline only; Grass and Weed get filled areas.
- Today vertical marker — thin black line at `dayOfYear(date)/365` of the chart width, with a small notched cap.
- Tiny legend underneath: three rows of `[swatch] Tree/Grass/Weed`.
- Files: `LeftPanel.tsx` only. Replace existing `AllergySeasons` body. Reuse `seasonalCurve` from `pollen.ts`. The selected city's latitude comes from `city.lat`.

## 6. Year at a glance → month-ring donut
Replace the heat strip with a ring of 12 segmented arcs.
- 12 equal arc segments, each shaded by that month's overall pollen intensity (use `getSeries(cityId, 'year', date)` already computed; map `total/12` to a fill opacity ramp like `0.06 + intensity * 0.78`).
- Donut: outer radius ~70px, inner radius ~52px; gap of ~1° between segments.
- Centre: month name (current month) in `Geist ExtraLight 18` and year (`date.getFullYear()`) in `Jura Regular 12` underneath.
- Small triangle/dot marker pointing at the current-month segment from outside the ring.
- New `MonthRing` SVG component inline. Files: `LeftPanel.tsx` only.

## Reused utilities (no new files)
- `severityFor()` — `src/app/lib/severity.ts`.
- `seasonalCurve()`, `getPollen()`, `getSeries()`, `CITIES` — `src/app/lib/pollen.ts`. **Verify `seasonalCurve` is exported**; if not, add `export` so calendar + bell curves can use it without duplicating bell-curve math.
- `SegmentedToggle`, `StatusBadge`, `SectionTitle`, `ExpandButton`, `InfoButton`, `Footer` — already in `LeftPanel.tsx`.

## Verification
- Reload the preview; scroll the panel — confirm the header is sticky inside the panel column only and doesn't span the map; map's top chrome (TimeBar etc.) starts at the very top of its column.
- Switch theme — sticky header still works.
- Click different cities (via the existing Header search dropdown) — every section in the panel re-derives.
- Breakdown: confirm tick marks + needle, badge above, value below tinted by severity colour.
- Forecast: switch Tree/Grass/Weeds — species list down the side changes; ring-dot sizes vary across days.
- Calendar: toggle Day/Week/Month and 3M/9M/12M; sampling granularity and window change visibly.
- Allergy seasons: see three overlapping bell curves with today marker.
- Year at a glance: round month ring, current month centre + marker.
- Responsive ≤1023px: panel still scrolls; sticky header pinned to top of panel area.

---

# UPDATE 3: Deviation review — fixes to align with design

## Context
After implementing the six left-panel refinements, comparing screenshots against the Container-1 / ArchivedPlayInternalMakeApps references surfaced several remaining mismatches. Each is small but visually load-bearing.

## Fixes (all in `src/app/components/strata/LeftPanel.tsx` unless noted)

1. **`StatusBadge` — dot back to black.** Container-1 shows `bg-black` dots (size encodes severity, not colour). In `StatusBadge`, change the dot fill from `sev.color` to `var(--strata-ink)`. Keep `DOT_SIZES` keyed by severity.

2. **Compass gauge — add needle tip.** Add a small filled triangle at the needle tip oriented along the needle angle. Roughly: triangle with three points around `(tipX, tipY)` at angles `needleAngle ± 150°`, ~3px arms, filled `var(--strata-ink)`. Reuses `Arrowhead`-style geometry already removed; reintroduce inline.

3. **Forecast `RingDot` — widen visible variation.** Push inner radius range to ~`0.6 + t * 5.4` (was 1..5.6) and add per-cell opacity ramp `0.35 + t * 0.65` on the inner fill so low values fade and high values pop. Outer ring opacity climbs slightly with value too (`0.4 + t * 0.4`).

4. **Pollen Calendar — label at end of bar.** Drop the fixed-width label column. Re-flow each row as `[bar (flex-1)] [label]` with the label sitting ~6px to the right of the bar's last gradient stop, no reserved min-width — so the bar uses the full available width and the label hugs its right end.

5. **MonthRing marker — triangle.** Replace the centre dot below the ring with a small filled triangle pointing inward at the current month's segment. Triangle apex points toward ring centre; sits ~6px outside `rOuter`. Slightly enlarge ring (`rOuter: 84`, `rInner: 60`) so single-letter labels breathe.

6. **Hawaii inset — full halftone treatment.** In `MapPanel.tsx`, replace the per-island dot clusters with the same `buildGrid` + IDW path used for mainland and Alaska. Define a Hawaii bounding polygon (rough approximation of the 4 main islands plus a single connecting hull) in `src/app/lib/usGeo.ts`, and add an `hiGrid` `useMemo` mirroring `akGrid`. Render its cells with `renderHalftoneCell` so all three regions share the same halftone field.

## Out of scope for this pass
- Map field colour mode polish.
- Time-scrubber tick density when zoomed.

## Verification
- Confirm status-badge dots are black at every severity, sizes still differ.
- Compass needles show a small tip arrow at every value.
- 7-day forecast ring-dot rows clearly read sparse → dense across days/species.
- Pollen Calendar bars span the row width with the label snug at the right edge.
- Year-at-a-glance shows a triangle pointer at the current month; segment letters legible.
- Hawaii inset renders as a halftone island chain matching mainland/Alaska visual rhythm.

## Verification
- `pnpm dev` already running; reload preview surface.
- Bursts: confirm centres are empty (no dot), gap clearly visible at every value, opacity reads ~60%.
- Legend: matches the field — empty centres, same gap proportion across the six tiers.
- Zoom: drag slider 1× → 12× and pan; field paints fast, no stutter on transition; values update on date scrub without snapping.
- Left panel: matches `src/imports/Container-1` layout — verify against the attached design screenshot section by section, click different cities and confirm headline / breakdown / forecast all re-derive.
- Dark mode toggle: panel chips/badges still legible.
- Responsive ≤1023px: panel still scrolls and reflows below map.

# Reskin Strata → "HeatRisk" dashboard

## Context
The existing app, **Strata**, is a real-time pollen dashboard: a resizable two-pane
layout (left data panel + halftone dot-matrix US map) driven by a deterministic
synthetic model that produces a 0–12 scalar per city per date. The user wants to
replace the pollen domain with a **heat-risk** domain, but with the lightest possible
touch: **reuse the entire shell** (panel/map layout, geolocation, theme, zoom/pan/
time-scrub, IDW field renderer) and **change only visible text/labels**, renaming the
product to **HeatRisk**. No architectural rewrites, no file renames, no symbol renames.

The shell is domain-agnostic — it only assumes a 0–12 continuous scalar. So the swap
is a relabel, not a re-engineer. We keep filenames (`pollen.ts`, `severity.ts`, the
`--strata-*` / `--sev-*` tokens, `StrataLogo.tsx`) and all exported symbol names to
avoid import churn; we change their *meaning* and *user-facing strings* only.

## Approach (minimal-churn semantic reskin)
Keep every file path and exported identifier. Edit only: string literals shown to the
user, the three sub-metric labels, severity band labels, seasonal curve peaks (small,
so seasonal views read as "heat," see below), and the app name/logo/title.

### 1. `src/app/lib/pollen.ts` — relabel the three sub-metrics (keep shape)
- Keep `PollenReading` / `SeriesPoint` field names `tree` / `grass` / `weed` / `total`
  and keep `getPollen` / `getSeries` / `fetchPollen` / `AllergenType` names as-is
  (renaming would cascade through 1200+-line LeftPanel/MapPanel — not worth it).
- Reinterpret the three drivers via UI labels (defined in a small display-name map,
  see LeftPanel): `tree → "Daytime Highs"`, `grass → "Humidity"`, `weed → "Overnight Lows"`;
  `total → "Heat Risk"`.
- **Small necessary curve fix** (still minimal, one function): in `curve()` shift all
  three peaks into summer so the calendar/seasons/year views read as heat rather than
  pollen. Suggested peaks (day-of-year): daytime ~day 200 (mid-Jul), humidity ~day 215,
  overnight ~day 210, all latitude-shifted hotter toward low latitudes (reuse existing
  `latShift`, flip sign so southern cities peak higher/longer). Keep `bell()`,
  `hashSeed`, `mulberry32`, 0–12 scaling, baseline, and jitter untouched.
- Update the `fetchPollen` swap-in comment to reference a heat API (e.g. NWS HeatRisk /
  Open-Meteo) instead of pollen APIs.
- **Add two small pure helpers** (derived from the existing 0–12 `total`, no engine
  change): `heatRiskCategory(total): 0|1|2|3|4` (threshold map onto the same cut points
  `severityFor` uses) and `feelsLikeF(total, city, date): number` (map 0–12 → a
  plausible feels-like °F range, ~75–115°F, latitude/season aware for realism). These
  feed the new headline only.

### 2. `src/app/lib/severity.ts` — relabel bands to HeatRisk categories (keep colors)
- Keep `SEVERITY_BANDS`, `bandColor`, `continuousColor`, `intraRamp`, `isColorMode`,
  `severityFor`, `MapMode`, and all colors (green→yellow→orange→red→magenta already
  maps cleanly onto NWS HeatRisk None→Minor→Moderate→Major→Extreme).
- Change the `TABLE` labels only: `Low→"Minor"`, `Moderate→"Moderate"`, `High→"Major"`,
  `Very High→"Major"`/keep, `Extreme→"Extreme"` — final set: **Minor / Moderate /
  Major / Extreme (+ a "Low"/"None" base)**. Keep `key`/`cssVar` values (they feed
  `--sev-*` tokens). Update the header comment.

### 3. `src/styles/theme.css` — no token renames
- Keep `--strata-*`, `--sev-*`, `--chip-*`, `--chrome-*`, `--tick-*`, `--playhead-*`,
  `--hairline` names and the `@theme inline` contract intact (required for build safety
  and to avoid touching hundreds of inline-style references).
- Optional: no color change needed — the existing ramp already fits heat categories.

### 4. `src/app/components/strata/LeftPanel.tsx` — relabel sections (no structural change)
Introduce one small display-name constant near the top and reuse it everywhere the old
allergen names were shown. Section-by-section visible-text changes:
- **Headline + badge**: hero number becomes the **HeatRisk category 0–4** (from
  `heatRiskCategory`), with a **feels-like °F subtitle** (from `feelsLikeF`) and the
  category name badge (Minor/Moderate/Major/Extreme via `severityFor`). Reuse
  `useAnimatedNumber` to count up both the 0–4 value and the °F. Title "Pollen Index"
  → "Heat Risk".
- **Breakdown (3 dials)**: dial titles → "Daytime Highs", "Humidity", "Overnight Lows".
- **7-day Forecast matrix**: row labels use the same three names.
- **Calendar**: title/legend copy → heat-risk wording; colors unchanged.
- **Seasons (bell curves)**: title "Allergy Seasons" → "Heat Season"; series labels updated.
- **Year At A Glance / Today by hour**: copy/units → heat-risk wording.
- Reuse existing helpers unchanged: `useAnimatedNumber`, `smoothPath`, `useWidth`,
  `HoverTip`, `Modal`, `SectionTitle`, `InfoButton`, `Dial`.

### 5. `src/app/components/strata/MapPanel.tsx` — legend/label copy only
- `PollenIndexLegend` title/labels → "Heat Risk" (keep High/Low endpoints, keep bands).
- Any "pollen" strings in tooltips/popups → "heat risk". No renderer/geometry changes.

### 6. Naming: "Strata" → "HeatRisk"
- `Header.tsx`: wordmark text "Strata" → "HeatRisk".
- `StrataLogo.tsx`: keep filename & export; update any embedded "Strata" text; optionally
  simplify the mark to a heat glyph (optional, low priority).
- `App.tsx`: any "Strata"/"pollen" user-facing strings → "HeatRisk"/"heat risk".
- `index.html` (project root): `<title>` → "HeatRisk".
- `App.tsx` default city + geolocation logic unchanged.

## Critical files
- `src/app/lib/pollen.ts` (labels + summer curve peaks)
- `src/app/lib/severity.ts` (band labels)
- `src/app/components/strata/LeftPanel.tsx` (section copy)
- `src/app/components/strata/MapPanel.tsx` (legend/tooltip copy)
- `src/app/components/strata/Header.tsx`, `StrataLogo.tsx` (wordmark)
- `src/app/App.tsx`, root `index.html` (app name/title)
- Leave `src/styles/*.css` token names untouched (build-safety contract).

## Risks
- Field name reuse (`tree/grass/weed`) means code stays intuitive-but-mislabeled at the
  data layer; mitigated by a single display-name map so UI is coherent. Acceptable per
  the "minimal" directive.
- `--sev-*` hexes exist in both `severity.ts` and `theme.css`; we change neither color
  set, so they stay consistent.
- Curve-peak shift is the only behavioral change — verify seasonal/calendar/year views
  peak in summer after the edit.

## Verification
1. `vite build` (the only defined script) compiles with no type errors — confirms the
   `--background`/`--foreground`/`--border` `@theme inline` contract still resolves.
2. Run the app; confirm: wordmark reads "HeatRisk", headline says "Heat Risk", three
   dials read Daytime Highs / Humidity / Overnight Lows, map legend says "Heat Risk",
   and no "pollen"/"allergy"/"Strata" strings remain (grep the `src/` tree).
3. Scrub the timeline / switch range to year: heat risk should peak in summer months
   and be higher for southern (low-latitude) cities.
4. Exercise all four map modes, zoom/pan/pinch, click-to-popup, theme toggle — all
   unchanged behaviorally.

# Plan: Map + Panel Performance Optimization (no redesign)

## Context
Playing/dragging the time slider feels laggy and "about to break," and the radial field visibly jumps in density right around 1.0× zoom. Diagnosis (measured):

- **Every 110 ms play tick rebuilds *all* grids, not just the visible one.** `mainlandGrid` (STEP=10, ~4.5k cells), `colorMainlandGrid` (~9.2k), `sparseMainlandGrid` (~1.7k), `radialMainlandGrid` (~1.8k) + AK/HI variants all `useMemo` on `cityReadings`, so each runs IDW (cells × ~50 cities) every tick even though only one mode is shown → ~1.2–1.5M ops/tick.
- **State borders recompute every tick for no reason.** `mainlandCellStates` and `stateBorderSegs` only use cell *positions* (pure geometry) but depend on `mainlandGrid`, which changes its values each tick → wasted ~4.5k×50 distance ops + border rebuild per tick.
- **The cell field re-maps on unrelated state changes** (hover, popup, drag, `directManip`), recreating thousands of SVG nodes.
- **Radial density jump:** `radialZoomBoost = zoom < 1 ? 1.1547 : 1` toggles exactly at 1.0×, so crossing 1.0 snaps radial element count by +33%.
- **Left panel:** Allergy Seasons recomputes 53×3 `seasonalCurve` calls every tick though the curves depend only on `cityLat` (only the "today" marker uses the date); yearly aggregates recompute every tick though they only change per year.

Goal: make play/drag/transitions feel sleek and responsive with the **exact same visual design** — optimize, don't rebuild. Plus: default zoom 1×, centered.

Primary files: `src/app/components/strata/MapPanel.tsx`, `src/app/components/strata/LeftPanel.tsx`.

---

## MapPanel.tsx

1. **Default zoom 1×, centered on your location.** `useState(0.5)` → `useState(1)`. Add a centering effect: when `selectedCityId` changes (incl. the async IP selection on load), pan so that city sits at the viewport centre. The transform maps content point P to `pan + (W/2)(1−z) + z·P`, so to centre city point (Px,Py): `pan = { x: z·(W/2 − Px), y: z·(H/2 − Py) }`. Project the city via `projectMainland/projectAK/projectHI` by latitude. Read current zoom via a `zoomRef` (don't add `zoom` to the effect deps, or it would recentre on every zoom). The eased group transition makes the recentre glide.

   **Relax `clampPan` so centering is possible at ≤1×** (today it pins pan to 0 when z≤1). Switch to content-bounds clamping that keeps the viewport centre within the drawn content rather than keeping content edges in view: with content box ~`x∈[34,942], y∈[16,702]`, `panX∈[z(W/2−942), z(W/2−34)]`, `panY∈[z(H/2−702), z(H/2−16)]`. This lets any city (incl. coastal Brooklyn) sit centred; edges may reveal the card's ghost-dot background, which is fine.

2. **Remove the radial density jump.** Delete `radialZoomBoost`; set `liveRadialStep = RADIAL_STEP / detailMul`. Radial density now only steps at the shared detail thresholds (1.5/3/6), identical to the other modes — no snap at 1.0×.

3. **Build only the active mode's grids.** Gate the color/sparse/radial mainland+AK+HI grid memos on `mode` (e.g. `useMemo(() => mode === "color" ? buildGrid(...) : null, [mainlandCityVals, liveColorStep, mode])`). Resolve to the existing `activeMainlandGrid / activeAkGrid / activeHiGrid`. Cuts per-tick grid work from ~4 grids to 1.

4. **Derive `valueExtent` from the active grid** (the one actually rendered) instead of always-built `mainlandGrid`, so `mainlandGrid` is only built when Dots mode is active.

5. **Make state borders date-independent.** Add a geometry-only positions grid at STEP, memoized once (empty `cityValues`, `[]` deps — mirrors the existing `borderMainlandGrid` pattern at BORDER_STEP). Base `cityStateLocations` → `mainlandCellStates` → `stateBorderSegs` on it. These then compute once on mount, never on date change.

6. **Memoize the rendered cell field.** Wrap the mainland/AK/HI `cells.map(renderHalftoneCell)` output in `useMemo` keyed on the real inputs: `[activeMainlandGrid, activeAkGrid, activeHiGrid, mode, theme, useColor, valueExtent.lo, valueExtent.hi, visibleRect, liveStep, liveSparseStep, liveRadialStep, liveColorStep]`. Hover/popup/drag/`directManip`/zoom-unrelated re-renders stop re-creating thousands of nodes. (Pan stays imperative; play still updates because `valueExtent`/active grid change per tick.)

7. **Light cadence/transition tuning (keep look).** Nudge the play interval ~110 → ~130 ms so each frame has headroom; keep the existing transition curves/durations (radial uses GPU-friendly `transform: scale`; leave dots/circles/color as-is). Only adjust if still choppy after 1–6.

---

## LeftPanel.tsx

8. **Allergy Seasons — split static curves from the date marker.** In `SeasonsChart`, the curve `data` memo should depend on `[cityLat, height]` only (the tree/grass/weed curves don't use `date`); compute `todayFrac` separately from `date`. Removes 159 `seasonalCurve` calls per tick during play.

9. **Coarser deps for yearly aggregates.** Key `yearSeries` / Year-at-a-Glance work on `${cityId}-${date.getFullYear()}` (or the year value) rather than the full `date`, so the 12-month series isn't rebuilt on every 3-day tick. Leave `daySeries` (Today By Hour) on `date` (it legitimately changes each day).

10. **(Optional, low risk)** Leave `useAnimatedNumber` as-is functionally, but skip starting a rAF when the value delta is below the display threshold (already partially handled) so static numbers don't spin a loop.

---

## Out of scope / unchanged
- No visual/density/color/spacing changes — same grids, sizes, palette, transitions, interactions.
- IP-based city selection and dark-mode default (already shipped) stay; the new centering effect consumes the IP-selected city so the app opens at 1× centered on your location (e.g. Brooklyn).

## Verification
1. Run the app; open **Radial**, slowly wheel-zoom across 0.8×–1.6× — density should change smoothly with no snap at 1.0×.
2. Hit **Play** in each mode (Radial/Dots/Color/Circles): playback should advance fluidly with no stutter; the left-panel numbers count smoothly. Compare Color (heaviest) before/after.
3. Drag-pan and hover cities during play — no added jank (cell field no longer re-maps on those).
4. Confirm default view loads at 1×, dark mode, with the IP-nearest city selected **and centered in the map** (e.g. open from Brooklyn → Brooklyn at viewport centre). Selecting another city pans-to-centre smoothly. Verify you can still drag away and zoom.
5. Sanity-check state borders still render correctly and update on city change (geometry is static; only positions matter).

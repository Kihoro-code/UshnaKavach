# SIH26083 — Frontend Handoff (Friend)

Role: **you own the entire frontend.** Everything else (data ingest, EHI-N* index model, FastAPI
backend, alerts, LLM advisory, backtest) is being built in parallel by the other half. You build
against a fixed API contract so the two halves connect without a merge dance. Do not touch Python,
the model, or the backend — you consume the API only.

**Target:** a district + ward heat-risk dashboard that a disaster-management officer and an outdoor
worker can actually use. Read the whole file before you start; the API contract in Section 4 is the
source of truth and your friend is coding to the same contract.

---

## 1. Product goals (what you're building)

1. A **live risk map** that shows per-district and per-ward heat risk as a color-coded choropleth.
2. A **region drill-down** with a time-of-day risk curve ("which hours is it safe to work") and a
   7-day forecast strip.
3. An **alerts feed** with audience-specific advisories (outdoor workers, elderly, school/clinic).
4. A **"check my location"** widget (lat/lon → current EHI-N* index + zone).
5. Fully **mobile-responsive** (officers and workers open this on phones).

---

## 2. Tech stack (use what the team already knows — no exotic deps)

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (v4) + a small tokens file (colors in Section 5)
- **Routing:** react-router (v7) — `/`, `/region/:id`, `/alerts`
- **Map:** `react-leaflet` (Leaflet, token-free) for the choropleth. If you prefer MapLibre
  (`react-map-gl` + `maplibre-gl`), that's fine too — pick one and stay consistent. Leaflet is the
  safe default (no API token, simple GeoJSON layer).
- **Charts:** `recharts` for the time-of-day curve and 7-day strip.
- **Data fetching:** typed `lib/api.ts` fetchers + **TanStack Query** (`@tanstack/react-query`)
  for caching/loading/error. Use it consistently — every screen gets a query, a loading state, an
  empty state, and an error state.
- **Icons/polish:** `lucide-react`, `framer-motion` (subtle, only where it helps; don't over-animate).
- **State:** local React state + TanStack Query. No Redux / no global store. Keep it simple.

> Do NOT add a backend, auth, WebSockets, or any push notification logic. Polling the API is enough.
> Do NOT compute risk yourself — render exactly what the API returns.

---

## 3. Screens, components, responsibilities

### 3.1 Shell (`App.tsx` + a layout)
- Top nav bar with the product name and a link to Dashboard / Alerts.
- Route outlet. One shared "risk legend" component (the 5-color scale) used on map and detail pages.

### 3.2 Dashboard (`/`)
The main page. A top bar of KPI cards + the map.
- **KPI cards** (from `GET /api/meta` + a live summary): total regions tracked, count at
  High/Severe/Extreme today, active alerts count, last data refresh time.
- **Map:** district OR ward choropleth via a level toggle (`district` / `ward`).
  - Source: `GET /api/risk-map?level=district|ward&date=YYYY-MM-DD` (GeoJSON).
  - Fill color = risk_level (use the fixed color scale). Hover = tooltip with region name, risk
    score, zone, population. Click = navigate to `/region/:id`.
  - A legend showing the 5 levels. A "refresh" button that invalidates the query.

### 3.3 Region Detail (`/region/:id`)
- Header: region name, level, current risk badge (color + level + score), latest update time.
- **Time-of-day curve** (Recharts area/line): x = hour (0–23), y = risk_score; from
  `GET /api/regions/{id}` → `time_of_day`. Mark "safe hours" where risk < high (band/tooltip).
- **7-day forecast strip** (bars): x = date, y = max_c bar colored by risk_level; from
  `GET /api/regions/{id}` → `forecast`.
- **Current conditions panel:** temp, RH, wind, EHI-N* index, WBGT, UTCI, Heat Index, zone.
- **Vulnerability panel:** population, elderly %, outdoor-worker %, urban heat-island delta,
  exposure score, vulnerability score.
- **Advisory cards:** one card per audience (general / outdoor_workers / elderly / school_clinic /
  municipal), rendered from the LLM advisory text the backend returns. Render as clean cards.

### 3.4 Alerts feed (`/alerts`)
- Source: `GET /api/alerts?active=true`.
- List of active alerts: region, risk level badge, title, body, channel, sent_at.
- Toggle "active only". Empty state message when there are none.

### 3.5 "Check my location" widget
- In the map header or a small card. Uses browser geolocation (or a manual lat/lon input)
  → `GET /api/heat-index/{lat}/{lon}` → show EHI-N* index, zone, and one-line advisory.
- Must handle geolocation-denied gracefully (fall back to manual input).

---

## 4. API contract (SINGLE SOURCE OF TRUTH — build to this exactly)

Base URL: `http://localhost:8000/api` (dev). The backend will serve a CORS-enabled API; ask your
friend to confirm the final host/port. All responses are JSON. All errors use
`{ "detail": "<message>" }` with an appropriate HTTP status.

### Enum values
- `risk_level`: `"low" | "moderate" | "high" | "severe" | "extreme"`
- `ehi_zone`: integer `1`–`6`
- `level`: `"district" | "ward"`

### 4.1 `GET /api/meta`
Returns UI metadata + provenance (so you can render a sources footnote).
```json
{
  "levels": ["district", "ward"],
  "states": ["Maharashtra", "Delhi", "Odisha"],
  "index": { "primary": "EHI-N*", "reference": ["WBGT", "UTCI", "Heat Index"] },
  "risk_levels": ["low","moderate","high","severe","extreme"],
  "sources": ["IMD API", "ERA5", "GFS", "Census 2011", "MODIS LST"],
  "version": "0.1.0"
}
```

### 4.2 `GET /api/regions?level=district|ward&state=<optional>`
List of regions with current risk (drives KPI cards + region listing).
```json
{
  "regions": [
    {
      "id": "mh-nagpur",
      "name": "Nagpur",
      "level": "district",
      "state": "Maharashtra",
      "lat": 21.1458, "lon": 79.0882,
      "risk_score": 78, "risk_level": "severe", "ehi_zone": 5,
      "insight_summary": "Extreme heat stress for outdoor labour; suspend heavy work 11:00–17:00.",
      "updated_at": "2026-08-29T10:30:00Z"
    }
  ]
}
```

### 4.3 `GET /api/regions/{id}`
Full detail for one region. **This powers the Region Detail page.**
```json
{
  "id": "mh-nagpur", "name": "Nagpur", "level": "district", "state": "Maharashtra",
  "current": {
    "ts": "2026-08-29T10:30:00Z", "temp_c": 43.2, "rh": 18.0, "wind_kmph": 12.0,
    "ehi_index": 52.4, "ehi_zone": 5, "wbgt": 34.1, "utci": 46.8, "heat_index": 41.9,
    "risk_score": 78, "risk_level": "severe"
  },
  "time_of_day": [
    { "hour": 0, "risk_score": 42, "risk_level": "moderate", "ehi_zone": 4,
      "advisory": "Moderate stress; stay hydrated." },
    { "hour": 14, "risk_score": 91, "risk_level": "extreme", "ehi_zone": 6,
      "advisory": "Zone 6 — suspend heavy outdoor work." }
  ],
  "forecast": [
    { "date": "2026-08-30", "min_c": 28.1, "max_c": 44.9,
      "risk_score": 85, "risk_level": "extreme",
      "advisory": "Extreme heat; activate cooling centres." }
  ],
  "vulnerability": {
    "population": 2505000, "elderly_pct": 9.2, "outdoor_worker_pct": 22.4,
    "heat_island_delta_c": 2.1, "exposure_score": 71.0, "vuln_score": 64.0
  },
  "advisory": {
    "general": "Avoid outdoor exertion 11:00–17:00.",
    "outdoor_workers": "Suspend heavy work; take 10-min rest every 20 min.",
    "elderly": "Stay indoors; check on elderly neighbours.",
    "school_clinic": "Shift outdoor activities; keep clinics hydrated.",
    "municipal": "Activate cooling centres; prioritise water points."
  }
}
```
Notes: `time_of_day` is 24 entries (hours 0–23); `forecast` is 7 entries (today + 6). Never assume
the length is exact — render whatever the API returns.

### 4.4 `GET /api/risk-map?level=district|ward&date=YYYY-MM-DD`
GeoJSON FeatureCollection for the choropleth.
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": { "type": "Polygon", "coordinates": [[ [78.5,21.0], ... ]] },
      "properties": {
        "id": "mh-nagpur", "name": "Nagpur", "risk_score": 78,
        "risk_level": "severe", "ehi_zone": 5, "population": 2505000
      }
    }
  ]
}
```
Map the GeoJSON `features[].properties.risk_level` to your color scale. `date` is optional (defaults
to today); you can omit it and let the backend decide.

### 4.5 `GET /api/heat-index/{lat}/{lon}`
Compute current EHI-N* for a point (for "check my location"). Query params: `met` (1–6, default 4),
`sun` (0/1, default 1).
```json
{
  "lat": 19.076, "lon": 72.8777,
  "met": 4, "sun": 1,
  "temp_c": 39.0, "rh": 40.0, "wind_kmph": 8.0,
  "ehi_index": 48.0, "ehi_zone": 5, "risk_level": "high",
  "advisory": "High stress; take frequent breaks in shade."
}
```

### 4.6 `GET /api/alerts?active=true`
Active alerts feed.
```json
{
  "alerts": [
    {
      "id": "al-1", "region_id": "mh-nagpur", "region_name": "Nagpur",
      "risk_level": "severe", "title": "Extreme heat — suspend outdoor work",
      "body": "Zone 6 for heavy labour 11:00–17:00.",
      "channel": "SMS", "sent_at": "2026-08-29T09:00:00Z"
    }
  ]
}
```

### 4.7 `POST /api/alerts/preview`
For testing advisory rendering WITHOUT sending real SMS. Body: `{ "region_id": "mh-nagpur",
"audience": "outdoor_workers" }`.
```json
{ "audience": "outdoor_workers", "text": "Suspend heavy work; take 10-min rest every 20 min." }
```

---

## 5. Risk color scale (use exactly this — it must match the backend `risk_level`)

| risk_level | Hex | Meaning |
|---|---|---|
| low | `#2E7D32` | Comfort / low risk |
| moderate | `#F9A825` | Elevated caution |
| high | `#EF6C00` | Significant stress |
| severe | `#D32F2F` | Dangerous |
| extreme | `#6A1B9A` | Uncompensable / act now |

Put these as design tokens in `lib/colors.ts` and reference them everywhere (map fill, badges, charts).
Never hardcode a hex in a component.

---

## 6. Project structure (proposed)
```
src/
  lib/
    api.ts            # typed API fetchers (all 7 endpoints)
    colors.ts         # risk color scale + tokens
    types.ts          # Region, Current, TimeOfDay, Forecast, Advisory, Alert, GeoJSON
  components/
    RiskLegend.tsx
    RiskBadge.tsx
    RiskMap.tsx        # react-leaflet choropleth (district/ward)
    TimeOfDayChart.tsx # recharts area/line
    ForecastStrip.tsx  # recharts bars
    AdvisorCards.tsx   # audience advisory cards
    AlertList.tsx
    LocateWidget.tsx
  pages/
    Dashboard.tsx
    RegionDetail.tsx
    Alerts.tsx
  App.tsx, main.tsx
```

---

## 7. Definition of done (all must pass before handover)

1. Map renders district + ward choropleth from the live API, toggles correctly, and colors match the
   risk scale.
2. Clicking a region navigates to `/region/:id` and the detail page populates all sections
   (current, time-of-day, 7-day, vulnerability, advisories).
3. Time-of-day curve and 7-day strip render from API data and highlight the "safe hours" / risky days.
4. Alerts feed lists active alerts with correct badges; empty state shows.
5. "Check my location" returns EHI-N* + zone + advisory; handles geolocation denial.
6. Every screen has loading, empty, and error states. No unhandled console errors.
7. Fully responsive — usable on a phone (map pinch + scroll, cards stack, no horizontal overflow).
8. No hardcoded/mock data in the final build (mocks allowed during early dev, but must be removed).
9. Only consumes the API contract in Section 4. No duplicate backend logic.
10. Runs clean on `npm run dev` targeting the backend; `npm run build` passes.

---

## 8. Out of scope (do NOT implement)
- Auth / login. No login is required for the MVP.
- WebSockets / real-time push. Poll the API (e.g. TanStack Query `refetchInterval: 60000`).
- Any model/business logic (EHI-N* risk computation).
- Actually sending SMS/WhatsApp/email (that's the backend alert service).
- Storing or transforming underlying data (you only render API output).
- The Python/FastAPI backend — that's the other build track.

---

## 9. Early dev tip (before the backend is ready)
If the API isn't up yet, build against a small `lib/mock.ts` that returns the exact shapes in Section
4, then swap `api.ts` to real fetch when your friend's backend is live. Keep the types identical so
the swap is a one-line change.

Ask your friend for the resolved base URL + CORS settings when you're ready to connect.

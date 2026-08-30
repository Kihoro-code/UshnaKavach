# UshnaKavach — Deferred Work & To-Add List

This is the **"not yet built, add later"** list. It is intentionally **not** a roadmap or a schedule — it's a running inventory of everything the first demo consciously skips, pulled from the deep research (`research/sih26083-deep-research.md`) and the backend handoff (`research/sih26083-backend-handoff.md`).

Items are grouped by concern. Checkboxes are for tracking; nothing here is implied to be in the v1 demo.

---

## 1. Live data sources (not wired yet)

- [ ] **IMD API — real current observation + 7-day forecast** (the primary live feed)
  - `GET /api/v1/current_wx?id=<station>` → T, RH, wind, MSLP, Weather Code.
  - `GET /api/v1/cityforecast` / `cityforecastloc` → `Today_Max_temp`, `Today_Min_temp`, `RH@0830/1730`, `Day_2..7`.
  - `warnings` endpoints → colour-coded (Weather Code **9 = Heat Wave**, **10 = Hot Day**, **11 = Warm Night**).
- [ ] **GFS (NOAA NOMADS)** — sub-daily live forecast for the **time-of-day "safe hours to work" curve**
  - `2m T`, `2m RH`, `10m wind`, surface solar, cloud. Anonymous, no key.
- [ ] **ERA5 (Copernicus CDS)** — reanalysis for the back-test + climatology
  - `reanalysis-era5-single-levels`: `2m_temperature`, `2m_dewpoint_temperature`, `10m_u/v_wind`, `surface_solar_radiation_downwards`, `total_cloud_cover`.
  - India bbox ≈ 6–38°N, 68–98°E, 0.25° grid, `xarray`. **Not a live forecast** — back-test only.
- [ ] **IMD gridded climatology (0.25°)** — Tmax/Tmin for climatological normal + anomaly/departure (how IMD declares heatwaves).
- [ ] **Census of India 2011** — district population, age structure, rural share, and outdoor-worker share (agri/construction proxy).
- [ ] **MODIS LST** — `MOD11A2` (8-day, 1 km) or `MOD21A1N` (daily, 1 km) for urban heat-island overlay.
- [ ] **Ward boundaries** — DataMeet `Municipal_Spatial_Data`, SBM wards, or `yashveeeeeeer/india-geodata` `urban/`.

## 2. API keys / accounts to register (the blockers)

- [ ] **IMD API Management Platform** — register → JWT/API key. This is the single thing that unblocks real live observation.
- [ ] **CDS account** (Copernicus) — registration + licence acceptance + `cdsapi` key, for ERA5 back-test.
- [ ] **Google Earth Engine** (optional) — for ward-level MODIS LST aggregation via `ee.Reducer.mean()`; skip if auth is slow and use `geopandas` + `rasterio` static composite instead.
- [ ] **Twilio** — SMS + WhatsApp (later, for real alerts).
- [ ] **Firebase (FCM)** — push notifications (later).
- [ ] **SMTP credentials** — email alerts (later).
- [ ] **LLM provider** — Anthropic (`anthropic`) or OpenAI (`openai`) for plain-language advisories (later; template fallback required).

## 3. Index / model completeness (EHI-N\* core + references)

- [ ] **EHI-N\* full implementation** — port the MIT Lu & Romps `heatindex.py` (base Extended Heat Index) and apply the four EHI-N\* modifications:
  1. Variable metabolic rate (1–6+ MET; 1 MET = 58.2 W/m², ISO 8996).
  2. Direct solar radiation (`*`) — mean radiant temp +150–200 W/m² (10–20 °C equivalent).
  3. Indian morphology — 65 kg, 1.65 m, 1.71 m² (vs US 83.6 kg).
  4. Thermoregulatory limits — max sweat 2 L/h, max skin blood flow 7.8 L/min (bounds Zones 5–6).
- [ ] **Six thermoregulatory zones** (1 = cold → 2–3 comfortable → 4 caution → 5 danger → 6 hyperthermia / uncompensable) with the IECC Table thresholds.
- [ ] **WBGT (ISO 7243 / ACGIH)** — `0.7·Tw + 0.2·Tg + 0.1·Td`, with documented psychrometric wet-bulb + globe derivation.
- [ ] **UTCI cross-check** — via CDS `derived-utci-historical` (general/sedentary — reads lower than EHI-N\*).
- [ ] **NOAA Heat Index (Rothfusz)** — the "generic index we improve on" comparison.
- [ ] **Unit tests** on the index math; keep it in pure, tested functions (`pytest`).

## 4. Risk / exposure composite (explainable, not a death predictor)

- [ ] **0–100 risk score** — `risk = w_h · hazard + w_e · exposure + w_v · vulnerability` with documented weights (e.g. 0.5 / 0.25 / 0.25).
- [ ] **Hazard** — from EHI-N\* zone (or index).
- [ ] **Exposure** — population density + outdoor-worker share.
- [ ] **Vulnerability** — elderly % + urban heat-island delta (MODIS LST minus rural baseline).
- [ ] **Level mapping** — `low / moderate / high / severe / extreme`.
- [ ] **Ward-level layer** — real MODIS LST + ward boundaries (no fake polygons).

## 5. Back-test (April–May 2024) — the credibility number

- [ ] Pull ERA5 Apr 1 – Jun 30 2024 (India bbox).
- [ ] Compute EHI-N\* (MET 6, sun) per 0.25° cell per hour → daily → district.
- [ ] Count Zone 5/6 districts.
- [ ] Compare vs (a) IMD 2024 heatwave declarations, (b) NOAA HI, (c) published EHI-N\* 41.5% Zone-6 figure.
- [ ] Build an honest contingency table (no cherry-picking).
- [ ] Expose the "under-detection" result as a citable number (dry-bulb threshold and NOAA HI 9.6% vs EHI-N\* 41.5%).

## 6. Alerts & advisory service

- [ ] **MockAlertSender** (v1 — log-only, zero keys, zero cost, UI shows "alert sent"). This is IN the demo.
- [ ] **Real Twilio SMS + WhatsApp** (later).
- [ ] **Firebase FCM push** (later).
- [ ] **Email via `smtplib`** (later).
- [ ] **LLM plain-language advisory** — Anthropic/OpenAI, prompted with only reviewed facts (EHI-N\* zone, risk level, NDMA/NCDC guidance), never inventing medical content.
- [ ] **Template fallback** — static advisories keyed by `(risk_level, audience, zone)`; delivery never blocked on the LLM.
- [ ] **Tiered alert triggers** — Zone 4 → more breaks/hydration; Zone 5 → limit heavy work; Zone 6 → suspend heavy outdoor work.

## 7. API / backend hardening

- [ ] **CORS** — allow the Vercel origin (and `http://localhost:5173`) — required for the deployed frontend to call the backend.
- [ ] **All 7 endpoints** serving the exact contract shapes from `research/sih26083-backend-handoff.md` §5.
- [ ] **Pydantic validation** on every response.
- [ ] **Ruff clean + `pytest` passing**.
- [ ] **Auth / user accounts** — explicitly out of scope for SIH (not required).
- [ ] **FastAPI ingest scheduler** — periodic IMD/GFS pull + cache (works on Render; serverless cold-start considerations).

## 8. Frontend wiring

- [ ] **Deployed API base** — replace `API_BASE = http://localhost:8000/api` with the production backend URL and flip `USE_MOCK = false` for the live demo.
- [ ] **Local + deployed toggle** — a config so the same frontend works against local `uvicorn` and the deployed backend without code edits.
- [ ] **[OPTIONAL] `vercel.json`** in `Frontend/` — set root/build `dist`, so the frontend deploy is one-click clean on Vercel.
- [ ] **[OPTIONAL] `packageManager` pin** in `Frontend/package.json` (`pnpm@…`) so Vercel picks the right installer.

## 9. Documentation & repo hygiene

- [ ] `.env` with keys (git-ignored); never commit real credentials.
- [ ] `.env.example` listing required env vars.
- [ ] Update root `README.md` to reflect the **Backend** folder once it exists (structure, deployment, run steps).
- [ ] Deployment section in `README.md` — Vercel (frontend) + Render (backend), plus local `uvicorn` instructions.

---

**Not building (explicitly out of scope, per the handoff §9):**

- The React/TypeScript frontend (friend's track — already done).
- Auth / user accounts.
- Actual hospital/IHIP mortality integration — **not public; never fabricate**.
- A trained deep-learning "death predictor" — no labels, not defensible.
- Mobile native apps (the dashboard is responsive web).

**Honesty guardrails (from the deep research §6.3):** never invent heatstroke/death counts; never over-claim "we predict deaths"; never claim "we built forecasting" (IMD already forecasts); always show the April–May 2024 back-test; state the wet-bulb/globe derivation rather than silently using a "feels-like" table.

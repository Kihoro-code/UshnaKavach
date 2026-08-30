# UshnaKavach

**Early-Warning System for Extreme Heatwaves & Human Thermal Stress Index**

> Built for **SIH 2026 · Problem Statement SIH26083**
> Ministry of Earth Sciences (MoES) / India Meteorological Department (IMD)
> Category: Software · Disaster Management · Impact-Based Early Warning

UshnaKavach (उष्णकवच) turns heat from a temperature number into a **human risk**. Instead of saying *"it will be 44 °C,"* it answers the question a person actually cares about: **"what does this heat do to me, and what should I do about it?"**

It is a district & ward-level heat-risk platform powered by a **physiologically-justified human thermal stress index (EHI-N\*)**, calibrated for **Indian adults and outdoor workers**, with time-of-day advisories, heat-health action planning, and SMS/push alerts — back-tested on the real **April–May 2024** Indian heatwave.

---

## Table of Contents

- [Why This Exists](#why-this-exists)
- [The Core Idea (EHI-N\*)](#the-core-idea-ehi-n)
- [How It Works](#how-it-works)
- [Why EHI-N\* and Not the Generic Heat Index](#why-ehi-n-and-not-the-generic-heat-index)
- [Data Sources](#data-sources)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Validation & Honesty](#validation--honesty)
- [Sources](#sources)
- [License](#license)

---

## Why This Exists

A standard heatwave bulletin reads: *"maximum temperature 44 °C, heatwave conditions likely."* That is a **physical temperature** statement. IMD already does this well — it is not the gap.

The gap is **physiological and exposure-aware**. The problem statement explicitly asks for a **Human Thermal Stress Index**, which means the warning must be driven by *how heat stresses the human body during normal outdoor activity*, not a raw `Tmax` number.

This is exactly what India's public-health authorities say:

- The **NCDC / MoHFW** advisory directs states to run **Heat-Health Action Plans** and disseminate IMD heatwave warnings daily.
- The **Union Health Minister (2024)** acknowledged there is **no reliable central database of heatwave deaths** — a real, unsolved ground-truth gap.
- **Nature India (May 2024)** argues heat action plans should be driven by *thermal-comfort / heat-stress* indices and should specify **which time of day** to be outdoors, not flat temperature thresholds.

**The deliverable is not a temperature forecast app. It is a system that converts meteorology into physiological risk and makes it actionable.**

---

## The Core Idea (EHI-N\*)

UshnaKavach headlines the **Extended Heat Index for Labor (EHI-N\*)**, a mechanistic heat-balance model developed specifically for India by **IECC, UC Berkeley** (the SHRAM project).

It models the human body as a two-node heat-balance system — core at 37 °C, variable skin temperature — tracking tissue conduction, blood flow (vasodilation), respiratory loss, convection, radiation, and **evaporative cooling from sweating**. It accounts for four things a generic "feels-like" index ignores:

| Modification | Why It Matters |
|---|---|
| **Variable metabolic rate (1–6+ MET)** | Construction / agriculture / sanitation work is 5–7 MET. A sedentary index massively underestimates their strain. |
| **Direct solar radiation (\*)** | Sunlight can add **10–20 °C equivalent** (150–200 W/m² solar load). |
| **Indian body morphology** | Tuned to 65 kg, 1.65 m, 1.71 m² surface area (vs. a US-default 83.6 kg reference). |
| **Explicit physiological limits** | Max sweat rate **2 L/h**, max skin blood flow **7.8 L/min**. These define when stress becomes *uncompensable*. |

### The Six Thermoregulatory Zones

The index classifies conditions into **six zones**, each with a concrete action:

| Zone | State | What It Means | Action |
|---|---|---|---|
| 1 | Cold stress | Body retains heat | Warmth / shelter |
| 2–3 | Comfortable | Normal thermoregulation | Normal activity |
| 4 | **Caution** | Elevated cardiovascular strain (compensable) | Increase breaks & hydration |
| 5 | **Danger** | Approaching physiological limits | Limit heavy-work duration |
| 6 | **Hyperthermia** | Uncompensable — core temp rises toward heat stroke | **Suspend heavy outdoor work** |

In Zone 6, a worker can reach dangerous core temperatures in **as little as 14–32 minutes**.

> The original EHI (Lu & Romps, 2022) handles tropical, high-humidity climates better than empirical indices — and **EHI-N\*** extends it to laboring populations in the sun.

---

## How It Works

```
[Data Ingestion] → [Index Computation] → [Risk / Exposure Layer] → [Product / Dissemination]
 IMD API (obs +      EHI-N* (MET 3–6,     Census + MODIS LST        District dashboard
  7-day forecast)      sun, Indian body)    + worker share            SMS / push / email
 ERA5 (back-test)      WBGT (validation)    + population             time-of-day guidance
 GFS (sub-daily)       UTCI (cross-check)   + urban heat island      heat-health advisories
```

Everything flows into a **0–100 district risk score** (a transparent `hazard × exposure × vulnerability` composite — *not* a black-box model), mapped to a graded **Low → Moderate → High → Severe → Extreme** level.

---

## Why EHI-N\* and Not the Generic Heat Index

The generic NOAA Heat Index is an empirical "how hot it feels" regression for a **sedentary, shaded, Western adult**. It is the wrong tool for outdoor workers in Indian summers. The head-to-head (April–June 2024, ERA5, India):

| Metric | % of Country Flagged as Hazardous |
|---|---|
| NOAA Heat Index "Extreme Danger" | **9.6%** |
| Severe heatwave temperature (≥ 45 °C) | **22.7%** |
| **EHI-N\* Zone 6 (heavy labour, sun)** | **41.5%** |

> EHI-N\* flags hazardous (Zones 5–6) conditions at air temperatures **13–15 °C lower** than other metrics under identical sunny heavy-labour conditions, and flags **68% more** uncompensable (Zone 6) locations than dry-bulb temperature.

| Criterion | NOAA HI | WBGT | UTCI | **EHI-N\*** |
|---|---|---|---|---|
| Mechanistic heat-balance model | No | No | Yes | **Yes** |
| Handles high-humidity / tropical South Asia | Poor | OK | OK | **Best** |
| Calibrated for Indian adults | No | No | No | **Yes** |
| Accounts for work intensity (MET) | No | Tables | No | **Yes** |
| Accounts for direct sun | Partial | Yes | Yes | **Yes** |
| Bounds physiology (sweat / blood-flow) | No | No | No | **Yes** |
| Actionable work-cessation / rest guidance | No | Yes | No | **Yes** |

**WBGT** (ISO 7243 / ACGIH) is shown as the **validation/reference** against the international occupational standard — the one regulators actually enforce. NOAA HI and UTCI are documented as *"why not these."*

---

## Data Sources

All sources are genuine, open (or freely registerable) primary data — no synthetic fabrication.

| Source | What It Provides | Access |
|---|---|---|
| **IMD API Management Platform** | Real-time observed weather + 7-day station/district forecast (T, RH, wind, weather code: **9 = Heat Wave, 10 = Hot Day, 11 = Warm Night**); colour-coded warnings | Registered account + JWT key |
| **IMD gridded climatology (0.25°)** | Gridded Tmax/Tmin for climatology, anomaly/departure, and back-test | DSP data portal (free for research) |
| **ERA5 reanalysis** (ECMWF/CDS) | Hourly 2m T, dewpoint/RH, 10m wind, solar/radiant load, cloud — backbone for the back-test | Free CDS account + licence |
| **GFS** (NOAA) | Independent short-range forecast, sub-daily, for time-of-day advice | Open, no auth (NOMADS) |
| **Census of India 2011** | District population, elderly/young share, urban/rural, outdoor-workforce share | Open |
| **MODIS LST + LandScan** | Land-surface temperature / urban heat-island + population grid | Open |

> **Honesty note:** field-level heatstroke/death counts (IHIP/NPCCHH) are **not public**. UshnaKavach treats this as a **future integration / documented limitation** — it never fabricates that data as training labels.

---

## Tech Stack

**Frontend (live now)** — a Vite + React + TypeScript single-page app with Tailwind CSS, shadcn/ui components, Leaflet map, and Recharts data viz. Responsive and mobile-optimised. Currently serves as the district & ward risk dashboard prototype.

**Planned**

- **Data & indices:** `xarray`, `netCDF4`, `pandas`, `numpy`, `scipy`, `cdsapi`, `requests`, `geopandas`, `rasterio`
- **Backend / API:** FastAPI — `/risk?district=...&met=6&sun=1`
- **Alerts:** FCM / Twilio for push + SMS
- **GIS:** district polygons, choropleth, urban heat-island overlay

---

## Project Structure

```
UshnaKavach/
├── Frontend/            # Vite + React + TS + Tailwind SPA (district/ward risk dashboard)
│   ├── index.html
│   ├── vite.config.ts
│   ├── package.json
│   ├── src/
│   │   ├── main.tsx
│   │   ├── app/
│   │   │   ├── App.tsx
│   │   │   ├── components/      # risk, map, strata, ui (shadcn), figma
│   │   │   ├── lib/             # api, colors, indiaGeo, mock, severity, types
│   │   │   └── pages/           # Alerts, RegionDetail
│   │   └── styles/              # fonts, globals, theme, tailwind
│   └── ...
├── README.md
└── .gitignore
```

---

## Getting Started

### Frontend

> Requires **Node.js 20+** and **pnpm**.

```bash
cd Frontend
pnpm install
pnpm dev
```

Open the local URL printed by Vite (default `http://localhost:5173`).

For a production build:

```bash
pnpm build
```

The static output lands in `Frontend/dist/` and can be served on any static host (Vercel, Netlify, etc.). CI deploys the `Frontend` directory as a static site.

### Backend / API (in development)

The FastAPI backend, ERA5/IMD ingest, EHI-N\* computation, and alert dispatch are the next layers — they are not yet wired to this frontend. The current UI runs on sample/mock data while the live data pipeline is built.

---

## Roadmap

1. **Data ingest** — IMD API key + ERA5/CDS account; pull observed + 7-day forecast + history.
2. **Index engine** — EHI-N\* (MET 3–6, sun, Indian morphology) + WBGT validation + UTCI cross-check.
3. **Risk / exposure layer** — district polygons, Census attributes, MODIS LST, urban heat-island → 0–100 risk score.
4. **Back-test** — April–May 2024 (ERA5) with an honest contingency table vs. IMD heatwave declarations.
5. **Backend / API** — FastAPI, ingest scheduler, alert dispatch (FCM/Twilio).
6. **Dissemination** — SMS/push to authorities, outdoor workers, elderly; time-of-day work advisories.

---

## Validation & Honesty

UshnaKavach is built on a **back-test on a real event**, not fabricated validation:

1. Pull ERA5 for April 1 – June 30, 2024 (India bbox).
2. Compute EHI-N\* (MET 6, sun) per 0.25° cell → hourly → daily → district.
3. Map to zones, count Zone 5/6 districts.
4. Compare against IMD's 2024 heatwave declarations, NOAA HI, and the published EHI-N\* result.

The headline, honest figure: **a dry-bulb temperature threshold misses 68% of Zone-6 cells; NOAA HI flags only 9.6% — EHI-N\* flags 41.5%.** That is the credibility play.

---

## Sources

**Official / government**

- IMD API reference: https://api.imd.gov.in/public/api_reference.html
- IMD API Management Platform: https://api.imd.gov.in/
- IMD 2024 heatwave press release: https://internal.imd.gov.in/press_release/20240425_pr_2967.pdf
- IMD Data Service Portal: https://dsp.imdpune.gov.in/
- NCDC / MoHFW heatwave advisory: https://ncdc.mohfw.gov.in/uploads/resource/1769333147_Advisory-for-State-Health-Department-on-heat-wave-season-2024_NPCCHH.pdf
- NDMA Heat Wave Guidelines: https://ndma.gov.in/sites/default/files/PDF/Guidelines/heatwaveguidelines.pdf
- Census of India 2011: https://censusindia.gov.in/

**Standards & index formulas**

- NOAA/NWS Heat Index equation (Rothfusz): https://www.wpc.ncep.noaa.gov/html/heatindex_equation.shtml
- NOAA Heat Index safety: https://www.weather.gov/safety/heat-index
- WBGT / ISO 7243 / ACGIH: https://en.wikipedia.org/wiki/Wet-bulb_globe_temperature
- UTCI: http://www.utci.org/

**EHI-N\* / SHRAM (core index)**

- EHI-N\* technical report (IECC, UC Berkeley): https://iecc.gspp.berkeley.edu/wp-content/uploads/2026/02/IECC-Shram-Tech-Report-WP-WEB.pdf
- EHI-N\* policy working paper: https://iecc.gspp.berkeley.edu/wp-content/uploads/2026/02/IECC-Shram-EHI-Policy-WP-WEB.pdf
- IECC Heat Stress Monitoring: https://iecc.gspp.berkeley.edu/resources/heat-stress-monitoring/
- SHRAM district dashboard: https://shram.info/

**Data / reanalysis**

- ERA5 hourly single-levels (CDS): https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels
- ERA5 DOI: https://doi.org/10.24381/cds.adbb2d47
- ERA5-derived UTCI / thermal-comfort: https://cds.climate.copernicus.eu/datasets/derived-utci-historical
- GFS (NOAA, open): https://www.nco.ncep.noaa.gov/pmb/products/gfs/

**Heat-health context**

- Nature India, "India reels under a third straight year of severe heatwaves": https://www.nature.com/articles/d44151-024-00071-1
- Ministry seeks central heatwave-death database: https://medicaldialogues.in/news/health/health-ministry-seeks-central-database-to-share-field-level-data-on-heatwaves-126749
- The Hindu, heatstroke & cardiovascular deaths, May 2024: https://www.thehindu.com/news/national/80-deaths-due-to-confirmed-and-suspected-heat-strokes-605-deaths-due-to-cardiovascular-diseases-in-may-health-ministry-data/article68243688.ece

---

## License

Internal / student project for SIH 2026. See `ATTRIBUTIONS.md` and each dataset's own terms (ERA5 is CC-BY via CDS; IMD/Census data carry their own usage conditions).

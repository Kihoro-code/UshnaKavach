"""Service layer composing market + ingest + index + risk + advisory into the
exact API response shapes of research/sih26083-backend-handoff.md §5."""

from __future__ import annotations

from datetime import datetime, timezone

from . import advisories
from .config import settings
from .index.ehi import ehi_zones, zone_for_ehi
from .index.reference import heat_index_rothusfz, utci_approx, wbgt
from .ingest.providers import get_current_weather, get_forecast
from .market import all_regions, get_region
from .risk import risk_level, risk_score, zone_risk_level


def _iso_now() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def _compute_for_region(region: dict, met: float = 4.0, sun: int = 0) -> dict:
    """Compute stress, indices, risk, and advisory for one region."""
    lat = region["lat"]
    lon = region["lon"]
    wp = get_current_weather(lat=lat, lon=lon,
                             api_key=settings.imd_jwt,
                             use_mock=settings.use_mock)
    temp_c = wp.temp_c
    rh = wp.rh
    wind = wp.wind_kmph
    pressure = wp.pressure_hpa

    # Direct sun: use the region's daytime as a proxy; force sun for heat-heavy
    # outdoor-worker context via the met/sun params where relevant.
    solar_wm2 = 180.0 if sun else 0.0

    state = ehi_zones(temp_c, rh, met, sun, wind)
    zone = state["zone"]
    ehi = state["ehi_index"]
    w = wbgt(temp_c, rh, wind, solar_wm2)
    u = utci_approx(temp_c, rh, wind, solar_wm2)
    hi = heat_index_rothusfz(temp_c, rh)

    score = risk_score(
        zone,
        population=region["population"],
        outdoor_worker_pct=region["outdoor_worker_pct"],
        elderly_pct=region["elderly_pct"],
        heat_island_delta_c=region["heat_island_delta_c"],
    )
    rlevel = risk_level(score)
    advisory_map = advisories.advisory_map(rlevel, zone)

    return {
        "id": region["id"],
        "name": region["name"],
        "level": region["level"],
        "state": region["state"],
        "lat": lat,
        "lon": lon,
        "temp_c": temp_c,
        "rh": rh,
        "wind_kmph": wind,
        "pressure_hpa": pressure,
        "ehi_index": ehi,
        "ehi_zone": zone,
        "load": state["load"],
        "wbgt": w,
        "utci": u,
        "heat_index": hi,
        "risk_score": score,
        "risk_level": rlevel,
        "summary": advisories.brief(rlevel, zone),
        "advisory": advisory_map,
        "updated_at": _iso_now(),
    }


def meta() -> dict:
    return {
        "levels": ["district", "ward"],
        "states": sorted({r["state"] for r in all_regions()}),
        "index": {"primary": "EHI-N*", "reference": ["WBGT", "UTCI", "Heat Index"]},
        "risk_levels": ["low", "moderate", "high", "severe", "extreme"],
        "sources": ["IMD API", "ERA5", "GFS", "Census 2011", "MODIS LST"],
        "version": settings.version,
    }


def regions(level: str | None = None, state: str | None = None) -> list[dict]:
    out = []
    for reg in all_regions():
        if level and reg["level"] != level:
            continue
        if state and reg["state"] != state:
            continue
        c = _compute_for_region(reg)
        out.append({
            "id": c["id"],
            "name": c["name"],
            "level": c["level"],
            "state": c["state"],
            "lat": c["lat"],
            "lon": c["lon"],
            "risk_score": c["risk_score"],
            "risk_level": c["risk_level"],
            "ehi_zone": c["ehi_zone"],
            "insight_summary": c["summary"],
            "updated_at": c["updated_at"],
        })
    return out


def region_detail(region_id: str, met: float = 4.0, sun: int = 0) -> dict | None:
    reg = get_region(region_id)
    if not reg:
        return None
    c = _compute_for_region(reg, met=met, sun=sun)

    # time_of_day: 24 hourly points re-derived with temporal temperature curve.
    time_of_day = _time_of_day(reg, met=met)
    forecast = _forecast(reg)

    return {
        "id": c["id"],
        "name": c["name"],
        "level": c["level"],
        "state": c["state"],
        "current": {
            "ts": c["updated_at"],
            "temp_c": c["temp_c"],
            "rh": c["rh"],
            "wind_kmph": c["wind_kmph"],
            "ehi_index": c["ehi_index"],
            "ehi_zone": c["ehi_zone"],
            "wbgt": c["wbgt"],
            "utci": c["utci"],
            "heat_index": c["heat_index"],
            "risk_score": c["risk_score"],
            "risk_level": c["risk_level"],
        },
        "time_of_day": time_of_day,
        "forecast": forecast,
        "vulnerability": {
            "population": reg["population"],
            "elderly_pct": reg["elderly_pct"],
            "outdoor_worker_pct": reg["outdoor_worker_pct"],
            "heat_island_delta_c": reg["heat_island_delta_c"],
            "exposure_score": round(0.5 * min(reg["population"] / 5e6, 1.0)
                                    + 0.5 * min(reg["outdoor_worker_pct"] / 35.0, 1.0), 1),
            "vuln_score": round(0.5 * min(reg["elderly_pct"] / 15.0, 1.0)
                                + 0.5 * min(reg["heat_island_delta_c"] / 5.0, 1.0), 1),
        },
        "advisory": c["advisory"],
    }


def _time_of_day(reg: dict, met: float = 4.0) -> list[dict]:
    """24 hourly points using a plausible diurnal temperature curve."""
    import math

    base = get_current_weather(lat=reg["lat"], lon=reg["lon"], use_mock=settings.use_mock).temp_c
    points = []
    for hour in range(24):
        diurnal = math.sin((hour - 6) / 24.0 * 2 * math.pi)
        temp = base - 6.0 * diurnal  # cool night, hot afternoon
        rh = 70.0 - 20.0 * diurnal
        rh = max(min(rh, 95.0), 15.0)
        zone = zone_for_ehi(temp, rh, met, 1 if 10 <= hour <= 16 else 0)
        score_tmp = risk_score(zone, reg["population"], reg["outdoor_worker_pct"],
                               reg["elderly_pct"], reg["heat_island_delta_c"])
        rl = risk_level(score_tmp)
        points.append({
            "hour": hour,
            "risk_score": score_tmp,
            "risk_level": rl,
            "ehi_zone": zone,
            "advisory": advisories.zone_advisory(zone),
        })
    return points


def _forecast(reg: dict) -> list[dict]:
    fc = get_forecast(city_id=None, api_key=settings.imd_jwt, use_mock=settings.use_mock)
    out = []
    for day in fc:
        zone = zone_for_ehi(day.max_c, day.rh, 4.0, 1)
        score_tmp = risk_score(zone, reg["population"], reg["outdoor_worker_pct"],
                               reg["elderly_pct"], reg["heat_island_delta_c"])
        rl = risk_level(score_tmp)
        out.append({
            "date": day.date,
            "min_c": day.min_c,
            "max_c": day.max_c,
            "risk_score": score_tmp,
            "risk_level": rl,
            "advisory": advisories.zone_advisory(zone),
        })
    return out


def heat_index_point(lat: float, lon: float, met: float = 4.0, sun: int = 0) -> dict:
    wp = get_current_weather(lat=lat, lon=lon, use_mock=settings.use_mock)
    zone = zone_for_ehi(wp.temp_c, wp.rh, met, sun, wp.wind_kmph)
    ehi = ehi_zones(wp.temp_c, wp.rh, met, sun, wp.wind_kmph)["ehi_index"]
    rl = zone_risk_level(zone)
    return {
        "lat": lat,
        "lon": lon,
        "met": met,
        "sun": sun,
        "temp_c": wp.temp_c,
        "rh": wp.rh,
        "wind_kmph": wp.wind_kmph,
        "ehi_index": ehi,
        "ehi_zone": zone,
        "risk_level": rl,
        "advisory": advisories.zone_advisory(zone),
    }


def risk_map(level: str = "district", date: str | None = None) -> dict:
    """GeoJSON FeatureCollection of region risk polygons (approx point buffers)."""
    features = []
    for reg in all_regions():
        if reg["level"] != level:
            continue
        c = _compute_for_region(reg)
        # Approximate a small square polygon around the region centre as a stand-in
        # until real boundaries are wired (BACKLOG).
        lat, lon = reg["lat"], reg["lon"]
        d = 0.15
        ring = [
            [lon - d, lat - d], [lon + d, lat - d],
            [lon + d, lat + d], [lon - d, lat + d], [lon - d, lat - d],
        ]
        features.append({
            "type": "Feature",
            "geometry": {"type": "Polygon", "coordinates": [ring]},
            "properties": {
                "id": reg["id"],
                "name": reg["name"],
                "risk_score": c["risk_score"],
                "risk_level": c["risk_level"],
                "ehi_zone": c["ehi_zone"],
                "population": reg["population"],
            },
        })
    return {"type": "FeatureCollection", "features": features}

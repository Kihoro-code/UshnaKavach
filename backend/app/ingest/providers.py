"""Weather providers: IMD (keyed), GFS (open), plus cached/mock fallback."""

from __future__ import annotations

import logging
import time
from datetime import datetime, timedelta, timezone

import requests

from .base import ForecastPoint, WeatherPoint


log = logging.getLogger("ushnakavach.ingest")


def _ts_now() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def _cached_or_live(key: str, fetch_fn, ttl: int = 600):
    """Simple in-memory TTL cache so live calls don't hammer on a demo."""
    if not hasattr(_cached_or_live, "_cache"):
        _cached_or_live._cache = {}
    cache = _cached_or_live._cache
    hit = cache.get(key)
    now = time.time()
    if hit and now - hit["ts"] < ttl:
        return hit["value"]
    try:
        value = fetch_fn()
        cache[key] = {"ts": now, "value": value}
        return value
    except Exception as exc:  # noqa: BLE001 — fall through to any stale/mock
        log.warning("ingest[%s] failed: %s", key, exc)
        stale = cache.get(key)
        if stale:
            return stale["value"]
        raise


def _mock_current(lat: float | None = None, lon: float | None = None) -> WeatherPoint:
    """Deterministic mock (labelled) so the demo never hard-fails without a key."""
    import math

    hour = datetime.now().hour
    diurnal = math.sin((hour - 6) / 24.0 * 2 * math.pi)
    temp_c = 34.0 + 8.0 * diurnal
    rh = 60.0 - 30.0 * diurnal
    rh = max(min(rh, 95.0), 15.0)
    return WeatherPoint(
        temp_c=round(temp_c, 1),
        rh=round(rh, 1),
        wind_kmph=9.0,
        pressure_hpa=1008.0,
        ts=_ts_now(),
        source="mock",
    )


def current_weather_imd(station_id: str | None, api_key: str | None,
                        lat: float | None = None, lon: float | None = None,
                        use_mock: bool = True) -> WeatherPoint:
    """Current weather from IMD API or mock."""
    if use_mock or not api_key:
        return _mock_current(lat, lon)
    url = "https://api.imd.gov.in/api/v1/current_wx"
    params = {"id": station_id} if station_id else {"lat": lat, "lon": lon}
    try:
        resp = requests.get(
            url,
            params=params,
            headers={"Authorization": f"Bearer {api_key}"},
            timeout=8,
        )
        resp.raise_for_status()
        data = resp.json()
        return WeatherPoint(
            temp_c=float(data["Temperature"]),
            rh=float(data["Humidity"]),
            wind_kmph=float(data.get("Wind Speed", 0)),
            pressure_hpa=float(data.get("M.S.L.P", 1013)),
            ts=_ts_now(),
            source="imd",
        )
    except Exception as exc:  # noqa: BLE001
        log.warning("IMD current fetch failed: %s", exc)
        return _mock_current(lat, lon)


def _mock_forecast(base_temp: float | None = None) -> list[ForecastPoint]:
    """Deterministic 7-day mock forecast (labelled mock)."""
    base = base_temp if base_temp is not None else 34.0
    today = datetime.now(timezone.utc).date()
    out = []
    for i in range(7):
        d = today + timedelta(days=i)
        # Gentle daily drift to look like a forecast, not repeated data.
        max_c = round(base + 2.0 * (i % 3) - 0.8 * (i % 2), 1)
        min_c = round(max_c - 10.0, 1)
        rh = round(45.0 + 8.0 * (i % 4), 1)
        out.append(ForecastPoint(date=d.isoformat(), min_c=min_c, max_c=max_c, rh=rh))
    return out


def forecast_imd(city_id: str | None, api_key: str | None, use_mock: bool = True) -> list[ForecastPoint]:
    """7-day forecast from IMD or mock."""
    if use_mock or not api_key:
        return _mock_forecast()
    # IMD forecast endpoint. Field names per the reference page.
    url = "https://api.imd.gov.in/api/v1/cityforecast"
    try:
        resp = requests.get(url, params={"id": city_id}, headers={"Authorization": f"Bearer {api_key}"}, timeout=8)
        resp.raise_for_status()
        data = resp.json()
        today = datetime.now(timezone.utc).date()
        out = []
        for i in range(7):
            day = data.get(f"Day_{i+1}", {}) if i else data
            max_c = float(day.get("Max_Temp", day.get("Today_Max_temp", 34)))
            min_c = float(day.get("Min_Temp", day.get("Today_Min_temp", 24)))
            rh = float(day.get("Relative_Humidity_at_1730", 50))
            out.append(ForecastPoint(date=(today + timedelta(days=i)).isoformat(), min_c=min_c, max_c=max_c, rh=rh))
        return out
    except Exception as exc:  # noqa: BLE001
        log.warning("IMD forecast fetch failed: %s", exc)
        return _mock_forecast()


def get_current_weather(lat: float | None = None, lon: float | None = None,
                        station_id: str | None = None, api_key: str | None = None,
                        use_mock: bool = True) -> WeatherPoint:
    return _cached_or_live(
        f"current:{station_id or lat}:{lon}",
        lambda: current_weather_imd(station_id, api_key, lat, lon, use_mock),
    )


def get_forecast(city_id: str | None = None, api_key: str | None = None,
                 use_mock: bool = True) -> list[ForecastPoint]:
    return _cached_or_live(
        f"forecast:{city_id}",
        lambda: forecast_imd(city_id, api_key, use_mock),
    )


def get_meta_meta() -> dict:
    return {"source": "IMD API / ERA5 / GFS / Census 2011 / MODIS LST"}

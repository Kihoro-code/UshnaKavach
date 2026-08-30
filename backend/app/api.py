"""FastAPI application serving the SIH26083 API contract (§5)."""

from __future__ import annotations

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from . import service
from .alerts import build_alert, get_recent_alerts, preview_alert
from .config import settings
from .schemas import (
    AlertList,
    AlertPreviewRequest,
    AlertPreviewResponse,
    HeatIndexResult,
    Meta,
    RegionDetail,
    RegionList,
    RiskGeoJSON,
)


app = FastAPI(title=settings.app_name, version=settings.version)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict:
    return {"name": settings.app_name, "version": settings.version, "docs": "/docs"}


@app.get("/api/meta", response_model=Meta)
def get_meta() -> dict:
    return service.meta()


@app.get("/api/regions", response_model=RegionList)
def get_regions(
    level: str | None = Query(None, pattern="^(district|ward)$"),
    state: str | None = Query(None),
) -> dict:
    return {"regions": service.regions(level=level, state=state)}


@app.get("/api/regions/{region_id}", response_model=RegionDetail)
def get_region_detail(region_id: str, met: float = Query(4.0), sun: int = Query(0)) -> dict:
    detail = service.region_detail(region_id, met=met, sun=sun)
    if detail is None:
        raise HTTPException(status_code=404, detail="Region not found")
    return detail


@app.get("/api/risk-map", response_model=RiskGeoJSON)
def get_risk_map(
    level: str = Query("district", pattern="^(district|ward)$"),
    date: str | None = Query(None),
) -> dict:
    return service.risk_map(level=level, date=date)


@app.get("/api/heat-index/{lat}/{lon}", response_model=HeatIndexResult)
def get_heat_index(
    lat: float,
    lon: float,
    met: float = Query(4.0),
    sun: int = Query(0),
) -> dict:
    return service.heat_index_point(lat=lat, lon=lon, met=met, sun=sun)


@app.get("/api/alerts", response_model=AlertList)
def get_alerts(active: bool = Query(True)) -> dict:
    return {"alerts": get_recent_alerts(active_only=active)}


@app.post("/api/alerts/preview", response_model=AlertPreviewResponse)
def post_alert_preview(payload: AlertPreviewRequest) -> dict:
    region = service.region_detail(payload.region_id)
    if region is None:
        raise HTTPException(status_code=404, detail="Region not found")
    return preview_alert(
        payload.region_id,
        payload.audience.value,
        region["current"]["risk_level"],
        region["current"]["ehi_zone"],
    )


@app.post("/api/alerts/send")
def send_alert(region_id: str, audience: str = "general") -> dict:
    """Manual trigger for a demo alert (uses MockAlertSender)."""
    region = service.region_detail(region_id)
    if region is None:
        raise HTTPException(status_code=404, detail="Region not found")
    rlevel = region["current"]["risk_level"]
    zone = region["current"]["ehi_zone"]
    alert = build_alert(region_id, region["name"], rlevel, zone, audience)
    from .alerts import MockAlertSender

    MockAlertSender().send(alert["channel"], None, alert["title"], alert["body"])
    return alert

"""API contract tests against the FastAPI TestClient."""

from __future__ import annotations

import pytest
from fastapi.testclient import TestClient

from app.api import app


@pytest.fixture
def client():
    return TestClient(app)


def test_meta(client):
    r = client.get("/api/meta")
    assert r.status_code == 200
    data = r.json()
    assert data["index"]["primary"] == "EHI-N*"
    assert "low" in data["risk_levels"]
    assert "extreme" in data["risk_levels"]


def test_regions_district(client):
    r = client.get("/api/regions?level=district")
    assert r.status_code == 200
    regions = r.json()["regions"]
    assert regions
    assert all(x["level"] == "district" for x in regions)
    assert {"risk_score", "risk_level", "ehi_zone", "insight_summary"} <= set(regions[0].keys())


def test_region_detail(client):
    r = client.get("/api/regions/mh-nagpur")
    assert r.status_code == 200
    data = r.json()
    assert data["id"] == "mh-nagpur"
    assert len(data["time_of_day"]) == 24
    assert len(data["forecast"]) == 7
    assert set(data["current"].keys()) == {
        "ts", "temp_c", "rh", "wind_kmph", "ehi_index", "ehi_zone",
        "wbgt", "utci", "heat_index", "risk_score", "risk_level",
    }


def test_region_detail_404(client):
    assert client.get("/api/regions/does-not-exist").status_code == 404


def test_risk_map(client):
    r = client.get("/api/risk-map?level=district")
    assert r.status_code == 200
    fc = r.json()
    assert fc["type"] == "FeatureCollection"
    for f in fc["features"]:
        assert f["geometry"]["type"] == "Polygon"
        assert {"id", "risk_score", "risk_level", "ehi_zone", "population"} <= set(f["properties"].keys())


def test_heat_index(client):
    r = client.get("/api/heat-index/19.076/72.8777?met=4&sun=1")
    assert r.status_code == 200
    data = r.json()
    assert data["lat"] == 19.076
    assert data["sun"] == 1
    assert data["risk_level"] in {"low", "moderate", "high", "severe", "extreme"}


def test_alerts_preview(client):
    r = client.post("/api/alerts/preview", json={"region_id": "mh-nagpur", "audience": "outdoor_workers"})
    assert r.status_code == 200
    assert r.json()["audience"] == "outdoor_workers"
    assert isinstance(r.json()["text"], str)


def test_alerts_send_mock(client):
    r = client.post("/api/alerts/send?region_id=mh-nagpur&audience=outdoor_workers")
    assert r.status_code == 200
    assert r.json()["region_id"] == "mh-nagpur"

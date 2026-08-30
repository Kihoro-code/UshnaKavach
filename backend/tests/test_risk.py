"""Risk score and level mapping tests."""

from __future__ import annotations

from app.risk import risk_level, risk_score


def test_risk_monotonic_in_zone():
    low = risk_score(2, 500_000, 10, 6, 0.5)
    high = risk_score(6, 500_000, 10, 6, 0.5)
    assert high > low


def test_risk_monotonic_in_population():
    a = risk_score(5, 300_000, 20, 10, 2.0)
    b = risk_score(5, 5_000_000, 20, 10, 2.0)
    assert b > a


def test_level_mapping():
    assert risk_level(95) == "extreme"
    assert risk_level(70) == "severe"
    assert risk_level(50) == "high"
    assert risk_level(35) == "moderate"
    assert risk_level(15) == "low"

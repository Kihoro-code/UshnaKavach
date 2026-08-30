"""Unit tests for the EHI-N* index core."""

from __future__ import annotations

from app.index.ehi import ehi_zones, zone_for_ehi
from app.index.reference import heat_index_rothusfz, wbgt_category, wet_bulb


def test_anchor_table_heavy_labour_sun():
    """The IECC report's EHI-N* anchor table must be reproduced."""
    # (temp, rh%, expected_zone) with MET 6, sun.
    anchors = [
        (35, 50, 5),  # Zone 5 (earlier physiological strain)
        (35, 70, 6),  # Zone 6 (core temp rising)
        (40, 50, 6),  # Zone 6
        (40, 70, 6),  # Zone 6
    ]
    for temp, rh, expected in anchors:
        zone = zone_for_ehi(temp, rh, met=6, sun=1)
        assert zone == expected, f"{temp}C/{rh}% expected {expected} got {zone}"


def test_comfortable_and_cold_conditions():
    assert zone_for_ehi(22, 40, met=2, sun=0) in (1, 2)
    assert zone_for_ehi(28, 50, met=2, sun=0) in (2, 3)


def test_sun_raises_stress_over_shade():
    """Direct solar (* in EHI-N*) must push the same weather into a higher zone."""
    shade = zone_for_ehi(40, 40, met=6, sun=0)
    sun = zone_for_ehi(40, 40, met=6, sun=1)
    assert sun >= shade


def test_high_met_raises_stress():
    low = zone_for_ehi(38, 55, met=3, sun=1)
    high = zone_for_ehi(38, 55, met=6, sun=1)
    assert high >= low


def test_ehi_n_star_monotonic_in_heat():
    """EHI index should not decrease as temperature rises (same RH/MET)."""
    cool = ehi_zones(32, 50, met=5, sun=1)["ehi_index"]
    hot = ehi_zones(42, 50, met=5, sun=1)["ehi_index"]
    assert hot > cool


def test_wet_bulb_sane_range():
    assert 20 < wet_bulb(35, 50) < 35
    # Higher humidity raises wet-bulb at a fixed temperature.
    assert wet_bulb(40, 20) < wet_bulb(40, 80)


def test_wbgt_iso_categories():
    assert wbgt_category(26.0) == "White"
    assert wbgt_category(28.5) == "Green"
    assert wbgt_category(30.0) == "Yellow"
    assert wbgt_category(31.5) == "Red"
    assert wbgt_category(33.0) == "Black"


def test_heat_index_present():
    hi = heat_index_rothusfz(35, 50)
    assert isinstance(hi, float) and hi > 0

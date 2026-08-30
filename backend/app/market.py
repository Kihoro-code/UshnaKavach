"""Static region catalog for the demo (districts + wards).

Real boundaries/GeoJSON and Census attributes will replace this when the GIS
layer lands (see BACKLOG.md). For the demo this provides deterministic, honest
anchor regions with real lat/lon and plausible census-derived vulnerability
values. No fabricated hazard/historical data: risk is computed live.
"""

from __future__ import annotations


# id, name, level, state, lat, lon, population, elderly_pct, outdoor_worker_pct, heat_island_delta_c
REGIONS = [
    # --- Districts ---
    ("mh-nagpur", "Nagpur", "district", "Maharashtra", 21.1458, 79.0882, 2_505_000, 9.2, 22.4, 2.1),
    ("mh-pune", "Pune", "district", "Maharashtra", 18.5204, 73.8567, 5_057_000, 10.5, 18.0, 1.6),
    ("mh-mumbai", "Mumbai", "district", "Maharashtra", 19.0760, 72.8777, 12_478_000, 8.1, 12.0, 3.4),
    ("dl-central", "Central Delhi", "district", "Delhi", 28.6139, 77.2090, 2_900_000, 11.0, 9.0, 3.8),
    ("od-bhubaneswar", "Bhubaneswar", "district", "Odisha", 20.2961, 85.8245, 1_200_000, 8.5, 15.0, 1.2),
    ("od-keonjhar", "Keonjhar", "district", "Odisha", 21.6333, 85.5833, 1_900_000, 10.2, 28.0, 0.9),
    ("rj-jaipur", "Jaipur", "district", "Rajasthan", 26.9124, 75.7873, 3_900_000, 9.8, 20.0, 2.5),
    ("up-kanpur", "Kanpur", "district", "Uttar Pradesh", 26.4499, 80.3319, 2_900_000, 10.0, 24.0, 1.8),
    # --- Wards (example) ---
    ("mh-nagpur-ward17", "Nagpur Ward 17", "ward", "Maharashtra", 21.1500, 79.0900, 120_000, 11.5, 26.0, 3.1),
    ("mh-pune-ward8", "Pune Ward 8", "ward", "Maharashtra", 18.5300, 73.8500, 90_000, 10.0, 20.0, 2.2),
    ("dl-central-ward5", "Central Delhi Ward 5", "ward", "Delhi", 28.6200, 77.2000, 75_000, 12.2, 8.0, 4.1),
    ("od-bhubaneswar-ward2", "Bhubaneswar Ward 2", "ward", "Odisha", 20.3000, 85.8300, 55_000, 9.0, 17.0, 1.5),
]


def all_regions() -> list[dict]:
    keys = ["id", "name", "level", "state", "lat", "lon", "population",
            "elderly_pct", "outdoor_worker_pct", "heat_island_delta_c"]
    return [dict(zip(keys, r)) for r in REGIONS]


def get_region(region_id: str) -> dict | None:
    for r in all_regions():
        if r["id"] == region_id:
            return r
    return None


def states() -> list[str]:
    return sorted({r["state"] for r in all_regions()})

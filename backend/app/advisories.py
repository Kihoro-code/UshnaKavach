"""Audience-specific heat advisories.

Provides deterministic template advisories keyed by (risk_level, audience, zone),
with an optional LLM-augmented plain-language layer. The template path is the
guaranteed fallback — delivery/rendering is never blocked on an LLM call or key.
"""

from __future__ import annotations

from typing import Literal


Audience = Literal["general", "outdoor_workers", "elderly", "school_clinic", "municipal"]


# Template guidance keyed by (risk_level_low, audience). Higher levels build on
# lower ones. Source: EHI-N* report + NDMA/NCDC guidance.
_TEMPLATES: dict[Audience, dict[str, str]] = {
    "general": {
        "low": "Slight heat; stay hydrated and keep cool.",
        "moderate": "Moderate stress; limit prolonged outdoor exertion.",
        "high": "High stress; avoid outdoor exertion 11:00-17:00.",
        "severe": "Severe heat; avoid outdoor exertion; drink water; seek shade.",
        "extreme": "Extreme heat; stay indoors where possible; check on others.",
    },
    "outdoor_workers": {
        "low": "Light heat; normal work with water breaks.",
        "moderate": "Moderate stress; take regular water breaks.",
        "high": "High stress; take frequent shade breaks; hydrate; reduce heavy work.",
        "severe": "Severe; limit heavy work duration; 10-min rest every 20 min.",
        "extreme": "Extreme; suspend heavy outdoor work 11:00-17:00.",
    },
    "elderly": {
        "low": "Mild heat; drink water and keep cool.",
        "moderate": "Moderate stress; rest in shade; stay hydrated.",
        "high": "High stress; stay indoors during peak hours.",
        "severe": "Severe heat; stay in a cool room; avoid exertion.",
        "extreme": "Extreme; remain indoors; contact support if unwell.",
    },
    "school_clinic": {
        "low": "Warm day; keep water available.",
        "moderate": "Moderate; shift outdoor activities to cooler hours.",
        "high": "High; move outdoor activities indoors; ensure hydration.",
        "severe": "Severe; cancel outdoor activities; keep clinics cool.",
        "extreme": "Extreme; shift everything indoors; ensure clinics hydrated.",
    },
    "municipal": {
        "low": "Monitor conditions; keep water points ready.",
        "moderate": "Moderate; raise water point availability.",
        "high": "High; open cooling centres; prioritise water points.",
        "severe": "Severe; activate cooling centres; advise vulnerable groups.",
        "extreme": "Extreme; activate cooling centres; issue work-cessation notices.",
    },
}


def zone_advisory(zone: int) -> str:
    """One-line advisory keyed to the EHI-N* zone."""
    return {
        1: "Cold stress; retain heat.",
        2: "Comfortable; normal activity.",
        3: "Comfortable; normal activity.",
        4: "Caution; take extra breaks and hydrate.",
        5: "Danger; limit heavy outdoor work and take frequent breaks.",
        6: "Extreme; suspend heavy outdoor work to prevent heat stroke.",
    }.get(zone, "Monitor conditions.")


def _level_for_zone(zone: int) -> str:
    if zone >= 6:
        return "extreme"
    if zone >= 5:
        return "severe"
    if zone >= 4:
        return "high"
    return "moderate"


def template_advisory(audience: Audience, risk_level: str, zone: int) -> str:
    """Static advisory for (audience, risk_level, zone)."""
    level = risk_level if risk_level in _TEMPLATES[audience] else _level_for_zone(zone)
    return _TEMPLATES[audience][level]


def advisory(audience: Audience, risk_level: str, zone: int,
             llm_text: str | None = None) -> str:
    """Advisory with optional LLM augmentation and guaranteed template fallback."""
    if llm_text:
        return llm_text
    return template_advisory(audience, risk_level, zone)


def advisory_map(risk_level: str, zone: int, llm: dict[str, str] | None = None) -> dict[str, str]:
    """Full advisory map for all audiences."""
    llm = llm or {}
    return {
        "general": advisory("general", risk_level, zone, llm.get("general")),
        "outdoor_workers": advisory("outdoor_workers", risk_level, zone, llm.get("outdoor_workers")),
        "elderly": advisory("elderly", risk_level, zone, llm.get("elderly")),
        "school_clinic": advisory("school_clinic", risk_level, zone, llm.get("school_clinic")),
        "municipal": advisory("municipal", risk_level, zone, llm.get("municipal")),
    }


def brief(risk_level: str, zone: int) -> str:
    """Compact insight summary for list cards."""
    level = risk_level if risk_level != "low" else "moderate"
    return template_advisory("outdoor_workers", level, zone)

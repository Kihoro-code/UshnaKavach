"""Heat alert service.

For the demo the :class:`MockAlertSender` logs instead of sending — zero keys,
zero cost. Real channels (Twilio SMS/WhatsApp, FCM push, SMTP email) are wired as
a config swap in BACKLOG.md. The alert trigger logic (zone/risk threshold) is the
same regardless of channel.
"""

from __future__ import annotations

import logging
from datetime import datetime, timezone
from typing import Protocol

from .advisories import template_advisory, zone_advisory


log = logging.getLogger("ushnakavach.alerts")


class AlertSender(Protocol):
    """Minimal sender interface; concrete mock/real senders implement this."""

    def send(self, channel: str, to: str | None, title: str, body: str) -> None: ...


class MockAlertSender:
    """Log-only sender that pretends to send. Safe for the demo."""

    def send(self, channel: str, to: str | None, title: str, body: str) -> None:
        log.info("MOCK %s alert -> %s | %s | %s", channel, to, title, body)
        # Store in-memory so the /alerts endpoint can show a recent list.
        record = {
            "id": f"al-{int(datetime.now(timezone.utc).timestamp())}",
            "channel": channel,
            "title": title,
            "body": body,
            "sent_at": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
            "to": to,
        }
        _RECENT.append(record)


_RECENT: list[dict] = []


def get_recent_alerts(active_only: bool = True) -> list[dict]:
    if active_only:
        return sorted(_RECENT, key=lambda r: r["sent_at"], reverse=True)[:50]
    return sorted(_RECENT, key=lambda r: r["sent_at"], reverse=True)[:50]


def should_alert(risk_level: str, zone: int) -> bool:
    """Trigger a tiered alert when risk reaches severe/extreme or zone >= 5."""
    return risk_level in {"severe", "extreme"} or zone >= 5


def build_alert(region_id: str, region_name: str, risk_level: str, zone: int,
                audience: str | None = None) -> dict:
    """Build an alert payload with audience-appropriate copy."""
    aud = audience or "general"
    title = f"{risk_level.title()} heat — {zone_advisory(zone)}"
    body = template_advisory(aud, risk_level, zone)
    return {
        "id": f"al-{region_id}-{int(datetime.now(timezone.utc).timestamp())}",
        "region_id": region_id,
        "region_name": region_name,
        "risk_level": risk_level,
        "title": title,
        "body": body,
        "channel": "SMS",
        "sent_at": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
    }


def preview_alert(region_id: str, audience: str, risk_level: str, zone: int) -> dict:
    """Preview advisory text without sending."""
    text = template_advisory(audience, risk_level, zone)
    return {"audience": audience, "text": text}

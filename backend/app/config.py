"""Runtime configuration for the UshnaKavach backend.

Keys are read from environment variables. Never commit real credentials; use a
local ``.env`` file (git-ignored) or pass them via the platform's env panel.
"""

from __future__ import annotations

import os
from dataclasses import dataclass, field


def _env(name: str, default: str | None = None) -> str | None:
    return os.environ.get(name, default)


def _env_bool(name: str, default: bool = False) -> bool:
    val = _env(name)
    if val is None:
        return default
    return val.strip().lower() in {"1", "true", "yes", "on"}


@dataclass(frozen=True)
class Settings:
    """Bundle of backend settings."""

    app_name: str = "UshnaKavach"
    version: str = "0.1.0"
    api_prefix: str = "/api"

    # CORS — allow the local dev server; add the deployed Vercel origin too.
    cors_origins: tuple[str, ...] = (
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://ushnakavach.vercel.app",
    )

    # Data source toggles
    use_mock: bool = field(default_factory=lambda: _env_bool("USHNAKAVACH_USE_MOCK", True))
    use_gfs: bool = field(default_factory=lambda: _env_bool("USHNAKAVACH_USE_GFS", False))
    use_imd: bool = field(default_factory=lambda: _env_bool("USHNAKAVACH_USE_IMD", False))

    # IMD API
    imd_base_url: str = _env("IMD_API_BASE", "https://api.imd.gov.in/api/v1") or "https://api.imd.gov.in/api/v1"
    imd_jwt: str | None = _env("IMD_API_KEY")

    # CDS / ERA5
    cds_url: str = _env("CDS_API_URL", "https://cds.climate.copernicus.eu/api/v2") or "https://cds.climate.copernicus.eu/api/v2"
    cds_api_key: str | None = _env("CDS_API_KEY")

    # Alerts
    twilio_sid: str | None = _env("TWILIO_ACCOUNT_SID")
    twilio_token: str | None = _env("TWILIO_AUTH_TOKEN")
    twilio_from: str | None = _env("TWILIO_FROM")
    fcm_credentials: str | None = _env("FCM_CREDENTIALS")
    smtp_host: str | None = _env("SMTP_HOST")
    smtp_user: str | None = _env("SMTP_USER")
    smtp_pass: str | None = _env("SMTP_PASS")

    # LLM advisory
    llm_provider: str | None = _env("LLM_PROVIDER")
    llm_api_key: str | None = _env("LLM_API_KEY")

    # Reference / static file paths
    data_dir: str = _env("USHNAKAVACH_DATA_DIR", "data") or "data"

    @property
    def cors_origin_list(self) -> list[str]:
        return list(self.cors_origins)


settings = Settings()

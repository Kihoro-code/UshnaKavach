"""Shared test fixtures/config."""

from __future__ import annotations

import os
import sys

import pytest

# Ensure the backend package is importable from anywhere pytest is run.
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


@pytest.fixture
def anyio_backend():
    return "asyncio"

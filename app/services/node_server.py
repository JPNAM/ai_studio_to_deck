"""Manage the AI Studio dev server lifecycle."""
from __future__ import annotations

import subprocess
import time
from contextlib import contextmanager
from pathlib import Path

import requests

from app.config import DECK_DEV_HOST, DECK_DEV_PORT, DECK_SOURCE_DIR


@contextmanager
def node_dev_server():
    """Start `npm run dev` for the deck export and yield the base URL."""
    cwd = Path(DECK_SOURCE_DIR)
    proc = subprocess.Popen(
        ["npm", "run", "dev", "--", "--host", DECK_DEV_HOST, "--port", str(DECK_DEV_PORT)],
        cwd=cwd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )

    base_url = f"http://{DECK_DEV_HOST}:{DECK_DEV_PORT}"
    try:
        for _ in range(60):
            try:
                requests.get(base_url, timeout=0.5)
                break
            except Exception:
                time.sleep(0.5)
        yield base_url
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except subprocess.TimeoutExpired:
            proc.kill()

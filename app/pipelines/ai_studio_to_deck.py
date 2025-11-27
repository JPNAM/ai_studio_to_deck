"""Pipeline to convert AI Studio slides into a Google Slides presentation."""
from __future__ import annotations

import logging
from pathlib import Path

import yaml

from app.config import PRESENTATION_TITLE, SLIDES_CONFIG_PATH
from app.models.slides import SlideConfig
from app.services.browser import capture_raw_slide_spec
from app.services.gslides_client import apply_slide_to_presentation, create_presentation
from app.services.model_builder import build_slide_model
from app.services.node_server import node_dev_server

logger = logging.getLogger(__name__)


def load_slide_config() -> SlideConfig:
    """Load slide configuration from YAML."""
    data = yaml.safe_load(Path(SLIDES_CONFIG_PATH).read_text())
    return SlideConfig(**data)


def run_ai_studio_to_deck() -> None:
    """Run the end-to-end pipeline from AI Studio to Google Slides."""
    config = load_slide_config()
    logger.info("Loaded slide config for %s slides", len(config.slides))

    with node_dev_server() as base_url:
        logger.info("Node dev server available at %s", base_url)
        slide_models = []
        for entry in config.slides:
            base_path = config.base_path.rstrip("/") if config.base_path else ""
            url_path = f"{base_path}{entry.path}"
            url = f"{base_url}{url_path}"
            logger.info("Capturing slide %s from %s", entry.id, url)
            raw = capture_raw_slide_spec(url)
            debug_dir = Path("deck_output/layout_snapshots")
            debug_dir.mkdir(parents=True, exist_ok=True)
            debug_path = debug_dir / f"{entry.id}.json"
            debug_path.write_text(raw.model_dump_json(indent=2))
            slide_models.append(build_slide_model(entry.id, raw))

    presentation_id = create_presentation(PRESENTATION_TITLE)
    logger.info("Created presentation: %s", presentation_id)
    logger.info("Edit at https://docs.google.com/presentation/d/%s/edit", presentation_id)

    for slide in slide_models:
        apply_slide_to_presentation(presentation_id, slide)
        logger.info("Applied slide %s", slide.id)

    logger.info("Pipeline complete")

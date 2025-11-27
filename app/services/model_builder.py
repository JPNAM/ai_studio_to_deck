"""Convert raw DOM capture into normalized slide models."""
from __future__ import annotations

import json
from pathlib import Path
from typing import List

from app.config import SLIDE_HEIGHT_PT, SLIDE_WIDTH_PT
from app.models.slides import ElementType, RawSlideSpec, SlideElement, SlideModel
from app.services.css_parsers import (
    parse_border_radius,
    parse_border_width,
    parse_box_shadow,
    parse_color,
    parse_font_weight,
    parse_text_align,
    px_to_pt,
)


def build_slide_model(slide_id: str, raw: RawSlideSpec) -> SlideModel:
    """Scale a RawSlideSpec into Google Slides coordinate space."""
    scale_x = SLIDE_WIDTH_PT / raw.viewport_width
    scale_y = SLIDE_HEIGHT_PT / raw.viewport_height
    scale = min(scale_x, scale_y)

    elements: List[SlideElement] = []
    for idx, el in enumerate(raw.elements):
        et = el.element_type.lower()
        if et == "card":
            elem_type: ElementType = "CARD"
        elif et == "icon":
            elem_type = "ICON"
        else:
            elem_type = "TEXT"

        x_pt = el.x * scale
        y_pt = el.y * scale
        width_pt = el.width * scale
        height_pt = el.height * scale

        styles = el.styles
        color = parse_color(styles.get("color", ""))
        background_color = parse_color(styles.get("backgroundColor", ""))
        border_color = parse_color(styles.get("borderColor", ""))
        border_width_pt = parse_border_width(styles.get("borderWidth", ""))
        border_radius_pt = parse_border_radius(styles.get("borderRadius", ""))
        text_align = parse_text_align(styles.get("textAlign", ""))
        font_weight = parse_font_weight(styles.get("fontWeight", "")) if elem_type == "TEXT" else None
        box_shadow = parse_box_shadow(styles.get("boxShadow", ""))

        font_size_str = styles.get("fontSize", "").replace("px", "").strip()
        font_size_pt = px_to_pt(float(font_size_str)) if font_size_str else None

        elem = SlideElement(
            id=f"{slide_id}_el_{idx}",
            type=elem_type,
            role=el.role,
            x_pt=x_pt,
            y_pt=y_pt,
            width_pt=width_pt,
            height_pt=height_pt,
            text=el.text or None,
            font_family=styles.get("fontFamily") or None,
            font_size_pt=font_size_pt,
            font_weight=font_weight,
            color=color,
            background_color=background_color,
            border_color=border_color,
            border_width_pt=border_width_pt,
            border_radius_pt=border_radius_pt,
            text_align=text_align,
            box_shadow=box_shadow,
        )
        elements.append(elem)

    return SlideModel(id=slide_id, elements=elements)


def load_slide_models_from_dir(dir_path: Path) -> list[SlideModel]:
    """Load slide models from a directory of RawSlideSpec JSON files."""
    models: list[SlideModel] = []
    for path in sorted(dir_path.glob("*.json")):
        raw = RawSlideSpec.model_validate_json(path.read_text())
        slide_id = path.stem
        models.append(build_slide_model(slide_id, raw))
    return models

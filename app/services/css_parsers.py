"""Utilities for parsing CSS style values into structured types."""
from __future__ import annotations

import re
from typing import Optional, Literal

from app.models.slides import ParsedShadow, RgbColor, TextAlign


def parse_color(value: str) -> Optional[RgbColor]:
    """Parse CSS color strings into RGB values normalized 0-1."""
    if not value or value.lower() in {"none", "transparent"}:
        return None

    value = value.strip()
    hex_match = re.fullmatch(r"#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})", value)
    if hex_match:
        hex_value = hex_match.group(1)
        if len(hex_value) == 3:
            r, g, b = (int(c * 2, 16) for c in hex_value)
        else:
            r, g, b = (int(hex_value[i:i+2], 16) for i in (0, 2, 4))
        return RgbColor(red=r / 255.0, green=g / 255.0, blue=b / 255.0)

    rgb_match = re.fullmatch(r"rgba?\(([^\)]+)\)", value)
    if rgb_match:
        parts = [p.strip() for p in rgb_match.group(1).split(",")]
        if len(parts) >= 3:
            try:
                r, g, b = (float(parts[i]) for i in range(3))
                return RgbColor(red=r / 255.0, green=g / 255.0, blue=b / 255.0)
            except ValueError:
                return None
    return None


def px_to_pt(px: float) -> float:
    """Convert pixels to points assuming 96 PPI."""
    return px * 72.0 / 96.0


def parse_border_width(value: str) -> Optional[float]:
    if not value:
        return None
    match = re.search(r"([0-9.]+)px", value)
    return px_to_pt(float(match.group(1))) if match else None


def parse_border_radius(value: str) -> Optional[float]:
    if not value:
        return None
    match = re.search(r"([0-9.]+)px", value)
    return px_to_pt(float(match.group(1))) if match else None


def parse_text_align(value: str) -> Optional[TextAlign]:
    value = (value or "").lower()
    if value == "left":
        return "START"
    if value == "center":
        return "CENTER"
    if value == "right":
        return "END"
    return None


def parse_font_weight(value: str) -> Literal["NORMAL", "BOLD"]:
    if not value:
        return "NORMAL"
    lower = value.lower()
    if lower == "bold":
        return "BOLD"
    try:
        numeric = int(value)
        if numeric >= 600:
            return "BOLD"
    except ValueError:
        pass
    return "NORMAL"


def parse_box_shadow(value: str) -> Optional[ParsedShadow]:
    if not value or value.lower() == "none":
        return None

    parts = value.split()
    if len(parts) < 4:
        return None
    try:
        offset_x_px = float(parts[0].replace("px", ""))
        offset_y_px = float(parts[1].replace("px", ""))
        blur_radius_px = float(parts[2].replace("px", ""))
    except ValueError:
        return None

    color_part = " ".join(parts[3:])
    color = parse_color(color_part)
    opacity = 1.0
    rgba_match = re.fullmatch(r"rgba?\(([^\)]+)\)", color_part)
    if rgba_match:
        rgba_parts = [p.strip() for p in rgba_match.group(1).split(",")]
        if len(rgba_parts) == 4:
            try:
                opacity = float(rgba_parts[3])
            except ValueError:
                opacity = 1.0

    if not color:
        return None

    return ParsedShadow(
        offset_x_pt=px_to_pt(offset_x_px),
        offset_y_pt=px_to_pt(offset_y_px),
        blur_radius_pt=px_to_pt(blur_radius_px),
        color=color,
        opacity=opacity,
    )

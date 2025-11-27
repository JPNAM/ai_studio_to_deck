"""Wrapper utilities for Google Slides API interactions."""
from __future__ import annotations

import os
from typing import List, Optional

from google.oauth2 import service_account
from googleapiclient.discovery import build

from app.config import GOOGLE_CREDENTIALS_PATH
from app.models.slides import ParsedShadow, RgbColor, SlideElement, SlideModel

SCOPES = [
    "https://www.googleapis.com/auth/presentations",
    "https://www.googleapis.com/auth/drive",
]


def _rgb_to_solid_fill(color: Optional[RgbColor]) -> Optional[dict]:
    if not color:
        return None
    return {
        "solidFill": {
            "color": {
                "rgbColor": {
                    "red": color.red,
                    "green": color.green,
                    "blue": color.blue,
                }
            }
        }
    }


def _rgb_to_optional_color(color: Optional[RgbColor]) -> Optional[dict]:
    if not color:
        return None
    return {"opaqueColor": {"rgbColor": {"red": color.red, "green": color.green, "blue": color.blue}}}


def get_slides_service():
    """Create a Google Slides service instance using service account credentials."""
    creds_path = GOOGLE_CREDENTIALS_PATH or os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    if not creds_path:
        raise RuntimeError(
            "Google credentials path is not configured. Set GOOGLE_CREDENTIALS_PATH or GOOGLE_APPLICATION_CREDENTIALS."
        )
    creds = service_account.Credentials.from_service_account_file(creds_path, scopes=SCOPES)
    return build("slides", "v1", credentials=creds)


def create_presentation(title: str) -> str:
    service = get_slides_service()
    presentation = service.presentations().create(body={"title": title}).execute()
    return presentation.get("presentationId")


def _shape_transform(x_pt: float, y_pt: float) -> dict:
    return {
        "scaleX": 1,
        "scaleY": 1,
        "translateX": x_pt,
        "translateY": y_pt,
        "unit": "PT",
    }


def _size(width_pt: float, height_pt: float) -> dict:
    return {
        "width": {"magnitude": width_pt, "unit": "PT"},
        "height": {"magnitude": height_pt, "unit": "PT"},
    }


def _build_shadow(shadow: Optional[ParsedShadow]) -> Optional[dict]:
    if not shadow:
        return None
    return {
        "type": "DROP_SHADOW",
        "transform": {
            "scaleX": 1,
            "scaleY": 1,
            "translateX": shadow.offset_x_pt,
            "translateY": shadow.offset_y_pt,
            "unit": "PT",
        },
        "blurRadius": {"magnitude": shadow.blur_radius_pt, "unit": "PT"},
        "color": {
            "rgbColor": {
                "red": shadow.color.red,
                "green": shadow.color.green,
                "blue": shadow.color.blue,
            },
            "alpha": shadow.opacity,
        },
    }


def build_requests_for_slide(page_id: str, slide: SlideModel) -> List[dict]:
    requests: List[dict] = []
    for element in slide.elements:
        if element.type == "CARD":
            requests.append(
                {
                    "createShape": {
                        "objectId": element.id,
                        "shapeType": "RECTANGLE",
                        "elementProperties": {
                            "pageObjectId": page_id,
                            "size": _size(element.width_pt, element.height_pt),
                            "transform": _shape_transform(element.x_pt, element.y_pt),
                        },
                    }
                }
            )
            shape_props: dict = {}
            fill = _rgb_to_solid_fill(element.background_color)
            if fill:
                shape_props["shapeBackgroundFill"] = fill
            if element.border_color:
                shape_props["outline"] = {
                    "outlineFill": _rgb_to_solid_fill(element.border_color),
                    "weight": {"magnitude": element.border_width_pt or 1, "unit": "PT"},
                }
            if element.border_radius_pt:
                shape_props["shapeProperties"] = {"contentAlignment": "MIDDLE"}
                shape_props["shapeProperties"] = shape_props.get("shapeProperties", {}) | {"cornerRadius": {"magnitude": element.border_radius_pt, "unit": "PT"}}
            shadow = _build_shadow(element.box_shadow)
            if shadow:
                shape_props["shadow"] = shadow
            if shape_props:
                requests.append(
                    {
                        "updateShapeProperties": {
                            "objectId": element.id,
                            "fields": ",".join(shape_props.keys()),
                            "shapeProperties": shape_props.get("shapeProperties", {}),
                            "shapeBackgroundFill": shape_props.get("shapeBackgroundFill"),
                            "outline": shape_props.get("outline"),
                            "shadow": shape_props.get("shadow"),
                        }
                    }
                )
        elif element.type == "TEXT":
            requests.append(
                {
                    "createShape": {
                        "objectId": element.id,
                        "shapeType": "TEXT_BOX",
                        "elementProperties": {
                            "pageObjectId": page_id,
                            "size": _size(element.width_pt, element.height_pt),
                            "transform": _shape_transform(element.x_pt, element.y_pt),
                        },
                    }
                }
            )
            requests.append(
                {
                    "insertText": {
                        "objectId": element.id,
                        "text": element.text or "",
                    }
                }
            )
            text_style: dict = {}
            if element.font_family:
                text_style["fontFamily"] = element.font_family
            if element.font_size_pt:
                text_style["fontSize"] = {"magnitude": element.font_size_pt, "unit": "PT"}
            if element.font_weight:
                text_style["bold"] = element.font_weight == "BOLD"
            if element.color:
                text_style["foregroundColor"] = _rgb_to_optional_color(element.color)
            if text_style:
                requests.append(
                    {
                        "updateTextStyle": {
                            "objectId": element.id,
                            "style": text_style,
                            "fields": ",".join(text_style.keys()),
                        }
                    }
                )
            if element.text_align:
                requests.append(
                    {
                        "updateParagraphStyle": {
                            "objectId": element.id,
                            "style": {"alignment": element.text_align},
                            "fields": "alignment",
                        }
                    }
                )
        elif element.type == "ICON":
            # Placeholder for future image insertion logic
            requests.append(
                {
                    "createImage": {
                        "objectId": element.id,
                        "elementProperties": {
                            "pageObjectId": page_id,
                            "size": _size(element.width_pt, element.height_pt),
                            "transform": _shape_transform(element.x_pt, element.y_pt),
                        },
                        # TODO: Map element.role to an icon URL
                        "url": "https://via.placeholder.com/150",
                    }
                }
            )
    return requests


def apply_slide_to_presentation(presentation_id: str, slide: SlideModel) -> None:
    service = get_slides_service()
    page_id = slide.id
    requests: List[dict] = [
        {
            "createSlide": {
                "objectId": page_id,
                "insertionIndex": 0,
                "slideLayoutReference": {"predefinedLayout": "BLANK"},
            }
        }
    ]
    requests.extend(build_requests_for_slide(page_id, slide))
    service.presentations().batchUpdate(presentationId=presentation_id, body={"requests": requests}).execute()

from typing import List, Optional, Literal
from pydantic import BaseModel

ElementType = Literal["CARD", "TEXT", "ICON"]


class RawSlideElement(BaseModel):
    element_type: str
    role: Optional[str]
    text: str
    x: float
    y: float
    width: float
    height: float
    styles: dict


class RawSlideSpec(BaseModel):
    viewport_width: float
    viewport_height: float
    elements: List[RawSlideElement]


class RgbColor(BaseModel):
    red: float
    green: float
    blue: float


class ParsedShadow(BaseModel):
    offset_x_pt: float
    offset_y_pt: float
    blur_radius_pt: float
    color: RgbColor
    opacity: float


TextAlign = Literal["START", "CENTER", "END"]


class SlideElement(BaseModel):
    id: str
    type: ElementType
    role: Optional[str]
    x_pt: float
    y_pt: float
    width_pt: float
    height_pt: float
    text: Optional[str]
    font_family: Optional[str]
    font_size_pt: Optional[float]
    font_weight: Optional[Literal["NORMAL", "BOLD"]]
    color: Optional[RgbColor]
    background_color: Optional[RgbColor]
    border_color: Optional[RgbColor]
    border_width_pt: Optional[float]
    border_radius_pt: Optional[float]
    text_align: Optional[TextAlign]
    box_shadow: Optional[ParsedShadow]


class SlideModel(BaseModel):
    id: str
    elements: List[SlideElement]


class SlideConfigEntry(BaseModel):
    id: str
    path: str


class SlideConfig(BaseModel):
    base_path: str
    slides: List[SlideConfigEntry]

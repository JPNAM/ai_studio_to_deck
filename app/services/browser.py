"""Playwright integration to capture raw slide layout."""
from __future__ import annotations

import json
from typing import Iterable

from playwright.sync_api import sync_playwright

from app.models.slides import RawSlideSpec

CSS_PROPS = [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "color",
    "backgroundColor",
    "borderRadius",
    "borderColor",
    "borderWidth",
    "textAlign",
    "lineHeight",
    "letterSpacing",
    "boxShadow",
]


def capture_raw_slide_spec(url: str) -> RawSlideSpec:
    """Capture DOM geometry and styles for a slide URL."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        page.goto(url, wait_until="networkidle")
        page.wait_for_timeout(800)

        result = page.evaluate(
            """() => {
                const elements = Array.from(
                  document.querySelectorAll('[data-slide-element]')
                );
                const payload = elements.map((el) => {
                  const rect = el.getBoundingClientRect();
                  const style = window.getComputedStyle(el);
                  const styles = {};
                  const props = %s;
                  for (const prop of props) {
                    styles[prop] = style[prop];
                  }
                  return {
                    element_type: el.dataset.slideElement || "",
                    role: el.dataset.role || null,
                    text: el.innerText.trim(),
                    x: rect.left,
                    y: rect.top,
                    width: rect.width,
                    height: rect.height,
                    styles,
                  };
                });
                return {
                  viewport_width: window.innerWidth,
                  viewport_height: window.innerHeight,
                  elements: payload,
                };
            }""" % json.dumps(CSS_PROPS)
        )

        browser.close()
    return RawSlideSpec.model_validate(result)

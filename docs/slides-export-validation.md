# Slides Export Validation Checklist

Use this checklist to manually validate the generated Google Slides presentation against the AI Studio export.

## Per-slide checks
- Open the original AI Studio slide URL from `slides_config.yaml`.
- Open the matching Google Slides page.
- Compare layout fidelity:
  - Card positions and sizes align with the source.
  - Headings, body text, and metrics match in font size and color.
  - Rounded corners, borders, and shadows resemble the original cards.
- Confirm all headings and key body text are editable in Google Slides.
- Verify no critical elements (cards, metrics, icons) are missing.

## Known limitations
- Complex gradients, animations, or interactive effects may not transfer.
- Icon images currently use placeholders; map roles to URLs as needed.
- Minor spacing differences may occur due to font rendering differences.

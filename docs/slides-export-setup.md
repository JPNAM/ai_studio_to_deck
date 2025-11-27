# Slides Export Setup Guide

Follow these steps before running the AI Studio to Google Slides pipeline.

## Google Cloud setup
- Enable the **Google Slides API** and **Google Drive API** in your Google Cloud project.
- Create OAuth client credentials or a **service account** with access to Slides/Drive.
- Download the JSON credentials file.
- Set an environment variable pointing to the credentials file:
  - `GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json` **or**
  - `GOOGLE_CREDENTIALS_PATH=/path/to/credentials.json`

## Local environment
- Install Node dependencies for the AI Studio export:
  - `cd deck_output && npm install`
- Ensure Playwright browsers are installed in the Python environment:
  - `python -m playwright install` (or `npx playwright install`)
- Confirm required Python packages are installed (see `requirements.txt`).

## Running the pipeline
- From the repo root, run:
  - `python -m app.integrations.main --command generate-deck`
- The pipeline starts the dev server, captures slides, and writes a Google Slides presentation. Watch the console output for the presentation link.

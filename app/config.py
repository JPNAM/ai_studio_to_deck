import os
from dataclasses import dataclass
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()


@dataclass
class Settings:
    APP_NAME: str = os.getenv("APP_NAME", "Template App")
    APP_VERSION: str = os.getenv("APP_VERSION", "0.1.0")
    DEBUG: bool = os.getenv("DEBUG", "true").lower() == "true"

    EXTERNAL_API_BASE_URL: str | None = os.getenv("EXTERNAL_API_BASE_URL")
    EXTERNAL_API_KEY: str | None = os.getenv("EXTERNAL_API_KEY")

    DECK_SOURCE_DIR: Path = Path(os.getenv("DECK_SOURCE_DIR", Path(__file__).resolve().parent.parent / "deck_output"))
    DECK_DEV_PORT: int = int(os.getenv("DECK_DEV_PORT", 4173))
    DECK_DEV_HOST: str = os.getenv("DECK_DEV_HOST", "127.0.0.1")
    SLIDES_CONFIG_PATH: Path = Path(os.getenv("SLIDES_CONFIG_PATH", DECK_SOURCE_DIR / "slides_config.yaml"))
    PRESENTATION_TITLE: str = os.getenv("PRESENTATION_TITLE", "AI Studio Export Deck")
    GOOGLE_CREDENTIALS_PATH: str | None = os.getenv("GOOGLE_CREDENTIALS_PATH")

    SLIDE_WIDTH_PT: float = 720.0
    SLIDE_HEIGHT_PT: float = 405.0

    @property
    def DECK_BASE_URL(self) -> str:  # noqa: N802
        return f"http://{self.DECK_DEV_HOST}:{self.DECK_DEV_PORT}"


settings = Settings()

DECK_SOURCE_DIR = settings.DECK_SOURCE_DIR
DECK_DEV_PORT = settings.DECK_DEV_PORT
DECK_DEV_HOST = settings.DECK_DEV_HOST
SLIDES_CONFIG_PATH = settings.SLIDES_CONFIG_PATH
PRESENTATION_TITLE = settings.PRESENTATION_TITLE
GOOGLE_CREDENTIALS_PATH = settings.GOOGLE_CREDENTIALS_PATH
DECK_BASE_URL = settings.DECK_BASE_URL
SLIDE_WIDTH_PT = settings.SLIDE_WIDTH_PT
SLIDE_HEIGHT_PT = settings.SLIDE_HEIGHT_PT

"""CLI entrypoint for integrations and pipelines."""
from __future__ import annotations

import argparse

from app.pipelines.ai_studio_to_deck import run_ai_studio_to_deck


def main() -> None:
    parser = argparse.ArgumentParser(description="Integration entrypoints")
    parser.add_argument(
        "--command",
        choices=["generate-deck"],
        required=True,
        help="Pipeline command to run",
    )
    args = parser.parse_args()

    if args.command == "generate-deck":
        run_ai_studio_to_deck()


if __name__ == "__main__":
    main()

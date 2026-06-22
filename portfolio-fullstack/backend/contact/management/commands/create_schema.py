"""
Management command: create_schema

Creates the Postgres schema specified by the DB_SCHEMA environment
variable, if it doesn't already exist. Safe to run every deploy.

Usage:
    python manage.py create_schema
"""

import os
from django.core.management.base import BaseCommand
from django.db import connection


class Command(BaseCommand):
    help = "Creates the DB_SCHEMA Postgres schema if it doesn't already exist."

    def handle(self, *args, **options):
        schema = os.environ.get("DB_SCHEMA")

        if not schema:
            self.stdout.write(
                self.style.WARNING(
                    "DB_SCHEMA not set — skipping schema creation "
                    "(using default 'public' schema)."
                )
            )
            return

        with connection.cursor() as cursor:
            cursor.execute(f'CREATE SCHEMA IF NOT EXISTS "{schema}";')

        self.stdout.write(
            self.style.SUCCESS(f"Schema '{schema}' is ready.")
        )
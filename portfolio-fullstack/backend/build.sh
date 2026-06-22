#!/usr/bin/env bash
# Render build script — runs automatically on every deploy.
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input

# Create the isolated schema (no-op if it already exists or if
# DB_SCHEMA isn't set) — must run BEFORE migrate.
python manage.py create_schema

python manage.py migrate
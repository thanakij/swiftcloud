#!/bin/bash
set -euo pipefail

DB_HOST=${DB_HOST:-localhost}
DB_USER=${DB_USER}
DB_PASS=${DB_PASS}
DB_NAME=${DB_NAME}

export DATABASE_URL=postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/${DB_NAME}

npx drizzle-kit migrate

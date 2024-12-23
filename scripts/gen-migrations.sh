#!/bin/bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Error: Missing required argument."
  echo "Usage: $0 <migration's name>"
  exit 1
fi

npx drizzle-kit generate --name="$1"

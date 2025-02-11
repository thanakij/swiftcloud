#!/bin/bash
set -euo pipefail

docker compose exec -it server bun run load:autocannon

# Pre-requisite installed softwares
  - Bun
  - Docker

# 1. Set up .env and .dev.vars files
```
cp template.env .dev.vars
cp template.env .env
```

# 2. Start Docker for Postgres
```
docker compose up -d
```

# 3. Run migration scripts
```
./scripts/run-migrations.sh
```

# 4. Install dependencies
```
bun install
```

# 5. Start API app
```
bun run dev
```

# 6. Visit http://localhost:8787/docs

# 7. Test API app
```
bun run test
```

# 8. Discussions
- TypeScript, Hono, Drizzle, PostgreSQL
- OpenAPI (Swagger)
- DB table is well designed
- DB is seeded with data from spreadsheet
- Support flexible filter, search, sort and pagination
- Join whenever makes sense, otherwise avoid the join and deal with N+1 issue with query for all associated records at once
- A simple test on GET /ranking using vitest is added
- Application logic is decoupled from the framework

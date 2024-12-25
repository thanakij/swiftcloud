# Pre-requisite installed softwares
  - Bun
  - Docker

# 1. Set up .env
```
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

# 6. Visit http://localhost:3000/docs

# 7. Test API app
```
bun run test
```

# 8. Discussions
- TypeScript, Hono, Drizzle, PostgreSQL
- OpenAPI (Swagger), Zod
- DB structure is well designed
- DB is seeded with initial data
- Support flexible filter, search, sort and pagination
- Join only whenever it makes sense, otherwise avoid the join especially on big tables
- Deal with N+1 issue by querying for all associated records at once
- A simple test on GET /ranking using vitest is provided
- Application logic is decoupled from the framework (ie, didn't that we are using Hono)

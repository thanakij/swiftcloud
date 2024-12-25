# Pre-requisite installed softwares
  - Bun
  - Docker

# `development` mode

## Step 1. Set up .env
```console
cp template.env .env
```
If set `DEBUG=1`, then the logs will print the SQL statements

## Step 2. Install dependencies
```console
bun install
```

## Step 3. Start Docker containers for Postgres
```console
docker compose up -d db adminer
```

## Step 4. Run migration scripts
```console
./scripts/run-migrations.sh
```

## Step 5. Start API app
```console
bun run dev
```

## Step 6. Visit API documentation
- http://localhost:3000/docs

## Step 7. Testing
```console
bun run test
```

## Step 8. Visit Adminer console
- http://localhost:8080

## Step 9. Generate a migration file
After making some changes to **src/db/schemas.ts**, you can generate a migration file via
```console
./scripts/gen-migrations.sh <file-name>
```

# `production` mode


## Step 1. Set up .env
```console
cp template.env .env
```

## Step 2. Install dependencies
```console
bun install
```

## Step 3. Start Docker containers
```console
docker compose up -d --build
```

## Step 4. Run migration scripts
```console
./scripts/run-migrations.sh
```

## Step 5. Visit API Documentation
- http://localhost:3000/docs

# Discussions
- Bun, TypeScript, Hono, Drizzle, PostgreSQL
- OpenAPI (Swagger), Zod for schema validations
- DB structure is well designed
- DB is seeded with initial data
- Support flexible filter, search, sort and pagination
- Join only whenever it makes sense, otherwise avoid the join especially on big tables
- Deal with N+1 issue by querying for all associated records at once
- A simple test on **GET /ranking** using vitest is provided
- Application logic is decoupled from the framework (ie, didn't that we are using Hono)

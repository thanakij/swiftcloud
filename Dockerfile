# syntax=docker/dockerfile:1

FROM oven/bun:1.2.4-slim AS base

FROM base AS deps
ENV NODE_ENV=development
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=bun.lockb,target=bun.lockkb \
    --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

FROM base AS build
ENV NODE_ENV=production
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=bun.lockb,target=bun.lockkb \
    --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --production

FROM base AS production
WORKDIR /app
USER bun
COPY --chown=bun:bun --from=build /home/bun/app/node_modules node_modules
COPY tsconfig.json package.json .
COPY src src
ENV NODE_ENV=production
CMD ["bun", "src/index.ts"]

FROM base AS development
WORKDIR /app
USER bun
COPY --chown=bun:bun --from=deps /home/bun/app/node_modules node_modules
COPY drizzle.config.ts eslint.config.mjs tsconfig.json package.json .
COPY src src
ENV NODE_ENV=development
RUN bun run lint
RUN bun run type-check
CMD ["bun", "--watch", "src/index.ts"]

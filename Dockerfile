# syntax=docker/dockerfile:1

ARG BUN_VERSION=1.1.42
FROM oven/bun:${BUN_VERSION}-slim AS base

COPY package.json bun.lockb .
RUN bun install --frozen-lockfile
COPY eslint.config.mjs package.json tsconfig.json .
COPY scripts scripts
COPY src src
RUN bun run lint
RUN bun run type-check
CMD ["bun", "src/index.ts"]

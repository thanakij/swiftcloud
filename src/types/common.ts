import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import type { Redis } from 'ioredis'
import type { Sql } from 'postgres'
import type { z } from 'zod'

import type { Errors, Null, ZDate } from '@/schemas/common'

export type Errors = z.infer<typeof Errors>
export type Null = z.infer<typeof Null>
export type ZDate = z.infer<typeof ZDate>

export type DB = PostgresJsDatabase

export type PgClient = Sql

export type Variables = {
  db: PgClient | null
  cache: Redis | null
}
export interface Env {
  [key: string]: string | undefined;
}

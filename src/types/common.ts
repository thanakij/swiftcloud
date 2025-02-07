import type { NodePgDatabase } from 'drizzle-orm/node-postgres'
import type { Redis } from 'ioredis'
import type { Pool } from 'pg'
import type { z } from 'zod'

import type { Errors, Null, ZDate } from '@/schemas/common'

export type Errors = z.infer<typeof Errors>
export type Null = z.infer<typeof Null>
export type ZDate = z.infer<typeof ZDate>

export type DB = NodePgDatabase

export type PgClient = Pool

export type Variables = {
  db: PgClient | null
  cache: Redis | null
}
export interface Env {
  [key: string]: string | undefined;
}

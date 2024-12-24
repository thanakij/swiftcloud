import type { Context } from 'hono'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'

import type { Id, Writer } from '@/types/writers'

import { DbWriterRepository } from '@/repositories/db/writers'
import { MockWriterRepository } from '@/repositories/mock/writers'

export interface WriterRepository {
  get: (id: Id) => Promise<Writer | null>
}

export class WriterFactory {
  public static newInstance(c: Context): WriterRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env<{
      DB_HOST: string,
      DB_USER: string,
      DB_PASS: string,
      DB_NAME: string,
      DEBUG: string,
    }>(c)
    // mock
    if (!DB_PASS) return new MockWriterRepository()
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG) })
    return new DbWriterRepository(db)
  }
}

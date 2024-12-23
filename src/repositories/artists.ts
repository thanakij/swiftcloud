import type { Context } from 'hono'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'

import type { Id, Artist } from '@/types/artists'

import { DbArtistRepository } from '@/repositories/db/artists'
import { MockArtistRepository } from '@/repositories/mock/artists'

export interface ArtistRepository {
  get: (id: Id) => Promise<Artist | null>
}

export class ArtistFactory {
  public static newInstance(c: Context): ArtistRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env<{
      DB_HOST: string,
      DB_USER: string,
      DB_PASS: string,
      DB_NAME: string,
      DEBUG: string,
    }>(c)
    if (!DB_PASS) return new MockArtistRepository()
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG) })
    return new DbArtistRepository(db)
  }
}

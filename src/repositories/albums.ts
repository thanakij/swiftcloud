import type { Context } from 'hono'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'

import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/types/albums'

import { DbAlbumRepository } from '@/repositories/db/albums'
import { MockAlbumRepository } from '@/repositories/mock/albums'

export interface AlbumRepository {
  list: (param: ListAlbumsParam) => Promise<ListAlbums>
  get: (id: Id) => Promise<Album | null>
  create: (input: AlbumIn) => Promise<Id>
}

export class AlbumFactory {
  public static newInstance(c: Context): AlbumRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env<{
      DB_HOST: string,
      DB_USER: string,
      DB_PASS: string,
      DB_NAME: string,
      DEBUG: string,
    }>(c)
    if (!DB_PASS) return new MockAlbumRepository()
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG) })
    return new DbAlbumRepository(db)
  }
}

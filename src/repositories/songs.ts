import type { Context } from 'hono'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'

import type { ListSongsParam, ListSongs, Id, Song, SongIn } from '@/types/songs'

import { DbSongRepository } from '@/repositories/db/songs'
import { MockAlbumRepository } from '@/repositories/mock/albums'
import { MockArtistRepository } from '@/repositories/mock/artists'
import { MockSongRepository } from '@/repositories/mock/songs'
import { MockWriterRepository } from '@/repositories/mock/writers'

export interface SongRepository {
  list: (param: ListSongsParam) => Promise<ListSongs>
  get: (id: Id) => Promise<Song | null>
  create: (input: SongIn) => Promise<Id>
}

export class SongFactory {
  public static newInstance(c: Context): SongRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env<{
      DB_HOST: string,
      DB_USER: string,
      DB_PASS: string,
      DB_NAME: string,
      DEBUG: string,
    }>(c)
    // mock
    if (!DB_PASS) {
      const albumRepository = new MockAlbumRepository()
      const artistRepository = new MockArtistRepository()
      const writerRepository = new MockWriterRepository()
      return new MockSongRepository(albumRepository, artistRepository, writerRepository)
    }
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG) })
    return new DbSongRepository(db)
  }
}

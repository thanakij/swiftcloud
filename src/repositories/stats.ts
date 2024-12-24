import type { Context } from 'hono'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'

import type { RankingParam, Ranking } from '@/types/ranking'

import { DbStatRepository } from '@/repositories/db/stats'
import { MockAlbumRepository } from '@/repositories/mock/albums'
import { MockArtistRepository } from '@/repositories/mock/artists'
import { MockSongRepository } from '@/repositories/mock/songs'
import { MockStatRepository } from '@/repositories/mock/stats'
import { MockWriterRepository } from '@/repositories/mock/writers'

export interface StatRepository {
  rank: (param: RankingParam) => Promise<Ranking>
}

export class StatRepositoryFactory {
  public static newInstance(c: Context): StatRepository {
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
      const songRepository = new MockSongRepository(albumRepository, artistRepository, writerRepository)
      return new MockStatRepository(songRepository, albumRepository)
    }
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG) })
    return new DbStatRepository(db)
  }
}

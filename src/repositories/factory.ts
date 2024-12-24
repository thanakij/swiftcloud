import { drizzle } from 'drizzle-orm/node-postgres'

import type { AlbumRepository } from '@/repositories/albums'
import type { ArtistRepository } from '@/repositories/artists'
import type { SongRepository } from '@/repositories/songs'
import type { StatRepository } from '@/repositories/stats'
import type { WriterRepository } from '@/repositories/writers'
import type { Env } from '@/types/common'

import { DbAlbumRepository } from '@/repositories/db/albums'
import { DbArtistRepository } from '@/repositories/db/artists'
import { DbSongRepository } from '@/repositories/db/songs'
import { DbStatRepository } from '@/repositories/db/stats'
import { DbWriterRepository } from '@/repositories/db/writers'
import { MockAlbumRepository } from '@/repositories/mock/albums'
import { MockArtistRepository } from '@/repositories/mock/artists'
import { MockSongRepository } from '@/repositories/mock/songs'
import { MockStatRepository } from '@/repositories/mock/stats'
import { MockWriterRepository } from '@/repositories/mock/writers'

export class RepositoryFactory {
  public static newArtistRepository(env: Env): ArtistRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env
    // mock
    if (!DB_PASS) return new MockArtistRepository()
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG ?? '') })
    return new DbArtistRepository(db)
  }

  public static newWriterRepository(env: Env): WriterRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env
    // mock
    if (!DB_PASS) return new MockWriterRepository()
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG ?? '') })
    return new DbWriterRepository(db)
  }

  public static newAlbumRepository(env: Env): AlbumRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env
    // mock
    if (!DB_PASS) return new MockAlbumRepository()
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG ?? '') })
    return new DbAlbumRepository(db)
  }

  public static newSongRepository(env: Env): SongRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env
    if (!DB_PASS) {
      const albumRepository = new MockAlbumRepository()
      const artistRepository = new MockArtistRepository()
      const writerRepository = new MockWriterRepository()
      return new MockSongRepository(albumRepository, artistRepository, writerRepository)
    }
    // database
    const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG ?? '') })
    return new DbSongRepository(db)
  }

  public static newStatRepository(env: Env): StatRepository {
    const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DEBUG } = env
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
    const db = drizzle({ connection: DATABASE_URL, logger: ['true', '1'].includes(DEBUG ?? '') })
    return new DbStatRepository(db)
  }
}

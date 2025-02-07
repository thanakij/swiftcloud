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

function getDB(env: Env) {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DEBUG } = env
  const URL = `postgresql://${DB_USER ?? 'postgres'}:${DB_PASS}@${DB_HOST ?? 'db'}:${DB_PORT ?? 5432}/${DB_NAME}`
  return drizzle({ connection: URL, logger: ['true', '1'].includes(DEBUG ?? '') })
}

export class RepositoryFactory {
  public static newArtistRepository(env: Env): ArtistRepository {
    return env.DB_PASS && env.DB_NAME ? new DbArtistRepository(getDB(env)) : new MockArtistRepository
  }

  public static newWriterRepository(env: Env): WriterRepository {
    return env.DB_PASS && env.DB_NAME ? new DbWriterRepository(getDB(env)) : new MockWriterRepository
  }

  public static newAlbumRepository(env: Env): AlbumRepository {
    return env.DB_PASS && env.DB_NAME ? new DbAlbumRepository(getDB(env)) : new MockAlbumRepository
  }

  public static newSongRepository(env: Env): SongRepository {
    if (env.DB_PASS && env.DB_NAME) {
      return new DbSongRepository(getDB(env))
    }
    const albumRepository = new MockAlbumRepository()
    const artistRepository = new MockArtistRepository()
    const writerRepository = new MockWriterRepository()
    return new MockSongRepository(albumRepository, artistRepository, writerRepository)
  }

  public static newStatRepository(env: Env): StatRepository {
    if (env.DB_PASS && env.DB_NAME) {
      return new DbStatRepository(getDB(env))
    }
    const albumRepository = new MockAlbumRepository()
    const artistRepository = new MockArtistRepository()
    const writerRepository = new MockWriterRepository()
    const songRepository = new MockSongRepository(albumRepository, artistRepository, writerRepository)
    return new MockStatRepository(songRepository, albumRepository)
  }
}

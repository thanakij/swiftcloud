import type { AlbumRepository } from '@/repositories/albums'
import type { ArtistRepository } from '@/repositories/artists'
import type { SongRepository } from '@/repositories/songs'
import type { StatRepository } from '@/repositories/stats'
import type { WriterRepository } from '@/repositories/writers'
import type { DB } from '@/types/common'

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
  public static newArtistRepository(db: DB | null): ArtistRepository {
    return db ? new DbArtistRepository(db) : new MockArtistRepository()
  }

  public static newWriterRepository(db: DB | null): WriterRepository {
    return db ? new DbWriterRepository(db) : new MockWriterRepository()
  }

  public static newAlbumRepository(db: DB | null): AlbumRepository {
    return db ? new DbAlbumRepository(db) : new MockAlbumRepository()
  }

  public static newSongRepository(db: DB | null): SongRepository {
    if (db) {
      return new DbSongRepository(db)
    }
    const albumRepository = new MockAlbumRepository()
    const artistRepository = new MockArtistRepository()
    const writerRepository = new MockWriterRepository()
    return new MockSongRepository(albumRepository, artistRepository, writerRepository)
  }

  public static newStatRepository(db: DB | null): StatRepository {
    if (db) {
      return new DbStatRepository(db)
    }
    const albumRepository = new MockAlbumRepository()
    const artistRepository = new MockArtistRepository()
    const writerRepository = new MockWriterRepository()
    const songRepository = new MockSongRepository(albumRepository, artistRepository, writerRepository)
    return new MockStatRepository(songRepository, albumRepository)
  }
}

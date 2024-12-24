import type { AlbumRepository } from '@/repositories/albums'
import type { SongRepository } from '@/repositories/songs'
import type { StatRepository } from '@/repositories/stats'
import type { RankingParam, Ranking } from '@/types/ranking'

export class MockStatRepository implements StatRepository {
  private songRepository: SongRepository
  private albumRepository: AlbumRepository

  public constructor(
    songRepository: SongRepository,
    albumRepository: AlbumRepository,
  ) {
    this.songRepository = songRepository
    this.albumRepository = albumRepository
  }

  async rank(param: RankingParam): Promise<Ranking> {
    throw new Error('Not implemented')
  }
}

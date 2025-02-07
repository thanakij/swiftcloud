import type { SongRepository } from '@/repositories/songs'
import type { ListSongsParam, ListSongs, Id, Song, SongIn } from '@/types/songs'

export class SongService {
  private songRepository: SongRepository

  public constructor(songRepository: SongRepository) {
    this.songRepository = songRepository
  }

  async list(param: ListSongsParam): Promise<ListSongs> {
    return await this.songRepository.list(param)
  }

  async get(id: Id): Promise<Song | null> {
    return await this.songRepository.get(id)
  }

  async create(input: SongIn): Promise<Id> {
    return await this.songRepository.create(input)
  }
}

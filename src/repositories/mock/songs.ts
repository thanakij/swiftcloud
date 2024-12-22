import type { ArtistRepository } from '@/repositories/artists'
import type { SongRepository } from '@/repositories/songs'
import type { WriterRepository } from '@/repositories/writers'
import type { ListSongsParams, ListSongs, Id, Song, SongIn } from '@/types/songs'

import { DATA } from '@/data/mock'

export class MockSongRepository implements SongRepository {
  private artistRepository: ArtistRepository
  private writerRepository: WriterRepository

  public constructor(artistRepository: ArtistRepository, writerRepository: WriterRepository) {
    this.artistRepository = artistRepository
    this.writerRepository = writerRepository
  }

  async list(param: ListSongsParams): Promise<ListSongs> {
    const data = DATA.slice(param.offset, param.limit)
    return { meta: { total: DATA.length, count: data.length }, data }
  }

  async get(id: Id): Promise<Song | null> {
    const founds = DATA.filter((each) => each.id === id)
    return founds ? founds[0] : null
  }

  async create(input: SongIn): Promise<Id> {
    const { name, artist_id, writers_id, album, year } = input
    const artist = await this.artistRepository.get(artist_id)
    if (!artist) throw new Error('Artist not found')
    let writers
    if (writers_id) {
      writers = []
      for (const [i, id] of writers_id) {
        const writer = await this.writerRepository.get(id)
        if (!writer) throw new Error(`Writer[${i}] not found`)
        writers.push(writer)
      }
    }
    const song: Song = {
      id: crypto.randomUUID(),
      name,
      artist,
      writers,
      album,
      year,
    }
    DATA.push(song)
    return song.id
  }
}

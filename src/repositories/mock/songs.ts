import type { AlbumRepository } from '@/repositories/albums'
import type { ArtistRepository } from '@/repositories/artists'
import type { SongRepository } from '@/repositories/songs'
import type { WriterRepository } from '@/repositories/writers'
import type { ListSongsParam, ListSongs, Id, Song, SongIn } from '@/types/songs'
import type { Writer } from '@/types/writers'

import { SONGS } from '@/data/mock'

export class MockSongRepository implements SongRepository {
  private albumRepository: AlbumRepository
  private artistRepository: ArtistRepository
  private writerRepository: WriterRepository

  public constructor(
    albumRepository: AlbumRepository,
    artistRepository: ArtistRepository,
    writerRepository: WriterRepository,
  ) {
    this.albumRepository = albumRepository
    this.artistRepository = artistRepository
    this.writerRepository = writerRepository
  }

  async list(param: ListSongsParam): Promise<ListSongs> {
    const data = SONGS.slice(param.offset, param.limit)
    return { meta: { total: SONGS.length, count: data.length }, data }
  }

  async get(id: Id): Promise<Song | null> {
    const founds = SONGS.filter((each) => each.id === id)
    return founds.length > 0 ? founds[0] : null
  }

  async create(input: SongIn): Promise<Id> {
    const { name, artist_id, writers_id, album_id, year } = input
    let album = null
    if (album_id !== null) {
      album = await this.albumRepository.get(album_id)
      if (!album) throw new Error('Album not found')
    }
    const artist = await this.artistRepository.get(artist_id)
    if (!artist) throw new Error('Artist not found')
    const writers: Writer[] = []
    if (writers_id) {
      for (const [i, id] of writers_id.entries()) {
        const writer = await this.writerRepository.get(id)
        if (!writer) throw new Error(`Writer[${i}] not found`)
        writers.push(writer)
      }
    }
    const song: Song = {
      id: crypto.randomUUID() as Id,
      name,
      artist,
      writers,
      album,
      year,
    }
    SONGS.push(song)
    return song.id
  }
}

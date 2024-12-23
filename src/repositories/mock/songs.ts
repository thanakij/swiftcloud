import type { AlbumRepository } from '@/repositories/albums'
import type { ArtistRepository } from '@/repositories/artists'
import type { SongRepository } from '@/repositories/songs'
import type { WriterRepository } from '@/repositories/writers'
import type { ListSongsParam, ListSongs, ArtistWithRole, Id, Song, SongIn } from '@/types/songs'
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
    const { name, artists_id, artists_role, writers_id, album_id, year } = input
    // artists
    const artists: ArtistWithRole[] = []
    if (artists_id) {
      if (!artists_role || artists_role.length !== artists_id.length) {
        throw new Error('The size of "artists_id" and "artists_role" have to match')
      }
      for (const [i, id] of artists_id.entries()) {
        const artist = await this.artistRepository.get(id)
        if (!artist) throw new Error(`Artist[${i}] not found`)
        artists.push({ ...artist, role: artists_role[i] })
      }
    }
    if (artists.length <= 0) throw new Error('At least one artist is required')
    // writers
    const writers: Writer[] = []
    if (writers_id) {
      for (const [i, id] of writers_id.entries()) {
        const writer = await this.writerRepository.get(id)
        if (!writer) throw new Error(`Writer[${i}] not found`)
        writers.push(writer)
      }
    }
    // album
    let album = null
    if (album_id !== null) {
      album = await this.albumRepository.get(album_id)
      if (!album) throw new Error('Album not found')
    }
    // save a new song
    const song: Song = {
      id: crypto.randomUUID() as Id,
      name,
      artists,
      writers,
      album,
      year,
    }
    SONGS.push(song)
    return song.id
  }
}

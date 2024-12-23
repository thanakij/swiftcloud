import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { count, eq, like } from 'drizzle-orm'

import type { AlbumRepository } from '@/repositories/albums'
import type { ArtistRepository } from '@/repositories/artists'
import type { SongRepository } from '@/repositories/songs'
import type { WriterRepository } from '@/repositories/writers'
import type { Album } from '@/types/albums'
import type { ListSongsParam, ListSongs, ArtistWithRole, Id, Song, SongIn } from '@/types/songs'
import type { Writer } from '@/types/writers'

import { songs } from '@/db/schemas'
import { getOrderBy } from '@/utils'

export class DbSongRepository implements SongRepository {
  private db: NodePgDatabase
  private albumRepository: AlbumRepository
  private artistRepository: ArtistRepository
  private writerRepository: WriterRepository

  public constructor(
    db: NodePgDatabase,
    albumRepository: AlbumRepository,
    artistRepository: ArtistRepository,
    writerRepository: WriterRepository,
  ) {
    this.db = db
    this.albumRepository = albumRepository
    this.artistRepository = artistRepository
    this.writerRepository = writerRepository
  }

  async list(param: ListSongsParam): Promise<ListSongs> {
    const filters = param.q ? like(songs.name, `%${param.q}%`) : undefined
    // @ts-expect-error not typed well
    const orderByFields = getOrderBy(songs, param.sort ?? 'name')
    const results = await this.db
      .select()
      .from(songs)
      .where(filters)
      .orderBy(...orderByFields) // multiple fields
      .limit(param.limit)
      .offset(param.offset)
    console.log(results)
    const data: Song[] = results.map((each) => {
      const artists: ArtistWithRole[] = []
      const writers: Writer[] = []
      const album: Album | null = null
      return { id: each.uuid as Id, name: each.name, artists, writers, album, year: each.released_year }
    })
    const result = await this.db.select({ total: count() }).from(songs).where(filters)
    const total = result[0].total
    return { meta: { total, count: data.length }, data }
  }

  async get(id: Id): Promise<Song | null> {
    const results = await this.db
      .select()
      .from(songs)
      .where(eq(songs.uuid, id))
      .limit(1)
    const data: Song[] = results.map((each) => {
      const artists: ArtistWithRole[] = []
      const writers: Writer[] = []
      const album: Album | null = null
      return { id: each.uuid as Id, name: each.name, artists, writers, album, year: each.released_year }
    })
    return data.length > 0 ? data[0] : null
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
    throw new Error('Not implemented')
  }
}

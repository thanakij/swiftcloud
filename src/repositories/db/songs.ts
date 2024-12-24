import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import type { ArtistDB, WriterDB, SongDB, NewSongArtistsDB, NewSongWritersDB } from '@/db/types'
import type { SongRepository } from '@/repositories/songs'
import type { ListSongsParam, ListSongs, Id, Song, SongIn } from '@/types/songs'

import {
  countSongs,
  listSongs,
  getSongByUuid,
  getSongArtistsByIds,
  getSongWritersByIds,
  insertSong,
  insertSongArtists,
  insertSongWriters,
} from '@/db/crud'
import { getAlbum, getAlbumByUuid, getAlbumsByIds, getArtistByUuid, getWriterByUuid } from '@/db/crud'
import { getAlbumMap, mapSong, mapNewSongDB, getSongArtistsMap, getSongWritersMap } from '@/repositories/db/utils'

export class DbSongRepository implements SongRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async list(param: ListSongsParam): Promise<ListSongs> {
    const records = await listSongs(this.db, param.q, param.album_id, param.year, param.offset, param.limit, param.sort)
    const songs_id = records.map((each) => each.id)
    // artists
    const songArtists = await getSongArtistsByIds(this.db, songs_id) // avoid N+1 query
    const songArtistsMap = getSongArtistsMap(songArtists)
    // writers
    const songWriters = await getSongWritersByIds(this.db, songs_id) // avoid N+1 query
    const songWritersMap = getSongWritersMap(songWriters)
    // albums
    const albums_id = records.map((each) => each.album_id).filter((each) => each !== null)
    const albums = await getAlbumsByIds(this.db, albums_id) // avoid N+1 query
    const albumsMap = getAlbumMap(albums)
    // format
    const data = records.map((each) => {
      const artists = each.id in songArtistsMap ? songArtistsMap[each.id] : []
      const writers = each.id in songWritersMap ? songWritersMap[each.id] : []
      const album = each.album_id ? albumsMap[each.album_id] : null
      return mapSong(each, artists, writers, album)
    })
    const total = await countSongs(this.db, param.q, param.album_id, param.year)
    return { meta: { total, count: data.length }, data }
  }

  async get(id: Id): Promise<Song | null> {
    const record = await getSongByUuid(this.db, id)
    // artists
    const songArtists = await getSongArtistsByIds(this.db, record ? [record.id] : [])
    const songArtistsMap = getSongArtistsMap(songArtists)
    const artists = record && (record.id in songArtistsMap) ? songArtistsMap[record.id] : []
    // writers
    const songWriters = await getSongWritersByIds(this.db, record ? [record.id] : [])
    const songWritersMap = getSongWritersMap(songWriters)
    const writers = record && (record.id in songWritersMap) ? songWritersMap[record.id] : []
    // album
    const album = record && record.album_id ? await getAlbum(this.db, record.album_id) : null
    // format
    return record ? mapSong(record, artists, writers, album) : null
  }

  async create(input: SongIn): Promise<Id> {
    const { artists_id, artists_role, writers_id, album_id } = input
    // validation
    if (artists_id.length <= 0) throw new Error('At least one artist is required')
    if (artists_id.length !== artists_role.length) {
      throw new Error('The size of "artists_id" and "artists_role" have to match')
    }
    // artists
    const artists: ArtistDB[] = []
    for (const [i, uuid] of artists_id.entries()) {
      const artist = await getArtistByUuid(this.db, uuid)
      if (!artist) throw new Error(`Artist[${i}] not found`)
      artists.push(artist)
    }
    // writers
    const writers: WriterDB[] = []
    for (const [i, uuid] of writers_id.entries()) {
      const writer = await getWriterByUuid(this.db, uuid)
      if (!writer) throw new Error(`Writer[${i}] not found`)
      writers.push(writer)
    }
    // album
    const album = album_id ? await getAlbumByUuid(this.db, album_id) : null
    if (album_id && !album) throw new Error('Album not found')
    // insert with a database transaction
    const record: SongDB = await this.db.transaction(async (tx) => {
      // a new song
      const song = await insertSong(tx, mapNewSongDB(input, album))
      if (!song) throw new Error('Failed insertSong()')
      const song_id = song.id
      // song_artists
      const songArtists: NewSongArtistsDB[] = artists.map(
        (each, i) => ({ song_id, artist_id: each.id, role: artists_role[i], sort_order: i }),
      )
      await insertSongArtists(tx, songArtists)
      // song_writers
      const songWriters: NewSongWritersDB[] = writers.map(
        (each, i) => ({ song_id, writer_id: each.id, sort_order: i }),
      )
      await insertSongWriters(tx, songWriters)
      return song
    })
    // format
    return record.uuid as Id
  }
}

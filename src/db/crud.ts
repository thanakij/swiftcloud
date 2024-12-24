import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { and, count, eq, ilike, inArray } from 'drizzle-orm'

import type {
  ArtistDB,
  WriterDB,
  AlbumDB,
  NewAlbumDB,
  SongDB,
  NewSongDB,
  SongArtistsWithDataDB,
  SongWritersWithDataDB,
  NewSongArtistsDB,
  NewSongWritersDB,
} from '@/db/types'

import { artists, writers, albums, songs, songArtists, songWriters } from '@/db/schemas'
import { getOrderBy } from '@/utils'

export const MAX_LIMIT = 100

export async function getArtist(db: NodePgDatabase, id: number): Promise<ArtistDB | null> {
  const records = await db
    .select()
    .from(artists)
    .where(eq(artists.id, id))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function getArtistByUuid(db: NodePgDatabase, uuid: string): Promise<ArtistDB | null> {
  const records = await db
    .select()
    .from(artists)
    .where(eq(artists.uuid, uuid))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function getWriter(db: NodePgDatabase, id: number): Promise<WriterDB | null> {
  const records = await db
    .select()
    .from(artists)
    .where(eq(artists.id, id))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function getWriterByUuid(db: NodePgDatabase, uuid: string): Promise<WriterDB | null> {
  const records = await db
    .select()
    .from(writers)
    .where(eq(writers.uuid, uuid))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function countAlbums(db: NodePgDatabase, q: string | null): Promise<number> {
  const filters = q ? [ilike(albums.name, `%${q}%`)] : []
  const record = await db.select({ n: count() }).from(albums).where(and(...filters))
  return record[0].n
}

export async function listAlbums(
  db: NodePgDatabase, q: string | null, offset: number, limit: number, sort: string | null,
): Promise<AlbumDB[]> {
  const filters = q ? [ilike(albums.name, `%${q}%`)] : []
  // @ts-expect-error not typed well
  const sorting = getOrderBy(albums, sort ?? 'name')
  return await db
    .select()
    .from(albums)
    .where(and(...filters))
    .orderBy(...sorting)
    .limit(limit > MAX_LIMIT ? MAX_LIMIT : limit)
    .offset(offset)
}

export async function getAlbum(db: NodePgDatabase, id: number): Promise<AlbumDB | null> {
  const records = await db
    .select()
    .from(albums)
    .where(eq(albums.id, id))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function getAlbumByUuid(db: NodePgDatabase, uuid: string): Promise<AlbumDB | null> {
  const records = await db
    .select()
    .from(albums)
    .where(eq(albums.uuid, uuid))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function getAlbumsByIds(db: NodePgDatabase, ids: number[]): Promise<AlbumDB[]> {
  return await db
    .select()
    .from(albums)
    .where(inArray(albums.id, ids))
}

export async function insertAlbum(db: NodePgDatabase, obj: NewAlbumDB): Promise<AlbumDB | null> {
  const records = await db.insert(albums).values(obj).returning()
  return records.length > 0 ? records[0] : null
}

export async function countSongs(
  db: NodePgDatabase,
  q: string | null,
  album_uuid: string | null,
  year: number | null,
): Promise<number> {
  const filters = q ? [ilike(songs.name, `%${q}%`)] : []
  if (album_uuid) {
    const album = await getAlbumByUuid(db, album_uuid)
    if (!album) throw new Error('Album not found')
    filters.push(eq(songs.album_id, album.id))
  }
  if (year) filters.push(eq(songs.released_year, year))
  const record = await db.select({ n: count() }).from(songs).where(and(...filters))
  return record[0].n
}

export async function listSongs(
  db: NodePgDatabase,
  q: string | null,
  album_uuid: string | null,
  year: number | null,
  offset: number,
  limit: number,
  sort: string | null,
): Promise<SongDB[]> {
  const filters = q ? [ilike(songs.name, `%${q}%`)] : []
  if (album_uuid) {
    const album = await getAlbumByUuid(db, album_uuid)
    if (!album) throw new Error('Album not found')
    filters.push(eq(songs.album_id, album.id))
  }
  if (year) filters.push(eq(songs.released_year, year))
  // @ts-expect-error not typed well
  const sorting = getOrderBy(songs, sort ?? 'name')
  return await db
    .select()
    .from(songs)
    .where(and(...filters))
    .orderBy(...sorting)
    .limit(limit > MAX_LIMIT ? MAX_LIMIT : limit)
    .offset(offset)
}

export async function getSong(db: NodePgDatabase, id: number): Promise<SongDB | null> {
  const records = await db
    .select()
    .from(songs)
    .where(eq(songs.id, id))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function getSongByUuid(db: NodePgDatabase, uuid: string): Promise<SongDB | null> {
  const records = await db
    .select()
    .from(songs)
    .where(eq(songs.uuid, uuid))
    .limit(1)
  return records.length > 0 ? records[0] : null
}

export async function insertSong(db: NodePgDatabase, obj: NewSongDB): Promise<SongDB | null> {
  const records = await db.insert(songs).values(obj).returning()
  return records.length > 0 ? records[0] : null
}

export async function getSongArtistsByIds(db: NodePgDatabase, ids: number[]): Promise<SongArtistsWithDataDB[]> {
  return await db
    .select()
    .from(songArtists)
    .innerJoin(artists, eq(songArtists.artist_id, artists.id))
    .where(inArray(songArtists.song_id, ids))
    .orderBy(songArtists.sort_order)
}

export async function getSongWritersByIds(db: NodePgDatabase, ids: number[]): Promise<SongWritersWithDataDB[]> {
  return await db
    .select()
    .from(songWriters)
    .innerJoin(writers, eq(songWriters.writer_id, writers.id))
    .where(inArray(songWriters.song_id, ids))
    .orderBy(songWriters.sort_order)
}

export async function insertSongArtists(db: NodePgDatabase, obj: NewSongArtistsDB[]): Promise<void> {
  await db.insert(songArtists).values(obj)
}

export async function insertSongWriters(db: NodePgDatabase, obj: NewSongWritersDB[]): Promise<void> {
  await db.insert(songWriters).values(obj)
}

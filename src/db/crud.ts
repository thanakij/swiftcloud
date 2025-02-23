import { sql, and, count, sum, eq, ilike, inArray, isNotNull } from 'drizzle-orm'
import { getTableColumns } from 'drizzle-orm'
import postgres from 'postgres'

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
  RankingDB,
} from '@/db/types'
import type { DB, Env, PgClient } from '@/types/common'

import { artists, writers, albums, songs, songArtists, songWriters, stats } from '@/db/schemas'
import { getOrderBy } from '@/utils'

export const MAX_LIMIT = 100

export function getDB(env: Env): PgClient | null {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = env
  if (!DB_PASS || !DB_NAME) return null
  const URL = `postgresql://${DB_USER ?? 'postgres'}:${DB_PASS}@${DB_HOST ?? 'db'}:${DB_PORT ?? 5432}/${DB_NAME}`
  return postgres(URL)
}

export async function getArtist(db: DB, id: number): Promise<ArtistDB | null> {
  const records = await db
    .select()
    .from(artists)
    .where(eq(artists.id, id))
    .limit(1)
  return records[0] ?? null
}

export async function getArtistByUuid(db: DB, uuid: string): Promise<ArtistDB | null> {
  const records = await db
    .select()
    .from(artists)
    .where(eq(artists.uuid, uuid))
    .limit(1)
  return records[0] ?? null
}

export async function getWriter(db: DB, id: number): Promise<WriterDB | null> {
  const records = await db
    .select()
    .from(artists)
    .where(eq(artists.id, id))
    .limit(1)
  return records[0] ?? null
}

export async function getWriterByUuid(db: DB, uuid: string): Promise<WriterDB | null> {
  const records = await db
    .select()
    .from(writers)
    .where(eq(writers.uuid, uuid))
    .limit(1)
  return records[0] ?? null
}

export async function countAlbums(db: DB, q: string | null): Promise<number> {
  const filters = q ? [ilike(albums.name, `%${q}%`)] : []
  const records = await db.select({ n: count() }).from(albums).where(and(...filters))
  return records[0]?.n ?? 0
}

export async function listAlbums(
  db: DB, q: string | null, offset: number, limit: number, sort: string | null,
): Promise<AlbumDB[]> {
  const filters = q ? [ilike(albums.name, `%${q}%`)] : []
  const sorting = getOrderBy(getTableColumns(albums), sort ?? 'name')
  return await db
    .select()
    .from(albums)
    .where(and(...filters))
    .orderBy(...sorting)
    .limit(limit > MAX_LIMIT ? MAX_LIMIT : limit)
    .offset(offset)
}

export async function getAlbum(db: DB, id: number): Promise<AlbumDB | null> {
  const records = await db
    .select()
    .from(albums)
    .where(eq(albums.id, id))
    .limit(1)
  return records[0] ?? null
}

export async function getAlbumByUuid(db: DB, uuid: string): Promise<AlbumDB | null> {
  const records = await db
    .select()
    .from(albums)
    .where(eq(albums.uuid, uuid))
    .limit(1)
  return records[0] ?? null
}

export async function getAlbumsByIds(db: DB, ids: number[]): Promise<AlbumDB[]> {
  return await db
    .select()
    .from(albums)
    .where(inArray(albums.id, ids))
}

export async function insertAlbum(db: DB, obj: NewAlbumDB): Promise<AlbumDB | null> {
  const records = await db.insert(albums).values(obj).returning()
  return records[0] ?? null
}

export async function countSongs(
  db: DB,
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
  const records = await db.select({ n: count() }).from(songs).where(and(...filters))
  return records[0]?.n ?? 0
}

export async function listSongs(
  db: DB,
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
  const sorting = getOrderBy(getTableColumns(songs), sort ?? 'name', { year: 'released_year', plays: 'total_plays' })
  return await db
    .select()
    .from(songs)
    .where(and(...filters))
    .orderBy(...sorting)
    .limit(limit > MAX_LIMIT ? MAX_LIMIT : limit)
    .offset(offset)
}

export async function getSong(db: DB, id: number): Promise<SongDB | null> {
  const records = await db
    .select()
    .from(songs)
    .where(eq(songs.id, id))
    .limit(1)
  return records[0] ?? null
}

export async function getSongByUuid(db: DB, uuid: string): Promise<SongDB | null> {
  const records = await db
    .select()
    .from(songs)
    .where(eq(songs.uuid, uuid))
    .limit(1)
  return records[0] ?? null
}

export async function getSongsByIds(db: DB, ids: number[]): Promise<SongDB[]> {
  return await db
    .select()
    .from(songs)
    .where(inArray(songs.id, ids))
}

export async function insertSong(db: DB, obj: NewSongDB): Promise<SongDB | null> {
  const records = await db.insert(songs).values(obj).returning()
  return records[0] ?? null
}

export async function getSongArtistsByIds(db: DB, ids: number[]): Promise<SongArtistsWithDataDB[]> {
  return await db
    .select()
    .from(songArtists)
    .innerJoin(artists, eq(songArtists.artist_id, artists.id))
    .where(inArray(songArtists.song_id, ids))
    .orderBy(songArtists.sort_order)
}

export async function getSongWritersByIds(db: DB, ids: number[]): Promise<SongWritersWithDataDB[]> {
  return await db
    .select()
    .from(songWriters)
    .innerJoin(writers, eq(songWriters.writer_id, writers.id))
    .where(inArray(songWriters.song_id, ids))
    .orderBy(songWriters.sort_order)
}

export async function insertSongArtists(db: DB, obj: NewSongArtistsDB[]): Promise<void> {
  await db.insert(songArtists).values(obj)
}

export async function insertSongWriters(db: DB, obj: NewSongWritersDB[]): Promise<void> {
  await db.insert(songWriters).values(obj)
}

export async function countStats(
  db: DB,
  from: string | null,
  to: string | null,
  month: number | null,
  year: number | null,
  group: string | null,
): Promise<number> {
  const groupByField = group === 'album' ? stats.album_id : stats.song_id
  const filters = group === 'album' ? [isNotNull(groupByField)] : []
  if (from) {
    const splits = from.split('-')
    const val = (parseInt(splits[0]!, 10) * 100) + parseInt(splits[1]!, 10)
    filters.push(sql`(year * 100) + month >= ${val}`)
  }
  if (to) {
    const splits = to.split('-')
    const val = (parseInt(splits[0]!, 10) * 100) + parseInt(splits[1]!, 10)
    filters.push(sql`(year * 100) + month <= ${val}`)
  }
  if (month) filters.push(eq(stats.month, month))
  if (year) filters.push(eq(stats.year, year))
  const subq = db
    .select({ id: groupByField })
    .from(stats)
    .where(and(...filters))
    .groupBy(groupByField)
  const records = await db.select({ n: count() }).from(subq.as('subq'))
  return records[0]?.n ?? 0
}

export async function rankStats(
  db: DB,
  from: string | null,
  to: string | null,
  month: number | null,
  year: number | null,
  group: string | null,
  offset: number,
  limit: number,
): Promise<RankingDB[]> {
  const groupByField = group === 'album' ? stats.album_id : stats.song_id
  const filters = group === 'album' ? [isNotNull(groupByField)] : []
  if (from) {
    const splits = from.split('-')
    const val = (parseInt(splits[0]!, 10) * 100) + parseInt(splits[1]!, 10)
    filters.push(sql`(year * 100) + month >= ${val}`)
  }
  if (to) {
    const splits = to.split('-')
    const val = (parseInt(splits[0]!, 10) * 100) + parseInt(splits[1]!, 10)
    filters.push(sql`(year * 100) + month <= ${val}`)
  }
  if (month) filters.push(eq(stats.month, month))
  if (year) filters.push(eq(stats.year, year))
  const records = await db
    .select({ id: groupByField, n: sum(stats.plays).as('n') })
    .from(stats)
    .where(and(...filters))
    .groupBy(groupByField)
    .orderBy(sql`n desc, ${groupByField}`)
    .limit(limit > MAX_LIMIT ? MAX_LIMIT : limit)
    .offset(offset)
  // 'n' is of type string so we convert it to number
  return records.map((each) => ({ id: each.id ?? 0, n: parseInt(each.n ?? '0', 10) }))
}

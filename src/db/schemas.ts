import { sql } from 'drizzle-orm'
import {
  pgEnum as Enum,
  pgTable as Table,
  check,
  unique,
  index,
  integer,
  serial,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core'

export const artists = Table('artists', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const writers = Table('writers', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const albums = Table('albums', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const songs = Table('songs', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  album_id: integer().references(() => albums.id),
  released_year: integer().notNull(),
  total_plays: integer().notNull().default(0),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const artistRole = Enum('artistRole', ['primary', 'featuring'])

export const songArtists = Table('song_artists', {
  id: serial().primaryKey(),
  song_id: integer().notNull().references(() => songs.id),
  artist_id: integer().notNull().references(() => artists.id),
  role: artistRole().notNull().default('primary'),
  sort_order: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
}, (table) => {
  return {
    unq: unique().on(table.song_id, table.artist_id),
  }
})

export const songWriters = Table('song_writers', {
  id: serial().primaryKey(),
  song_id: integer().notNull().references(() => songs.id),
  writer_id: integer().notNull().references(() => writers.id),
  sort_order: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
}, (table) => {
  return {
    unq: unique().on(table.song_id, table.writer_id),
  }
})

export const stats = Table('stats', {
  id: serial().primaryKey(),
  song_id: integer().notNull().references(() => songs.id),
  album_id: integer().references(() => albums.id),
  year: integer().notNull(),
  month: integer().notNull(),
  plays: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
}, (table) => {
  return {
    unq: unique().on(table.song_id, table.year, table.month),
    album_idx: index('stats_album_idx').on(table.album_id, table.plays),
    check: check('month', sql`${table.month} >= 1 AND ${table.month} <= 12`),
  }
})

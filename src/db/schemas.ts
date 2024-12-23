import { sql } from 'drizzle-orm'
import { pgTable, serial, uuid, varchar, timestamp, integer, check, unique, pgEnum } from 'drizzle-orm/pg-core'

export const artists = pgTable('artists', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const writers = pgTable('writers', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const albums = pgTable('albums', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const songs = pgTable('songs', {
  id: serial().primaryKey(),
  uuid: uuid().notNull().defaultRandom().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  album_id: integer().references(() => albums.id),
  released_year: integer(),
  total_plays: integer().notNull().default(0),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
})

export const artistRole = pgEnum('artistRole', ['primary', 'featuring'])

export const songArtists = pgTable('song_artists', {
  id: serial().primaryKey(),
  song_id: integer().references(() => songs.id),
  artist_id: integer().references(() => artists.id),
  role: artistRole().notNull().default('primary'),
  sort_order: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
}, (t) => {
  return {
    unq: unique().on(t.song_id, t.artist_id),
  }
})

export const songWriters = pgTable('song_writers', {
  id: serial().primaryKey(),
  song_id: integer().references(() => songs.id),
  writer_id: integer().references(() => writers.id),
  sort_order: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
}, (t) => {
  return {
    unq: unique().on(t.song_id, t.writer_id),
  }
})

export const stats = pgTable('stats', {
  id: serial().primaryKey(),
  song_id: integer().references(() => songs.id),
  year: integer().notNull(),
  month: integer().notNull(),
  plays: integer().notNull(),
  created_at: timestamp().notNull().defaultNow(),
}, (t) => {
  return {
    unq: unique().on(t.song_id, t.year, t.month),
    check: check('month', sql`${t.month} >= 1 AND ${t.month} <= 12`),
  }
})
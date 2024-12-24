import type { InferSelectModel } from 'drizzle-orm'

import { artists, writers, albums, songs, songArtists, songWriters, stats } from '@/db/schemas'

export type ArtistDB = InferSelectModel<typeof artists>
export type WriterDB = InferSelectModel<typeof writers>
export type AlbumDB = InferSelectModel<typeof albums>
export type SongDB = InferSelectModel<typeof songs>
export type SongArtistsDB = InferSelectModel<typeof songArtists>
export type SongWritersDB = InferSelectModel<typeof songWriters>
export type StatDB = InferSelectModel<typeof stats>

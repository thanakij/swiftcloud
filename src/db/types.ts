import type { artists, writers, albums, songs, songArtists, songWriters, stats } from '@/db/schemas'

export type ArtistDB = typeof artists.$inferSelect
export type WriterDB = typeof writers.$inferSelect
export type AlbumDB = typeof albums.$inferSelect
export type NewAlbumDB = typeof albums.$inferInsert
export type SongDB = typeof songs.$inferSelect
export type NewSongDB = typeof songs.$inferInsert
export type SongArtistsDB = typeof songArtists.$inferSelect
export type NewSongArtistsDB = typeof songArtists.$inferInsert
export type SongWritersDB = typeof songWriters.$inferSelect
export type NewSongWritersDB = typeof songWriters.$inferInsert
export type StatDB = typeof stats.$inferSelect

export interface SongArtistsWithDataDB {
  artists: ArtistDB;
  song_artists: SongArtistsDB;
}

export interface SongWritersWithDataDB {
  writers: WriterDB;
  song_writers: SongWritersDB;
}

export type ArtistWithRoleDB = ArtistDB & Pick<SongArtistsDB, 'role'>

export interface RankingDB {
  id: number;
  n: number;
}

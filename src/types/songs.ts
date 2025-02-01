import type { z } from 'zod'

import type { ListSongsParam, ListSongs, ArtistRole, ArtistWithRole, Id, SongBase, Song, SongIn } from '@/schemas/songs'

export type ListSongsParam = z.infer<typeof ListSongsParam>
export type ListSongs = z.infer<typeof ListSongs>
export type ArtistRole = z.infer<typeof ArtistRole>
export type ArtistWithRole = z.infer<typeof ArtistWithRole>
export type Id = z.infer<typeof Id>
export type SongBase = z.infer<typeof SongBase>
export type Song = z.infer<typeof Song>
export type SongIn = z.infer<typeof SongIn>

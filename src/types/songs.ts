import { z } from 'zod'

import {
  ListSongsParam as _ListSongsParam,
  ListSongs as _ListSongs,
  ArtistRole as _ArtistRole,
  ArtistWithRole as _ArtistWithRole,
  Id as _Id,
  SongBase as _SongBase,
  Song as _Song,
  SongIn as _SongIn,
} from '@/schemas/songs'

export type ListSongsParam = z.infer<typeof _ListSongsParam>
export type ListSongs = z.infer<typeof _ListSongs>
export type ArtistRole = z.infer<typeof _ArtistRole>
export type ArtistWithRole = z.infer<typeof _ArtistWithRole>
export type Id = z.infer<typeof _Id>
export type SongBase = z.infer<typeof _SongBase>
export type Song = z.infer<typeof _Song>
export type SongIn = z.infer<typeof _SongIn>

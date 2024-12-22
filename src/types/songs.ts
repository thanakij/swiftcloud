import { z } from 'zod'

import {
  ListSongsParams as _ListSongsParams,
  ListSongs as _ListSongs,
  Id as _Id,
  Song as _Song,
  SongIn as _SongIn,
} from '@/schemas/songs'

export type ListSongsParams = z.infer<typeof _ListSongsParams>
export type ListSongs = z.infer<typeof _ListSongs>
export type Id = z.infer<typeof _Id>
export type Song = z.infer<typeof _Song>
export type SongIn = z.infer<typeof _SongIn>

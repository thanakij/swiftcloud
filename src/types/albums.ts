import { z } from 'zod'

import {
  ListAlbumsParam as _ListAlbumsParam,
  ListAlbums as _ListAlbums,
  Id as _Id,
  Album as _Album,
  AlbumIn as _AlbumIn,
} from '@/schemas/albums'

export type ListAlbumsParam = z.infer<typeof _ListAlbumsParam>
export type ListAlbums = z.infer<typeof _ListAlbums>
export type Id = z.infer<typeof _Id>
export type Album = z.infer<typeof _Album>
export type AlbumIn = z.infer<typeof _AlbumIn>

import type { z } from 'zod'

import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/schemas/albums'

export type ListAlbumsParam = z.infer<typeof ListAlbumsParam>
export type ListAlbums = z.infer<typeof ListAlbums>
export type Id = z.infer<typeof Id>
export type Album = z.infer<typeof Album>
export type AlbumIn = z.infer<typeof AlbumIn>

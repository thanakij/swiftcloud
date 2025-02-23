import { z } from '@hono/zod-openapi'

import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from '@/constants'
import { Id as AlbumId, Album } from '@/schemas/albums'
import { Id as ArtistId, Artist } from '@/schemas/artists'
import { Meta } from '@/schemas/common'
import { Id as WriterId, Writer } from '@/schemas/writers'

export const Id = z.string().uuid().brand<'SongId'>()

export const ListSongsParam = z
  .object({
    q: z.string().nullable().optional().default(null), // search names using ILIKE
    album_id: AlbumId.nullable().optional().default(null), // filter by album
    year: z.coerce.number().nullable().optional().default(null), // filter by released year
    offset: z.coerce.number().nonnegative().optional().default(0),
    limit: z.coerce.number().nonnegative().max(MAX_PAGE_SIZE).optional().default(DEFAULT_PAGE_SIZE),
    sort: z.string().nullable().optional().default(null).openapi({
      // '-year,name' = released year DESC, then name ASC
      // '-plays' = all-time plays DESC
      example: '-year,name',
    }),
  })
  .openapi('ListSongsParam')

export const SongIdInPath = z
  .object({
    id: z.string().uuid().openapi({
      param: { name: 'id', in: 'path' },
    }),
  })

export const ArtistRole = z
  .enum(['primary', 'featuring']).openapi({
    example: 'primary',
  })

export const ArtistWithRole = Artist.extend({
  role: ArtistRole,
}).openapi('ArtistWithRole')

export const SongBase = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'The 1',
    }),
    year: z.number().openapi({
      example: 2020,
    }),
  })
  .openapi('SongBase')

export const Song = SongBase.extend({
  artists: z.array(ArtistWithRole),
  writers: z.array(Writer).optional().default([]),
  album: Album.nullable().optional().default(null),
}).openapi('Song')

export const SongIn = z
  .object({
    name: z.string().openapi({
      example: 'The 1',
    }),
    artists_id: z.array(ArtistId),
    artists_role: z.array(ArtistRole),
    writers_id: z.array(WriterId).optional().default([]),
    album_id: AlbumId.nullable().optional().default(null),
    year: z.number().openapi({
      example: 2020,
    }),
  })
  .openapi('SongIn')

export const ListSongs = z
  .object({
    meta: Meta,
    data: z.array(Song),
  })
  .openapi('ListSongs')

export const CreatedSongId = z.object({ id: Id }).openapi('CreatedSongId')

import { z } from '@hono/zod-openapi'

import { Id as AlbumId, Album } from '@/schemas/albums'
import { Id as ArtistId, Artist } from '@/schemas/artists'
import { Meta } from '@/schemas/common'
import { Id as WriterId, Writer } from '@/schemas/writers'

export const Id = z
  .string().uuid().brand<'SongId'>().openapi({
    example: '9635afbd-4956-4633-b03a-ada3b243d47e',
  })

export const SongId = z
  .object({
    id: Id,
  })

export const ListSongsParam = z
  .object({
    q: z.string().nullable().optional().default(null).openapi({
      example: 'Song\'s name LIKE <q>',
    }),
    album_id: AlbumId.nullable().optional().default(null),
    year: z.coerce.number().nullable().optional().default(null).openapi({
      example: 2020,
    }),
    offset: z.coerce.number().optional().default(0),
    limit: z.coerce.number().optional().default(10),
    sort: z.string().nullable().optional().default(null).openapi({
      example: 'name',
    }),
  })
  .openapi('ListSongsParam')

export const GetSongParam = z
  .object({
    id: z.string().uuid().openapi({
      param: { name: 'id', in: 'path' },
      example: '9635afbd-4956-4633-b03a-ada3b243d47e',
    }),
  })

export const Song = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'The 1',
    }),
    artist: Artist,
    writers: z.array(Writer).optional().default([]),
    album: Album.nullable().optional().default(null),
    year: z.number().openapi({
      example: 2020,
    }),
  })
  .openapi('Song')

export const SongIn = z
  .object({
    name: z.string().openapi({
      example: 'The 1',
    }),
    artist_id: ArtistId,
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

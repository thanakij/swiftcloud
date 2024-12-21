import { z } from '@hono/zod-openapi'

import { Artist, Id as ArtistId } from '@/schemas/artists'
import { Meta } from '@/schemas/common'
import { Writer, Id as WriterId } from '@/schemas/writers'

export const Id = z
  .string().openapi({
    example: '100',
  })

export const SongId = z
  .object({
    id: Id,
  })

export const ListSongsParams = z
  .object({
    q: z.string().optional().openapi({
      example: 'Song\'s name LIKE <q>',
    }),
    album: z.string().optional().openapi({
      example: 'Folklore',
    }),
    year: z.coerce.number().optional().openapi({
      example: 2020,
    }),
    offset: z.coerce.number().optional().default(0),
    limit: z.coerce.number().optional().default(10),
    sort: z.string().optional().openapi({
      example: 'name',
    }),
  })
  .openapi('ListSongsParams')

export const GetSongParams = z
  .object({
    id: z.string().min(3).openapi({
      param: { name: 'id', in: 'path' },
      example: '100',
    }),
  })

export const Song = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'The 1',
    }),
    artist: Artist,
    writers: z.array(Writer).optional(),
    album: z.string().openapi({
      example: 'Folklore',
    }).optional(),
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
    artist: ArtistId,
    writers: z.array(WriterId).optional(),
    album: z.string().openapi({
      example: 'Folklore',
    }).optional(),
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

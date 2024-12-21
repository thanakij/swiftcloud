import { z } from '@hono/zod-openapi'

import { Artist, Id as ArtistId } from '@/schemas/artists'
import { Writer, Id as WriterId } from '@/schemas/writers'

export const Id = z
  .string().openapi({
    example: '100',
  })

export const SongId = z
  .object({
    id: Id,
  })

export const SongIdIn = z
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

import { z } from '@hono/zod-openapi'

import { Artist } from './artists'
import { Writer } from './writers'

export const SongId = z
  .object({
    id: z.string().openapi({
      example: '100',
    }),
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
    id: z.string().openapi({
      example: '100',
    }),
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
    artist: Artist,
    writers: z.array(Writer).optional(),
    album: z.string().openapi({
      example: 'Folklore',
    }).optional(),
    year: z.number().openapi({
      example: 2020,
    }),
  })
  .openapi('SongIn')

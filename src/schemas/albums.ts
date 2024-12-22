import { z } from '@hono/zod-openapi'

import { Meta } from '@/schemas/common'

export const Id = z
  .string().uuid().brand<'AlbumId'>().openapi({
    example: 'aeb1e256-9e86-4bd1-899b-93c1fd8b55e9',
  })

export const AlbumId = z
  .object({
    id: Id,
  })

export const ListAlbumsParam = z
  .object({
    q: z.string().nullable().optional().default(null).openapi({
      example: 'Album\'s name LIKE <q>',
    }),
    offset: z.coerce.number().optional().default(0),
    limit: z.coerce.number().optional().default(10),
    sort: z.string().nullable().optional().default(null).openapi({
      example: 'name',
    }),
  })
  .openapi('ListAlbumsParam')

export const GetAlbumParam = z
  .object({
    id: z.string().uuid().openapi({
      param: { name: 'id', in: 'path' },
      example: 'aeb1e256-9e86-4bd1-899b-93c1fd8b55e9',
    }),
  })

export const Album = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'Folklore',
    }),
  })
  .openapi('Album')

export const AlbumIn = z
  .object({
    name: z.string().openapi({
      example: 'Folklore',
    }),
  })
  .openapi('AlbumIn')

export const ListAlbums = z
  .object({
    meta: Meta,
    data: z.array(Album),
  })
  .openapi('ListAlbums')

import { z } from '@hono/zod-openapi'

import { DEFAULT_PAGE_SIZE } from '@/constants'
import { Meta } from '@/schemas/common'

export const Id = z.string().uuid().brand<'AlbumId'>()

export const ListAlbumsParam = z
  .object({
    q: z.string().nullable().optional().default(null), // search names using ILIKE
    offset: z.coerce.number().optional().default(0),
    limit: z.coerce.number().optional().default(DEFAULT_PAGE_SIZE),
    sort: z.string().nullable().optional().default(null).openapi({
      example: 'name', // 'name,-created_at' = name ASC, then created_at DESC
    }),
  })
  .openapi('ListAlbumsParam')

export const AlbumIdInPath = z
  .object({
    id: z.string().uuid().openapi({
      param: { name: 'id', in: 'path' },
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

export const CreatedAlbumId = z.object({ id: Id }).openapi('CreatedAlbumId')

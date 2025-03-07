import { z } from '@hono/zod-openapi'

import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from '@/constants'
import { Album } from '@/schemas/albums'
import { Meta } from '@/schemas/common'
import { SongBase } from '@/schemas/songs'

export const GroupBy = z
  .enum(['song', 'album']).openapi({
    example: 'song',
  })

export const RankingParam = z
  .object({
    from: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).nullable().optional().default(null).openapi({
      example: '2024-01',
    }),
    to: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).nullable().optional().default(null).openapi({
      example: '2024-12',
    }),
    month: z.coerce.number().min(1).max(12).nullable().optional().default(null),
    year: z.coerce.number().nullable().optional().default(null),
    group: GroupBy.nullable().optional().default('song'),
    offset: z.coerce.number().nonnegative().optional().default(0),
    limit: z.coerce.number().nonnegative().max(MAX_PAGE_SIZE).optional().default(DEFAULT_PAGE_SIZE),
  })
  .openapi('RankingParam')

export const DataWithStat = z
  .object({
    data: z.union([SongBase, Album]),
    stat: z.object({
      plays: z.number(),
    }),
  })
  .openapi('DataWithStat')

export const Ranking = z
  .object({
    meta: Meta,
    data: z.array(DataWithStat),
  })
  .openapi('Ranking')

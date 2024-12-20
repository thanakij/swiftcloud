import { z } from '@hono/zod-openapi'

export const Artist = z
  .object({
    id: z.string().openapi({
      example: '1',
    }),
    name: z.string().openapi({
      example: 'Taylor Swift',
    }),
  })
  .openapi('Artist')

import { z } from '@hono/zod-openapi'

export const Meta = z
  .object({
    total: z.number().openapi({
      example: 10,
    }),
    count: z.number().openapi({
      example: 2,
    }),
  })

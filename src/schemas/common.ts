import { z } from '@hono/zod-openapi'

export const Errors = z
  .object({
    errors: z.array(z.string()),
    source: z.string().nullable(),
  })
  .openapi('Error')

export const Null = z.null()
export const ZDate = z.string().date()

export const Meta = z
  .object({
    limit: z.number().openapi({
      example: 50,
    }),
    total: z.number().openapi({
      example: 10000,
    }),
    count: z.number().openapi({
      example: 8,
    }),
  })

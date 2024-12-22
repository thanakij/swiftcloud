import { z } from '@hono/zod-openapi'

export const Errors = z
  .object({
    errors: z.array(z.string()),
    source: z.string().nullable(),
  })
  .openapi('Error')

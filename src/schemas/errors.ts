import { z } from '@hono/zod-openapi'

export const Errors = z
  .object({
    errors: z.array(z.string()),
    ok: z.boolean(),
    source: z.string(),
  })
  .openapi('Error')

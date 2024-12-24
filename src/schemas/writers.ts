import { z } from '@hono/zod-openapi'

export const Id = z.string().uuid().brand<'WriterId'>()

export const Writer = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'Taylor Swift',
    }),
  })
  .openapi('Writer')

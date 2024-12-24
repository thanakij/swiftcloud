import { z } from '@hono/zod-openapi'

export const Id = z.string().uuid().brand<'ArtistId'>()

export const Artist = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'Taylor Swift',
    }),
  })
  .openapi('Artist')

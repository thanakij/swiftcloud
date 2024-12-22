import { z } from '@hono/zod-openapi'

export const Id = z
  .string().uuid().openapi({
    example: '88e446b3-c370-43aa-8962-c0dc316c298f',
  })

export const Writer = z
  .object({
    id: Id,
    name: z.string().openapi({
      example: 'Taylor Swift',
    }),
  })
  .openapi('Writer')

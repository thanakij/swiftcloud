import type { z } from 'zod'

import type { Id, Artist } from '@/schemas/artists'

export type Id = z.infer<typeof Id>
export type Artist = z.infer<typeof Artist>

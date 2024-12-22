import { z } from 'zod'

import {
  Id as _Id,
  Artist as _Artist,
} from '@/schemas/artists'

export type Id = z.infer<typeof _Id>
export type Artist = z.infer<typeof _Artist>

import { z } from 'zod'

import {
  Id as _Id,
  Writer as _Writer,
} from '@/schemas/writers'

export type Id = z.infer<typeof _Id>
export type Writer = z.infer<typeof _Writer>

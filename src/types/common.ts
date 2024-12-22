import { z } from 'zod'

import {
  Errors as _Errors,
} from '@/schemas/errors'

export type Errors  = z.infer<typeof _Errors>

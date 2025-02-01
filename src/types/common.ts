import type { z } from 'zod'

import type { Errors } from '@/schemas/errors'

export type Errors = z.infer<typeof Errors>

export interface Env {
  [key: string]: string | undefined;
}

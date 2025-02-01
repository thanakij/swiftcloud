import type { z } from 'zod'

import type { Id, Writer } from '@/schemas/writers'

export type Id = z.infer<typeof Id>
export type Writer = z.infer<typeof Writer>

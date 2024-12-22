import type { Id, Writer } from '@/types/writers'

export interface WriterRepository {
  get: (id: Id) => Promise<Writer | null>
}

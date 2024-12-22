import type { WriterRepository } from '@/repositories/writers'
import type { Id, Writer } from '@/types/writers'

import { DATA } from '@/data/mock'

export class MockWriterRepository implements WriterRepository {
  async get(id: Id): Promise<Writer | null> {
    const founds = DATA.filter((each) => each.id === id)
    return founds ? founds[0] : null
  }
}

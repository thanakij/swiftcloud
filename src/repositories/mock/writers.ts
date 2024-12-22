import type { WriterRepository } from '@/repositories/writers'
import type { Id, Writer } from '@/types/writers'

import { SONGS } from '@/data/mock'

export class MockWriterRepository implements WriterRepository {
  async get(id: Id): Promise<Writer | null> {
    const founds = SONGS.filter((each) => each.writers.filter((writer) => writer.id === id).length > 0)
    return founds.length > 0 ? founds[0].writers.filter((writer) => writer.id === id)[0] : null
  }
}

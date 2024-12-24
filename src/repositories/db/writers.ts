import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import type { WriterRepository } from '@/repositories/writers'
import type { Id, Writer } from '@/types/writers'

import { getWriterByUuid } from '@/db/crud'
import { mapWriter } from '@/repositories/db/utils'

export class DbWriterRepository implements WriterRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async get(id: Id): Promise<Writer | null> {
    const record = await getWriterByUuid(this.db, id)
    return record ? mapWriter(record) : null
  }
}

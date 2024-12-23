import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { eq } from 'drizzle-orm'

import type { WriterRepository } from '@/repositories/writers'
import type { Id, Writer } from '@/types/writers'

import { writers } from '@/db/schemas'

export class DbWriterRepository implements WriterRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async get(id: Id): Promise<Writer | null> {
    const results = await this.db
      .select()
      .from(writers)
      .where(eq(writers.uuid, id))
      .limit(1)
    const data: Writer[] = results.map((each) => ({ id: each.uuid as Id, name: each.name }))
    return data.length > 0 ? data[0] : null
  }
}

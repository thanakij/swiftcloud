import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import type { ArtistRepository } from '@/repositories/artists'
import type { Id, Artist } from '@/types/artists'

import { getArtistByUuid } from '@/db/crud'
import { mapArtist } from '@/repositories/db/utils'

export class DbArtistRepository implements ArtistRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async get(id: Id): Promise<Artist | null> {
    const record = await getArtistByUuid(this.db, id)
    return record ? mapArtist(record) : null
  }
}

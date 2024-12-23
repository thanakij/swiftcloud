import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { eq } from 'drizzle-orm'

import type { ArtistRepository } from '@/repositories/artists'
import type { Id, Artist } from '@/types/artists'

import { artists } from '@/db/schemas'

export class DbArtistRepository implements ArtistRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async get(id: Id): Promise<Artist | null> {
    const results = await this.db
      .select()
      .from(artists)
      .where(eq(artists.uuid, id))
      .limit(1)
    const data: Artist[] = results.map((each) => ({ id: each.uuid as Id, name: each.name }))
    return data.length > 0 ? data[0] : null
  }
}

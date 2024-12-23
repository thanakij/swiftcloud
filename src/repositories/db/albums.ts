import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { count, eq, ilike } from 'drizzle-orm'

import type { AlbumRepository } from '@/repositories/albums'
import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/types/albums'

import { albums } from '@/db/schemas'
import { getOrderBy } from '@/utils'

export class DbAlbumRepository implements AlbumRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async list(param: ListAlbumsParam): Promise<ListAlbums> {
    const filters = param.q ? ilike(albums.name, `%${param.q}%`) : undefined
    // @ts-expect-error not typed well
    const orderByFields = getOrderBy(albums, param.sort ?? 'name')
    const results = await this.db
      .select()
      .from(albums)
      .where(filters)
      .orderBy(...orderByFields) // multiple fields
      .limit(param.limit)
      .offset(param.offset)
    console.log(results)
    const data: Album[] = results.map((each) => ({ id: each.uuid as Id, name: each.name }))
    const result = await this.db.select({ total: count() }).from(albums).where(filters)
    const total = result[0].total
    return { meta: { total, count: data.length }, data }
  }

  async get(id: Id): Promise<Album | null> {
    const results = await this.db
      .select()
      .from(albums)
      .where(eq(albums.uuid, id))
      .limit(1)
    const data: Album[] = results.map((each) => ({ id: each.uuid as Id, name: each.name }))
    return data.length > 0 ? data[0] : null
  }

  async create(input: AlbumIn): Promise<Id> {
    throw new Error('Not implemented')
  }
}

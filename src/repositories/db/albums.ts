import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import { and, count, eq, ilike } from 'drizzle-orm'

import type { AlbumDB } from '@/db/types'
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
    const filters = param.q ? [ilike(albums.name, `%${param.q}%`)] : []
    // @ts-expect-error not typed well
    const orderByFields = getOrderBy(albums, param.sort ?? 'name')
    const results = await this.db
      .select()
      .from(albums)
      .where(and(...filters))
      .orderBy(...orderByFields) // multiple fields
      .limit(param.limit)
      .offset(param.offset)
    const data: Album[] = results.map((each) => ({ id: each.uuid as Id, name: each.name }))
    const result = await this.db.select({ total: count() }).from(albums).where(and(...filters))
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

  async _get(id: number): Promise<AlbumDB | null> {
    const results = await this.db
      .select()
      .from(albums)
      .where(eq(albums.id, id))
      .limit(1)
    return results.length > 0 ? results[0] : null
  }

  async _getByUuid(uuid: Id): Promise<AlbumDB | null> {
    const results = await this.db
      .select()
      .from(albums)
      .where(eq(albums.uuid, uuid))
      .limit(1)
    return results.length > 0 ? results[0] : null
  }
}

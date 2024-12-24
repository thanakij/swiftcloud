import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import type { AlbumRepository } from '@/repositories/albums'
import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/types/albums'

import { countAlbums, listAlbums, getAlbumByUuid, insertAlbum } from '@/db/crud'
import { mapAlbum, mapNewAlbumDB } from '@/repositories/db/utils'

export class DbAlbumRepository implements AlbumRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async list(param: ListAlbumsParam): Promise<ListAlbums> {
    const records = await listAlbums(this.db, param.q, param.offset, param.limit, param.sort)
    const data = records.map(mapAlbum)
    const total = await countAlbums(this.db, param.q)
    return { meta: { total, count: data.length }, data }
  }

  async get(id: Id): Promise<Album | null> {
    const record = await getAlbumByUuid(this.db, id)
    return record ? mapAlbum(record) : null
  }

  async create(input: AlbumIn): Promise<Id> {
    const record = await insertAlbum(this.db, mapNewAlbumDB(input))
    if (!record) throw new Error('Failed insertAlbum()')
    return mapAlbum(record).id
  }
}

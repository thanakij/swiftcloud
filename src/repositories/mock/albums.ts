import type { AlbumRepository } from '@/repositories/albums'
import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/types/albums'

import { ALBUMS } from '@/data/mock'

export class MockAlbumRepository implements AlbumRepository {
  async list(param: ListAlbumsParam): Promise<ListAlbums> {
    const data = ALBUMS.slice(param.offset, param.limit)
    return { meta: { total: ALBUMS.length, count: data.length }, data }
  }

  async get(id: Id): Promise<Album | null> {
    const founds = ALBUMS.filter((each) => each.id === id)
    return founds.length > 0 ? founds[0] : null
  }

  async create(input: AlbumIn): Promise<Id> {
    const { name } = input
    const album: Album = {
      id: crypto.randomUUID(),
      name,
    }
    ALBUMS.push(album)
    return album.id
  }
}

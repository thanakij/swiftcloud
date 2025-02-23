import type { AlbumRepository } from '@/repositories/albums'
import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/types/albums'

import { MAX_PAGE_SIZE } from '@/constants'

export class AlbumService {
  private albumRepository: AlbumRepository

  public constructor(albumRepository: AlbumRepository) {
    this.albumRepository = albumRepository
  }

  async list(param: ListAlbumsParam): Promise<ListAlbums> {
    if (param.limit > MAX_PAGE_SIZE) param.limit = MAX_PAGE_SIZE
    return await this.albumRepository.list(param)
  }

  async get(id: Id): Promise<Album | null> {
    return await this.albumRepository.get(id)
  }

  async create(input: AlbumIn): Promise<Id> {
    return await this.albumRepository.create(input)
  }
}

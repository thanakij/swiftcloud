import type { ListAlbumsParam, ListAlbums, Id, Album, AlbumIn } from '@/types/albums'

export interface AlbumRepository {
  list: (param: ListAlbumsParam) => Promise<ListAlbums>
  get: (id: Id) => Promise<Album | null>
  create: (input: AlbumIn) => Promise<Id>
}

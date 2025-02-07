import type { AlbumRepository } from '@/repositories/albums'
import type { ListAlbumsParam, Id, AlbumIn } from '@/types/albums'

export async function listAlbums(albumRepository: AlbumRepository, { query }: { query: ListAlbumsParam }) {
  console.log(query)
  return await albumRepository.list(query)
}

export async function getAlbum(albumRepository: AlbumRepository, id: Id) {
  console.log(id)
  return await albumRepository.get(id)
}

export async function createAlbum(albumRepository: AlbumRepository, { album } : { album: AlbumIn }) {
  console.log(album)
  return await albumRepository.create(album)
}

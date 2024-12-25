import type { ListAlbumsParam, Id, AlbumIn } from '@/types/albums'
import type { Env } from '@/types/common'

import { RepositoryFactory } from '@/repositories/factory'

export async function listAlbums({ env, query }: { env: Env, query: ListAlbumsParam }) {
  console.log(query)
  const albumRepository = RepositoryFactory.newAlbumRepository(env)
  return await albumRepository.list(query)
}

export async function getAlbum(id: Id, { env }: { env: Env }) {
  console.log(id)
  const albumRepository = RepositoryFactory.newAlbumRepository(env)
  return await albumRepository.get(id)
}

export async function createAlbum({ env, album } : { env: Env, album: AlbumIn }) {
  console.log(album)
  const albumRepository = RepositoryFactory.newAlbumRepository(env)
  return await albumRepository.create(album)
}

import type { Env } from '@/types/common'
import type { ListSongsParam, Id, SongIn } from '@/types/songs'

import { RepositoryFactory } from '@/repositories/factory'

export async function listSongs({ env, query }: { env: Env, query: ListSongsParam }) {
  console.log(query)
  const songRepository = RepositoryFactory.newSongRepository(env)
  return await songRepository.list(query)
}

export async function getSong(id: Id, { env }: { env: Env }) {
  console.log(id)
  const songRepository = RepositoryFactory.newSongRepository(env)
  return await songRepository.get(id)
}

export async function createSong({ env, song } : { env: Env, song: SongIn }) {
  console.log(song)
  const songRepository = RepositoryFactory.newSongRepository(env)
  return await songRepository.create(song)
}

import type { SongRepository } from '@/repositories/songs'
import type { ListSongsParam, Id, SongIn } from '@/types/songs'

export async function listSongs(songRepository: SongRepository, { query }: { query: ListSongsParam }) {
  console.log(query)
  return await songRepository.list(query)
}

export async function getSong(songRepository: SongRepository, id: Id) {
  console.log(id)
  return await songRepository.get(id)
}

export async function createSong(songRepository: SongRepository, { song } : { song: SongIn }) {
  console.log(song)
  return await songRepository.create(song)
}

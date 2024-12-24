import type { ListSongsParam, ListSongs, Id, Song, SongIn } from '@/types/songs'

export interface SongRepository {
  list: (param: ListSongsParam) => Promise<ListSongs>
  get: (id: Id) => Promise<Song | null>
  create: (input: SongIn) => Promise<Id>
}

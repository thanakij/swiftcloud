import type { SongRepository } from '@/repositories/songs'
import type { ListSongsParams, ListSongs, Id, Song, SongIn } from '@/types/songs'

const DATA: Song[] = [
  {
    id: '100',
    name: 'The 1',
    artist: {
      id: '1',
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '1',
        name: 'Taylor Swift',
      },
      {
        id: '2',
        name: 'Aaron Dessner',
      },
    ],
    album: 'Folklore',
    year: 2020,
  },
  {
    id: '101',
    name: 'Begin Again',
    artist: {
      id: '1',
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '1',
        name: 'Taylor Swift',
      },
    ],
    album: 'Red',
    year: 2012,
  },
]

export class MockSongRepository implements SongRepository {
  async list(param: ListSongsParams): Promise<ListSongs> {
    const data = DATA.slice(param.offset, param.limit)
    return { meta: { total: DATA.length, count: data.length }, data }
  }

  async get(id: Id): Promise<Song | null> {
    const founds = DATA.filter((each) => each.id === id)
    return founds ? founds[0] : null
  }

  async create(input: SongIn): Promise<Id> {
    const { name, artist: artist_id, writers: writers_id, album, year } = input
    const song: Song = {
      id: crypto.randomUUID(),
      name,
      artist: {
        id: artist_id,
        name: 'artist',
      },
      writers: [
        {
          id: '2',
          name: 'Aaron Dessner',
        },
      ],
      album,
      year,
    }
    DATA.push(song)
    return song.id
  }
}

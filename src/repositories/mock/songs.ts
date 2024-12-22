import type { SongRepository } from '@/repositories/songs'
import type { ListSongsParams, ListSongs, Id, Song, SongIn } from '@/types/songs'

const DATA: Song[] = [
  {
    id: '9635afbd-4956-4633-b03a-ada3b243d47e',
    name: 'The 1',
    artist: {
      id: '88e446b3-c370-43aa-8962-c0dc316c298f',
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '88e446b3-c370-43aa-8962-c0dc316c298f',
        name: 'Taylor Swift',
      },
      {
        id: 'fe46ccbc-f4ec-4ecd-b922-7430c31664c9',
        name: 'Aaron Dessner',
      },
    ],
    album: 'Folklore',
    year: 2020,
  },
  {
    id: '4b950f5a-d85c-4869-b84a-6e081d671aab',
    name: 'Begin Again',
    artist: {
      id: '88e446b3-c370-43aa-8962-c0dc316c298f',
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '88e446b3-c370-43aa-8962-c0dc316c298f',
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
    const { name, artist_id, writers_id, album, year } = input
    const song: Song = {
      id: crypto.randomUUID(),
      name,
      artist: {
        id: artist_id,
        name: 'artist',
      },
      writers: [
        {
          id: 'fe46ccbc-f4ec-4ecd-b922-7430c31664c9',
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

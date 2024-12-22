import type { Song } from '@/types/songs'

export const DATA: Song[] = [
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

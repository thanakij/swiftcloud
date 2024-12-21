import type { Context } from 'hono'

export function listSongs(c: Context) {
  // @ts-expect-error not typed well
  const query = c.req.valid('query')
  console.log(query)
  return c.json({
    meta: {
      total: 10,
      count: 2,
    },
    data: [
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
    ],
  }, 200)
}

export function getSong(c: Context) {
  const id = c.req.param('id')
  console.log(id)
  return c.json({
    id,
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
  }, 200)
}

export async function createSong(c: Context) {
  // @ts-expect-error not typed well
  const body = c.req.valid('json')
  console.log(body)
  const id = '101'
  return c.json({ id }, 201, { Location: `/songs/${id}` })
}

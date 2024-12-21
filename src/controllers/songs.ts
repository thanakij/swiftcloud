import { Context } from 'hono'

export function getSong(c: Context) {
  const id = c.req.param('id')
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
  const body = await c.req.parseBody()
  console.log(body)
  const id = '101'
  return c.json({ id }, 201, { Location: `/songs/${id}` })
}

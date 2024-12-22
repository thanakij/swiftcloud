import type { Context } from 'hono'

import { HTTPException } from 'hono/http-exception'

import type { ListSongsParams, Id, SongIn } from '@/types/songs'

import { MockSongRepository } from '@/repositories/mock/songs'

export async function listSongs(c: Context) {
  // @ts-expect-error not typed well
  const query: ListSongsParams = c.req.valid('query')
  console.log(query)
  const songRepository = new MockSongRepository()
  return c.json(await songRepository.list(query), 200)
}

export async function getSong(c: Context) {
  const id: Id = c.req.param('id')
  console.log(id)
  const songRepository = new MockSongRepository()
  const song = await songRepository.get(id)
  if (!song) throw new HTTPException(404, { message: 'Song not found' })
  return c.json(song, 200)
}

export async function createSong(c: Context) {
  // @ts-expect-error not typed well
  const body: SongIn = c.req.valid('json')
  console.log(body)
  const songRepository = new MockSongRepository()
  const id = await songRepository.create(body)
  return c.json({ id }, 201, { Location: `/songs/${id}` })
}

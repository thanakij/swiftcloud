import type { Context } from 'hono'

import { HTTPException } from 'hono/http-exception'

import type { ListSongsParams, Id, SongIn } from '@/types/songs'

import { MockArtistRepository } from '@/repositories/mock/artists'
import { MockSongRepository } from '@/repositories/mock/songs'
import { MockWriterRepository } from '@/repositories/mock/writers'

export async function listSongs(c: Context) {
  // @ts-expect-error not typed well
  const query: ListSongsParams = c.req.valid('query')
  console.log(query)
  const artistRepository = new MockArtistRepository()
  const writerRepository = new MockWriterRepository()
  const songRepository = new MockSongRepository(artistRepository, writerRepository)
  return c.json(await songRepository.list(query), 200)
}

export async function getSong(c: Context) {
  const id: Id = c.req.param('id')
  console.log(id)
  const artistRepository = new MockArtistRepository()
  const writerRepository = new MockWriterRepository()
  const songRepository = new MockSongRepository(artistRepository, writerRepository)
  const song = await songRepository.get(id)
  if (!song) throw new HTTPException(404, { message: 'Song not found' })
  return c.json(song, 200)
}

export async function createSong(c: Context) {
  // @ts-expect-error not typed well
  const body: SongIn = c.req.valid('json')
  console.log(body)
  const artistRepository = new MockArtistRepository()
  const writerRepository = new MockWriterRepository()
  const songRepository = new MockSongRepository(artistRepository, writerRepository)
  try {
    const id = await songRepository.create(body)
    return c.json({ id }, 201, { Location: `/songs/${id}` })
  } catch (e) {
    console.error(e)
    throw new HTTPException(500, { message: 'Cannot save', cause: e })
  }
}

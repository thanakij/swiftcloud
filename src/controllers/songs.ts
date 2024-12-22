import type { Context } from 'hono'

import { HTTPException } from 'hono/http-exception'

import type { ListSongsParam, Id, SongIn } from '@/types/songs'

import { MockAlbumRepository } from '@/repositories/mock/albums'
import { MockArtistRepository } from '@/repositories/mock/artists'
import { MockSongRepository } from '@/repositories/mock/songs'
import { MockWriterRepository } from '@/repositories/mock/writers'

export async function listSongs(c: Context) {
  // @ts-expect-error not typed well
  const query: ListSongsParam = c.req.valid('query')
  console.log(query)
  const albumRepository = new MockAlbumRepository()
  const artistRepository = new MockArtistRepository()
  const writerRepository = new MockWriterRepository()
  const songRepository = new MockSongRepository(albumRepository, artistRepository, writerRepository)
  return c.json(await songRepository.list(query), 200)
}

export async function getSong(c: Context) {
  const id = c.req.param('id') as Id
  console.log(id)
  const albumRepository = new MockAlbumRepository()
  const artistRepository = new MockArtistRepository()
  const writerRepository = new MockWriterRepository()
  const songRepository = new MockSongRepository(albumRepository, artistRepository, writerRepository)
  const song = await songRepository.get(id)
  if (!song) throw new HTTPException(404, { message: 'Song not found' })
  return c.json(song, 200)
}

export async function createSong(c: Context) {
  // @ts-expect-error not typed well
  const song : SongIn = c.req.valid('json')
  console.log(song)
  const albumRepository = new MockAlbumRepository()
  const artistRepository = new MockArtistRepository()
  const writerRepository = new MockWriterRepository()
  const songRepository = new MockSongRepository(albumRepository, artistRepository, writerRepository)
  try {
    const id = await songRepository.create(song)
    return c.json({ id }, 201, { Location: `/songs/${id}` })
  } catch (e) {
    console.error(e)
    throw new HTTPException(500, { message: 'Cannot save', cause: e })
  }
}

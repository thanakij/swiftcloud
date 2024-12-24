import type { Context } from 'hono'

import { HTTPException } from 'hono/http-exception'

import type { ListAlbumsParam, Id, AlbumIn } from '@/types/albums'

import { AlbumRepositoryFactory } from '@/repositories/albums'

export async function listAlbums(c: Context) {
  // @ts-expect-error not typed well
  const query: ListAlbumsParam = c.req.valid('query')
  console.log(query)
  const albumRepository = AlbumRepositoryFactory.newInstance(c)
  return c.json(await albumRepository.list(query), 200)
}

export async function getAlbum(c: Context) {
  const id = c.req.param('id') as Id
  console.log(id)
  const albumRepository = AlbumRepositoryFactory.newInstance(c)
  const album = await albumRepository.get(id)
  if (!album) throw new HTTPException(404, { message: 'Album not found' })
  return c.json(album, 200)
}

export async function createAlbum(c: Context) {
  // @ts-expect-error not typed well
  const album: AlbumIn = c.req.valid('json')
  console.log(album)
  const albumRepository = AlbumRepositoryFactory.newInstance(c)
  try {
    const id = await albumRepository.create(album)
    return c.json({ id }, 201, { Location: `/albums/${id}` })
  } catch (e) {
    console.error(e)
    throw new HTTPException(500, { message: 'Cannot create an album', cause: e })
  }
}

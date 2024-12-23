import type { Context } from 'hono'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'
import { HTTPException } from 'hono/http-exception'

import type { ListAlbumsParam, Id, AlbumIn } from '@/types/albums'

import { DbAlbumRepository } from '@/repositories/db/albums'
import { MockAlbumRepository } from '@/repositories/mock/albums'

export async function listAlbums(c: Context) {
  // @ts-expect-error not typed well
  const query: ListAlbumsParam = c.req.valid('query')
  console.log(query)
  const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = env<{
    DB_HOST: string,
    DB_USER: string,
    DB_PASS: string,
    DB_NAME: string,
  }>(c)
  const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
  console.log(DATABASE_URL)
  const db = drizzle({ connection: DATABASE_URL, logger: true })
  console.log(db)
  const albumRepository = new DbAlbumRepository(db)
  //const albumRepository = new MockAlbumRepository()
  return c.json(await albumRepository.list(query), 200)
}

export async function getAlbum(c: Context) {
  const id = c.req.param('id') as Id
  console.log(id)
  const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = env<{
    DB_HOST: string,
    DB_USER: string,
    DB_PASS: string,
    DB_NAME: string,
  }>(c)
  const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
  console.log(DATABASE_URL)
  const db = drizzle({ connection: DATABASE_URL, logger: true })
  console.log(db)
  const albumRepository = new DbAlbumRepository(db)
  //const albumRepository = new MockAlbumRepository()
  const album = await albumRepository.get(id)
  if (!album) throw new HTTPException(404, { message: 'Album not found' })
  return c.json(album, 200)
}

export async function createAlbum(c: Context) {
  // @ts-expect-error not typed well
  const album: AlbumIn = c.req.valid('json')
  console.log(album)
  const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = env<{
    DB_HOST: string,
    DB_USER: string,
    DB_PASS: string,
    DB_NAME: string,
  }>(c)
  const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST ?? 'localhost'}:5432/${DB_NAME}`
  console.log(DATABASE_URL)
  const db = drizzle({ connection: DATABASE_URL, logger: true })
  console.log(db)
  const albumRepository = new DbAlbumRepository(db)
  //const albumRepository = new MockAlbumRepository()
  try {
    const id = await albumRepository.create(album)
    return c.json({ id }, 201, { Location: `/albums/${id}` })
  } catch (e) {
    console.error(e)
    throw new HTTPException(500, { message: 'Cannot save', cause: e })
  }
}

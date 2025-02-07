import type { OpenAPIHono } from '@hono/zod-openapi'

import { env } from 'hono/adapter'

import type { Id as AlbumId } from '@/types/albums'
import type { Id as SongId } from '@/types/songs'

import { listAlbums, getAlbum, createAlbum } from '@/controllers/albums'
import { rank } from '@/controllers/ranking'
import { listSongs, getSong, createSong } from '@/controllers/songs'
import { GET, POST } from '@/routers'
import { ListAlbumsParam, ListAlbums, AlbumIdInPath, Album, AlbumIn, CreatedAlbumId } from '@/schemas/albums'
import { Errors } from '@/schemas/common'
import { RankingParam, Ranking } from '@/schemas/ranking'
import { ListSongsParam, ListSongs, SongIdInPath, Song, SongIn, CreatedSongId } from '@/schemas/songs'

const TYPE_JSON = 'application/json'

export function init(app: OpenAPIHono) {
  app.openapi(GET('/albums',
    { query: ListAlbumsParam },
    {
      200: { content: { [TYPE_JSON]: { schema: ListAlbums } }, description: 'Successful response' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
    },
  ), async (c) => {
    const query = c.req.valid('query')
    const result = await listAlbums({ env: env(c), query })
    return c.json(result, 200)
  })

  app.openapi(GET('/albums/{id}',
    { params: AlbumIdInPath },
    {
      200: { content: { [TYPE_JSON]: { schema: Album } }, description: 'Successful response' },
      404: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Not found' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
    },
  ), async (c) => {
    const id = c.req.param('id') as AlbumId
    const result = await getAlbum(id, { env: env(c) })
    if (!result) return c.json({ errors: ['Album not found'], source: id }, 404)
    return c.json(result, 200)
  })

  app.openapi(POST('/albums',
    { body: { content: { [TYPE_JSON]: { schema: AlbumIn } } } },
    {
      201: { content: { [TYPE_JSON]: { schema: CreatedAlbumId } }, description: 'Successful response' },
      404: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Not found' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
      500: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Cannot save' },
    },
  ), async (c) => {
    const album = c.req.valid('json')
    try {
      const id = await createAlbum({ env: env(c), album })
      return c.json({ id }, 201, { Location: `/albums/${id}` })
    } catch (e) {
      console.error(e)
      return c.json({ errors: ['Cannot create an album'], source: String(e) }, 500)
    }
  })

  app.openapi(GET('/songs',
    { query: ListSongsParam },
    {
      200: { content: { [TYPE_JSON]: { schema: ListSongs } }, description: 'Successful response' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
    },
  ), async (c) => {
    const query = c.req.valid('query')
    const result = await listSongs({ env: env(c), query })
    return c.json(result, 200)
  })

  app.openapi(GET('/songs/{id}',
    { params: SongIdInPath },
    {
      200: { content: { [TYPE_JSON]: { schema: Song } }, description: 'Successful response' },
      404: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Not found' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
    },
  ), async (c) => {
    const id = c.req.param('id') as SongId
    const result = await getSong(id, { env: env(c) })
    if (!result) return c.json({ errors: ['Song not found'], source: id }, 404)
    return c.json(result, 200)
  })

  app.openapi(POST('/songs',
    { body: { content: { [TYPE_JSON]: { schema: SongIn } } } },
    {
      201: { content: { [TYPE_JSON]: { schema: CreatedSongId } }, description: 'Successful response' },
      404: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Not found' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
      500: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Cannot save' },
    },
  ), async (c) => {
    const song = c.req.valid('json')
    try {
      const id = await createSong({ env: env(c), song })
      return c.json({ id }, 201, { Location: `/songs/${id}` })
    } catch (e) {
      console.error(e)
      return c.json({ errors: ['Cannot create a song'], source: String(e) }, 500)
    }
  })

  app.openapi(GET('/ranking',
    { query: RankingParam },
    {
      200: { content: { [TYPE_JSON]: { schema: Ranking } }, description: 'Successful response' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
    },
  ), async (c) => {
    const query = c.req.valid('query')
    const result = await rank({ env: env(c), query })
    return c.json(result, 200)
  })
}

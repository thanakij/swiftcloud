import type { OpenAPIHono } from '@hono/zod-openapi'
import type Redis from 'ioredis'

import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from 'hono/adapter'

import type { Id as AlbumId } from '@/types/albums'
import type { Env, PgClient, Variables } from '@/types/common'
import type { Id as SongId } from '@/types/songs'

import { RepositoryFactory } from '@/repositories/factory'
import { GET, POST } from '@/routers'
import { ListAlbumsParam, ListAlbums, AlbumIdInPath, Album, AlbumIn, CreatedAlbumId } from '@/schemas/albums'
import { Errors } from '@/schemas/common'
import { RankingParam, Ranking } from '@/schemas/ranking'
import { ListSongsParam, ListSongs, SongIdInPath, Song, SongIn, CreatedSongId } from '@/schemas/songs'
import { AlbumService } from '@/services/albums'
import { RankingService } from '@/services/ranking'
import { SongService } from '@/services/songs'

const TYPE_JSON = 'application/json'

function configService(client: PgClient | null, cache: Redis | null, environ: Env) {
  const logger = ['true', '1'].includes(environ.DEBUG ?? '')
  const db = client ? drizzle({ client, logger }) : null
  const albumRepository = RepositoryFactory.newAlbumRepository(db)
  const albumService = new AlbumService(albumRepository)
  const songRepository = RepositoryFactory.newSongRepository(db)
  const songService = new SongService(songRepository)
  const statRepository = RepositoryFactory.newStatRepository(db)
  const rankingService = new RankingService(statRepository, cache)
  return { albumService, songService, rankingService }
}

export function init(app: OpenAPIHono<{ Variables: Variables }>) {
  app.openapi(GET('/albums',
    { query: ListAlbumsParam },
    {
      200: { content: { [TYPE_JSON]: { schema: ListAlbums } }, description: 'Successful response' },
      422: { content: { [TYPE_JSON]: { schema: Errors } }, description: 'Validation error' },
    },
  ), async (c) => {
    const { albumService } = configService(c.get('db'), c.get('cache'), env(c))
    const query = c.req.valid('query')
    const result = await albumService.list(query)
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
    const { albumService } = configService(c.get('db'), c.get('cache'), env(c))
    const id = c.req.param('id') as AlbumId
    const result = await albumService.get(id)
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
    const { albumService } = configService(c.get('db'), c.get('cache'), env(c))
    const album = c.req.valid('json')
    try {
      const id = await albumService.create(album)
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
    const { songService } = configService(c.get('db'), c.get('cache'), env(c))
    const query = c.req.valid('query')
    const result = await songService.list(query)
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
    const { songService } = configService(c.get('db'), c.get('cache'), env(c))
    const id = c.req.param('id') as SongId
    const result = await songService.get(id)
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
    const { songService } = configService(c.get('db'), c.get('cache'), env(c))
    const song = c.req.valid('json')
    try {
      const id = await songService.create(song)
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
    const { rankingService } = configService(c.get('db'), c.get('cache'), env(c))
    const query = c.req.valid('query')
    const result = await rankingService.rank(query)
    return c.json(result, 200)
  })
}

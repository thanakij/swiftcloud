import { OpenAPIHono } from '@hono/zod-openapi'
import { env } from 'hono/adapter'
import { cors } from 'hono/cors'
import { html } from 'hono/html'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'

import type { Id as AlbumId } from '@/types/albums'
import type { Errors as ErrorsType } from '@/types/common'
import type { Id as SongId } from '@/types/songs'

import { listAlbums, getAlbum, createAlbum } from '@/controllers/albums'
import { rank } from '@/controllers/ranking'
import { listSongs, getSong, createSong } from '@/controllers/songs'
import { GET, POST } from '@/routers'
import { ListAlbumsParam, ListAlbums, AlbumIdInPath, Album, AlbumIn, CreatedAlbumId } from '@/schemas/albums'
import { Errors } from '@/schemas/errors'
import { RankingParam, Ranking } from '@/schemas/ranking'
import { ListSongsParam, ListSongs, SongIdInPath, Song, SongIn, CreatedSongId } from '@/schemas/songs'
import { formatZodErrors } from '@/utils'

const JSON = 'application/json'

const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      console.error(result.error)
      return c.json({
        errors: formatZodErrors(result.error),
        source: 'ZodError',
      } satisfies ErrorsType, 422)
    }
  },
})

// https://hono.dev/docs/api/exception#handling-httpexception
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({
      errors: [err.message ?? 'Unknown HTTPException error'],
      source: err.cause ? String(err.cause) : null,
    } satisfies ErrorsType, err.status)
  }
  // other errors
  return c.json({
    errors: [err.message ?? 'Internal server error'],
    source: err.cause ? String(err.cause) : null,
  } satisfies ErrorsType, 500)
})

// middlewares
// - https://hono.dev/docs/middleware/builtin/cors
// - https://hono.dev/docs/middleware/builtin/logger
app.use('*', cors())
app.use('*', logger())

app.openapi(GET('/albums',
  { query: ListAlbumsParam },
  {
    200: { content: { [JSON]: { schema: ListAlbums } }, description: 'Successful response' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), async (c) => {
  const query = c.req.valid('query')
  const result = await listAlbums({ env: env(c), query })
  return c.json(result, 200)
})

app.openapi(GET('/albums/{id}',
  { params: AlbumIdInPath },
  {
    200: { content: { [JSON]: { schema: Album } }, description: 'Successful response' },
    404: { content: { [JSON]: { schema: Errors } }, description: 'Not found' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), async (c) => {
  const id = c.req.param('id') as AlbumId
  const result = await getAlbum(id, { env: env(c) })
  if (!result) return c.json({ errors: ['Album not found'], source: id }, 404)
  return c.json(result, 200)
})

app.openapi(POST('/albums',
  { body: { content: { [JSON]: { schema: AlbumIn } } } },
  {
    201: { content: { [JSON]: { schema: CreatedAlbumId } }, description: 'Successful response' },
    404: { content: { [JSON]: { schema: Errors } }, description: 'Not found' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
    500: { content: { [JSON]: { schema: Errors } }, description: 'Cannot save' },
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
    200: { content: { [JSON]: { schema: ListSongs } }, description: 'Successful response' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), async (c) => {
  const query = c.req.valid('query')
  const result = await listSongs({ env: env(c), query })
  return c.json(result, 200)
})

app.openapi(GET('/songs/{id}',
  { params: SongIdInPath },
  {
    200: { content: { [JSON]: { schema: Song } }, description: 'Successful response' },
    404: { content: { [JSON]: { schema: Errors } }, description: 'Not found' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), async (c) => {
  const id = c.req.param('id') as SongId
  const result = await getSong(id, { env: env(c) })
  if (!result) return c.json({ errors: ['Song not found'], source: id }, 404)
  return c.json(result, 200)
})

app.openapi(POST('/songs',
  { body: { content: { [JSON]: { schema: SongIn } } } },
  {
    201: { content: { [JSON]: { schema: CreatedSongId } }, description: 'Successful response' },
    404: { content: { [JSON]: { schema: Errors } }, description: 'Not found' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
    500: { content: { [JSON]: { schema: Errors } }, description: 'Cannot save' },
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
    200: { content: { [JSON]: { schema: Ranking } }, description: 'Successful response' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), async (c) => {
  const query = c.req.valid('query')
  const result = await rank({ env: env(c), query })
  return c.json(result, 200)
})

app.doc('/openapi.json', (c) => ({
  info: {
    title: 'SwiftCloud',
    version: '1.0.0',
  },
  openapi: '3.0.0',
  servers: [
    {
      description: 'local',
      url: new URL(c.req.url).origin,
    },
  ],
}))

// Swagger UI
app.get('/docs', (c) => c.html(
  html`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="SwaggerUI" />
  <title>SwaggerUI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.18.2/swagger-ui.css" />
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@5.18.2/swagger-ui-bundle.js" crossorigin></script>
<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: '/openapi.json',
      dom_id: '#swagger-ui',
    });
  };
</script>
</body>
</html>
  `,
))

export { app }

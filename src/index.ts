import { OpenAPIHono } from '@hono/zod-openapi'
import { html } from 'hono/html'
import { HTTPException } from 'hono/http-exception'

import type { Errors as ErrorsType } from '@/types/common'

import { listSongs, getSong, createSong } from '@/controllers/songs'
import { GET, POST } from '@/routers'
import { Errors } from '@/schemas/errors'
import { ListSongsParams, ListSongs, GetSongParams, Song, SongIn, SongId } from '@/schemas/songs'
import { formatZodErrors } from '@/utils'

const JSON = 'application/json'

const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      console.error(result.error)
      return c.json({
        errors: formatZodErrors(result.error),
        source: 'ZodError',
      } as ErrorsType, 422)
    }
  },
})

// https://hono.dev/docs/api/exception#handling-httpexception
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({
      errors: [err.message ?? 'Unknown HTTPException error'],
      source: err.cause ? String(err.cause) : null,
    } as ErrorsType, err.status)
  }
  // other errors
  return c.json({
    errors: [err.message ?? 'Internal server error'],
    source: err.cause ? String(err.cause) : null,
  } as ErrorsType, 500)
})

app.openapi(GET('/songs',
  { query: ListSongsParams },
  {
    200: { content: { [JSON]: { schema: ListSongs } }, description: 'Successful response' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), listSongs)

app.openapi(GET('/songs/{id}',
  { params: GetSongParams },
  {
    200: { content: { [JSON]: { schema: Song } }, description: 'Successful response' },
    404: { content: { [JSON]: { schema: Errors } }, description: 'Not found' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), getSong)

app.openapi(POST('/songs',
  { body: { content: { [JSON]: { schema: SongIn } } } },
  {
    201: { content: { [JSON]: { schema: SongId } }, description: 'Successful response' },
    404: { content: { [JSON]: { schema: Errors } }, description: 'Not found' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
    500: { content: { [JSON]: { schema: Errors } }, description: 'Cannot save' },
  },
), createSong)

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

export default app

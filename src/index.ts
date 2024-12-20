import { OpenAPIHono } from '@hono/zod-openapi'
import { html } from 'hono/html'

import { getSong, createSong } from './controllers/songs'
import { GET, POST } from './routers'
import { Errors } from './schemas/errors'
import { SongId, SongIdIn, Song, SongIn } from './schemas/songs'

const JSON = 'application/json'

const app = new OpenAPIHono()

app.openapi(GET('/songs/{id}',
  { params: SongIdIn },
  {
    200: { content: { [JSON]: { schema: Song } }, description: 'Successful response' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
  },
), getSong)

app.openapi(POST('/songs',
  { body: { content: { [JSON]: { schema: SongIn } } } },
  {
    201: { content: { [JSON]: { schema: SongId } }, description: 'Successful response' },
    422: { content: { [JSON]: { schema: Errors } }, description: 'Validation error' },
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
app.get('/doc', (c) => c.html(
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

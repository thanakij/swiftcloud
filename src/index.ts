import { OpenAPIHono } from '@hono/zod-openapi'
import { env } from 'hono/adapter'
import { cors } from 'hono/cors'
import { html } from 'hono/html'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'

import type { Errors as ErrorsType, Variables } from '@/types/common'

import { init } from '@/app'
import { getCache } from '@/cache'
import { getDB } from '@/db/crud'
import { formatZodErrors } from '@/utils'

const app = new OpenAPIHono<{ Variables: Variables }>({
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

app.use(cors())
app.use(logger())

// maintain compatibility with edge runtimes
app.use(async (ctx, next) => {
  const db = getDB(env(ctx))
  const cache = getCache(env(ctx))
  try {
    ctx.set('db', db)
    ctx.set('cache', cache)
    await next()
  } finally {
    if (db) {
      await db.end()
    }
    if (cache) {
      await cache.disconnect()
    }
  }
})

init(app)

app.doc31('/openapi.json', (c) => ({
  info: {
    title: 'SwiftCloud',
    version: '1.0.0',
  },
  openapi: '3.1.0',
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

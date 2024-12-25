import { describe, expect, test } from 'vitest'

import { app } from './index'

describe('simple', () => {
  test('GET /ranking', async () => {
    const res = await app.request('/ranking')
    expect(res.status).toBe(200)
    expect(await res.text()).toContain('{"meta":{"total":')
  })
})

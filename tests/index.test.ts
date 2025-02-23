import { describe, expect, test } from 'bun:test'

import type { Ranking } from '@/types/ranking'

import app from '@/index'

describe('/ranking', () => {
  test('GET /ranking (top 10 songs)', async () => {
    const res = await app.request('/ranking')
    expect(res.status).toBe(200)
    const result: Ranking = await res.json()
    expect(result.meta.total).toBe(172)
    expect(result.meta.count).toBe(10)
    expect(result.data.length).toBe(result.meta.count)
    expect(result.data[0]?.data.name).toBe('Style')
    expect(result.data[0]?.stat.plays).toBe(307)
  })

  test('GET /ranking (by 10 albums)', async () => {
    const res = await app.request('/ranking?group=album')
    expect(res.status).toBe(200)
    const result: Ranking = await res.json()
    expect(result.meta.total).toBe(35)
    expect(result.meta.count).toBe(10)
    expect(result.data.length).toBe(result.meta.count)
    expect(result.data[0]?.data.name).toBe('Lover')
    expect(result.data[0]?.stat.plays).toBe(3130)
  })
})

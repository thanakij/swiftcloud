import Redis from 'ioredis'

import type { Env } from '@/types/common'

export function getCache(env: Env): Redis | null {
  return new Redis({
    host: env.CACHE_HOST ?? 'cache',
    port: env.CACHE_PORT ? parseInt(env.CACHE_PORT, 10) : 6379,
    password: env.CACHE_PASS,
    db: env.CACHE_DB ? parseInt(env.CACHE_DB, 10) : 0,
  })
}

export async function exists(cache: Redis, key: string): Promise<boolean> {
  if (!key) return false
  return await cache.exists(key) === 1
}

export async function get(cache: Redis, key: string): Promise<object | null> {
  if (!key) return null
  const data = await cache.get(key)
  if (!data) return null
  return JSON.parse(data)
}

export async function set(cache: Redis, key: string, value: object, ttl?: number): Promise<void> {
  if (!key || !value) return
  const data = JSON.stringify(value)
  if (ttl !== undefined) {
    await cache.set(key, data, 'EX', ttl)
  } else {
    await cache.set(key, data)
  }
}

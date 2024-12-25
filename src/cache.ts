import Redis from 'ioredis'

import type { Env } from '@/types/common'

//const EXPIRED_IN_SECONDS = 86400
const EXPIRED_IN_SECONDS = 10

export class Cache {
  private redis: Redis

  constructor(env: Env) {
    this.redis = new Redis({
      host: env.CACHE_HOST ?? 'localhost',
      port: env.CACHE_PORT ? parseInt(env.CACHE_PORT, 10) : 6379,
      password: env.CACHE_PASS,
      db: env.CACHE_DB ? parseInt(env.CACHE_DB, 10) : 0,
    })
  }

  async exists(key: string): Promise<boolean> {
    return (await this.redis.exists(key)) ? true : false
  }

  async get(key: string): Promise<object | null> {
    if (!key) return null
    const data = await this.redis.get(key)
    if (!data) return null
    return JSON.parse(data)
  }

  async set(key: string, value: object, expires: number = EXPIRED_IN_SECONDS): Promise<void> {
    if (!key || !value) return
    const data = JSON.stringify(value)
    await this.redis.set(key, data, 'EX', expires)
  }
}

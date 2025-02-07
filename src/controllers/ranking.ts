import type { Redis } from 'ioredis'

import type { StatRepository } from '@/repositories/stats'
import type { RankingParam } from '@/types/ranking'

import { exists, get, set } from '@/cache'

export async function rank(statRepository: StatRepository, cache: Redis | null, { query }: { query: RankingParam }) {
  console.log(query)
  const key = `from=${query.from},to=${query.to},month=${query.month},year=${query.year},` +
    `group=${query.group},offset=${query.offset},limit=${query.limit}`
  if (cache && await exists(cache, key)) {
    console.log('HIT')
    const data = await get(cache, key)
    return data
  }
  if (cache) console.log('MISS')
  const result = await statRepository.rank(query)
  if (cache) await set(cache, key, result)
  return result
}

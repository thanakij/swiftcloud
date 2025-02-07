import type Redis from 'ioredis'

import type { StatRepository } from '@/repositories/stats'
import type { RankingParam, Ranking } from '@/types/ranking'

import { exists, get, set } from '@/cache'

export class RankingService {
  private statRepository: StatRepository
  private cache: Redis | null

  public constructor(statRepository: StatRepository, cache: Redis | null) {
    this.statRepository = statRepository
    this.cache = cache
  }

  async rank(param: RankingParam): Promise<Ranking> {
    const key = `from=${param.from},to=${param.to},month=${param.month},year=${param.year},` +
      `group=${param.group},offset=${param.offset},limit=${param.limit}`
    // cache HIT
    if (this.cache && await exists(this.cache, key)) {
      console.log('HIT')
      return await get(this.cache, key) as Ranking
    }
    // cache MISS
    if (this.cache) console.log('MISS')
    const ranking = await this.statRepository.rank(param)
    if (this.cache) await set(this.cache, key, ranking)
    return ranking
  }
}

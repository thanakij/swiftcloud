import type { Env } from '@/types/common'
import type { RankingParam } from '@/types/ranking'

import { Cache } from '@/cache'
import { RepositoryFactory } from '@/repositories/factory'

export async function rank({ env, query }: { env: Env, query: RankingParam }) {
  console.log(query)
  const cache = new Cache(env)
  // eslint-disable-next-line @stylistic/max-len
  const key = `from=${query.from},to=${query.to},month=${query.month},year=${query.year},group=${query.group},offset=${query.offset},limit=${query.limit}`
  if (await cache.exists(key)) {
    console.log('HIT')
    const data = await cache.get(key)
    return data
  }
  console.log('MISS')
  const statRepository = RepositoryFactory.newStatRepository(env)
  const result = await statRepository.rank(query)
  await cache.set(key, result)
  return result
}

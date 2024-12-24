import type { Context } from 'hono'

import type { RankingParam } from '@/types/ranking'

import { StatRepositoryFactory } from '@/repositories/stats'

export async function rank(c: Context) {
  // @ts-expect-error not typed well
  const query: RankingParam = c.req.valid('query')
  console.log(query)
  const statRepository = StatRepositoryFactory.newInstance(c)
  return c.json(await statRepository.rank(query), 200)
}

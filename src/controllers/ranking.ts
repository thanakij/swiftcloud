import type { Context } from 'hono'

import type { RankingParam } from '@/types/ranking'

import { RepositoryFactory } from '@/repositories/factory'

export async function rank(c: Context) {
  // @ts-expect-error not typed well
  const query: RankingParam = c.req.valid('query')
  console.log(query)
  const statRepository = RepositoryFactory.newStatRepository(c)
  return c.json(await statRepository.rank(query), 200)
}

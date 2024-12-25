import type { Env } from '@/types/common'
import type { RankingParam } from '@/types/ranking'

import { RepositoryFactory } from '@/repositories/factory'

export async function rank({ env, query }: { env: Env, query: RankingParam }) {
  console.log(query)
  const statRepository = RepositoryFactory.newStatRepository(env)
  return await statRepository.rank(query)
}

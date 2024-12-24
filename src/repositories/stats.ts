import type { RankingParam, Ranking } from '@/types/ranking'

export interface StatRepository {
  rank: (param: RankingParam) => Promise<Ranking>
}

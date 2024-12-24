import type { NodePgDatabase } from 'drizzle-orm/node-postgres'

import type { StatRepository } from '@/repositories/stats'
import type { RankingParam, Ranking } from '@/types/ranking'

export class DbStatRepository implements StatRepository {
  private db: NodePgDatabase

  public constructor(db: NodePgDatabase) {
    this.db = db
  }

  async rank(param: RankingParam): Promise<Ranking> {
    throw new Error('Not implemented')
  }
}

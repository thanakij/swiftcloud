import { z } from 'zod'

import {
  GroupBy as _GroupBy,
  RankingParam as _RankingParam,
  DataWithStat as _DataWithStat,
  Ranking as _Ranking,
} from '@/schemas/ranking'

export type GroupBy = z.infer<typeof _GroupBy>
export type RankingParam = z.infer<typeof _RankingParam>
export type DataWithStat = z.infer<typeof _DataWithStat>
export type Ranking = z.infer<typeof _Ranking>

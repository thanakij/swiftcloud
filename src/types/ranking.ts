import type { z } from 'zod'

import type { GroupBy, RankingParam, DataWithStat, Ranking } from '@/schemas/ranking'

export type GroupBy = z.infer<typeof GroupBy>
export type RankingParam = z.infer<typeof RankingParam>
export type DataWithStat = z.infer<typeof DataWithStat>
export type Ranking = z.infer<typeof Ranking>

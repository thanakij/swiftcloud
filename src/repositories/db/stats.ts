import type { StatRepository } from '@/repositories/stats'
import type { DB } from '@/types/common'
import type { RankingParam, DataWithStat, Ranking } from '@/types/ranking'

import { getSongsByIds, getAlbumsByIds } from '@/db/crud'
import { countStats, rankStats } from '@/db/crud'
import { mapAlbum, getAlbumMap, mapSongBase, getSongMap } from '@/repositories/db/utils'

export class DbStatRepository implements StatRepository {
  private db: DB

  public constructor(db: DB) {
    this.db = db
  }

  async rank(param: RankingParam): Promise<Ranking> {
    const records = await rankStats(
      this.db,
      param.from,
      param.to,
      param.month,
      param.year,
      param.group,
      param.offset,
      param.limit,
    )
    console.log(records)
    const ids = records.map((each) => each.id)
    let data: DataWithStat[] = []
    if (param.group === 'album') {
      const albums = await getAlbumsByIds(this.db, ids)
      const albumsMap = getAlbumMap(albums)
      data = records.map((each) => ({ data: mapAlbum(albumsMap[each.id]), stat: { plays: each.n } }))
    } else {
      const songs = await getSongsByIds(this.db, ids)
      const songsMap = getSongMap(songs)
      data = records.map((each) => ({ data: mapSongBase(songsMap[each.id]), stat: { plays: each.n } }))
    }
    const total = await countStats(this.db, param.from, param.to, param.month, param.year, param.group)
    return { meta: { total, count: data.length }, data }
  }
}

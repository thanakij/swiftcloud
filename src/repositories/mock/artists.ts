import type { ArtistRepository } from '@/repositories/artists'
import type { Id, Artist } from '@/types/artists'

import { DATA } from '@/data/mock'

export class MockArtistRepository implements ArtistRepository {
  async get(id: Id): Promise<Artist | null> {
    const founds = DATA.filter((each) => each.artist.id === id)
    return founds.length > 0 ? founds[0].artist : null
  }
}

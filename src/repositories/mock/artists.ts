import type { ArtistRepository } from '@/repositories/artists'
import type { Id, Artist } from '@/types/artists'

import { SONGS } from '@/data/mock'

export class MockArtistRepository implements ArtistRepository {
  async get(id: Id): Promise<Artist | null> {
    const founds = SONGS.filter((each) => each.artist.id === id)
    return founds.length > 0 ? founds[0].artist : null
  }
}

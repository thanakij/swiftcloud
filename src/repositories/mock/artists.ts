import type { ArtistRepository } from '@/repositories/artists'
import type { Id, Artist } from '@/types/artists'

import { SONGS } from '@/data/mock'

export class MockArtistRepository implements ArtistRepository {
  async get(id: Id): Promise<Artist | null> {
    const founds = SONGS.filter((each) => each.artists.filter((artist) => artist.id === id).length > 0)
    return founds[0]?.artists
      .filter((artist) => artist.id === id).map((artist) => ({ id: artist.id, name: artist.name }))[0] // exclude 'role'
      ?? null
  }
}

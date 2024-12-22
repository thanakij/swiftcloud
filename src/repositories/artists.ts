import type { Id, Artist } from '@/types/artists'

export interface ArtistRepository {
  get: (id: Id) => Promise<Artist | null>
}

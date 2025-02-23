import type {
  ArtistDB,
  ArtistWithRoleDB,
  WriterDB,
  AlbumDB,
  NewAlbumDB,
  SongDB,
  NewSongDB,
  SongArtistsWithDataDB,
  SongWritersWithDataDB,
} from '@/db/types'
import type { Id as AlbumId, Album, AlbumIn } from '@/types/albums'
import type { Id as ArtistId, Artist } from '@/types/artists'
import type { Id as SongId, SongBase, Song, SongIn, ArtistWithRole } from '@/types/songs'
import type { Id as WriterId, Writer } from '@/types/writers'

export function mapArtist(obj: ArtistDB): Artist {
  return {
    id: obj.uuid as ArtistId,
    name: obj.name,
  }
}

export function mapArtistWithRole(obj: ArtistWithRoleDB): ArtistWithRole {
  return {
    id: obj.uuid as ArtistId,
    name: obj.name,
    role: obj.role,
  }
}

export function mapWriter(obj: WriterDB): Writer {
  return {
    id: obj.uuid as WriterId,
    name: obj.name,
  }
}

export function mapAlbum(obj: AlbumDB): Album {
  return {
    id: obj.uuid as AlbumId,
    name: obj.name,
  }
}

export function mapNewAlbumDB(obj: AlbumIn): NewAlbumDB {
  return {
    name: obj.name,
  }
}

export function getAlbumMap(albums: AlbumDB[]) {
  return albums.reduce<Record<string, AlbumDB>>((map, obj) => {
    map[obj.id] = obj
    return map
  }, {})
}

export function mapSong(
  obj: SongDB,
  artists: ArtistWithRoleDB[],
  writers: WriterDB[],
  album: AlbumDB | null,
): Song {
  return {
    id: obj.uuid as SongId,
    name: obj.name,
    artists: artists.map(mapArtistWithRole),
    writers: writers.map(mapWriter),
    album: album ? mapAlbum(album) : null,
    year: obj.released_year,
  }
}

export function mapSongBase(obj: SongDB): SongBase {
  return {
    id: obj.uuid as SongId,
    name: obj.name,
    year: obj.released_year,
  }
}

export function mapNewSongDB(obj: SongIn, album: AlbumDB | null): NewSongDB {
  return {
    name: obj.name,
    album_id: album ? album.id : null,
    released_year: obj.year,
  }
}

export function getSongMap(songs: SongDB[]) {
  return songs.reduce<Record<string, SongDB>>((map, obj) => {
    map[obj.id] = obj
    return map
  }, {})
}

export function getSongArtistsMap(songArtists: SongArtistsWithDataDB[]): Record<string, ArtistWithRoleDB[]> {
  return songArtists.reduce<Record<string, ArtistWithRoleDB[]>>((map, obj) => {
    const song_id = obj.song_artists.song_id
    if (!(song_id in map)) map[song_id] = []
    map[song_id]!.push({ ...obj.artists, role: obj.song_artists.role }) // preserve the sort order
    return map
  }, {})
}

export function getSongWritersMap(songWriters: SongWritersWithDataDB[]): Record<string, WriterDB[]> {
  return songWriters.reduce<Record<string, WriterDB[]>>((map, obj) => {
    const song_id = obj.song_writers.song_id
    if (!(song_id in map)) map[song_id] = []
    map[song_id]!.push(obj.writers) // preserve the sort order
    return map
  }, {})
}

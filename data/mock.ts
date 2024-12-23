import type { Id as AlbumId, Album } from '@/types/albums'
import type { Id as ArtistId } from '@/types/artists'
import type { Id as SongId, Song } from '@/types/songs'
import type { Id as WriterId } from '@/types/writers'

export const ALBUMS: Album[] = [
  {
    id: 'aeb1e256-9e86-4bd1-899b-93c1fd8b55e9' as AlbumId,
    name: 'Folklore',
  },
  {
    id: '20b37b28-4573-4be8-a784-520e2855bd0f' as AlbumId,
    name: 'Red',
  },
  {
    id: 'c3e60a06-deea-491b-8884-91f0af0bcd67' as AlbumId,
    name: 'Lover',
  },
  {
    id: '88593658-604a-4403-9598-e5c71ba5a502' as AlbumId,
    name: '1989',
  },
  {
    id: '1a41aa02-3b33-47a8-8e65-c7d67c186921' as AlbumId,
    name: 'Lover',
  },
  {
    id: '30116cbf-e65b-4e8d-a51d-be32c8e60dca' as AlbumId,
    name: 'Bigger',
  },
  {
    id: 'b833b1dc-1271-4311-9070-c28314165b11' as AlbumId,
    name: 'Speak Now',
  },
  {
    id: 'f5d26708-ba72-475b-ac29-82173fa5508c' as AlbumId,
    name: 'Beautiful Eyes',
  },
  {
    id: '92d929dc-e8b2-41a0-8431-edbc757b1697' as AlbumId,
    name: 'Cats: Highlights from the Motion Picture Soundtrack',
  },
  {
    id: '0cbfbc6b-46d9-4a90-9f7b-4bb155640316' as AlbumId,
    name: 'Fearless',
  },
  {
    id: 'ffdf68dd-8392-4b68-92e6-724ae134a2c8' as AlbumId,
    name: 'Speak Now World Tour – Live',
  },
  {
    id: '6bbc5e7d-3f34-4c5a-b5a3-f87f5a0c7c7a' as AlbumId,
    name: 'Live in No Shoes Nation',
  },
  {
    id: '1e91db14-e064-48ae-871a-47676b37c112' as AlbumId,
    name: 'Strange Clouds',
  },
  {
    id: '244a9e88-10de-4936-9cc4-fe35faa5c438' as AlbumId,
    name: 'Hope for Haiti Now',
  },
  {
    id: 'cfc2eea7-20c5-4136-b641-2dbc6c5f3162' as AlbumId,
    name: 'Reputation',
  },
  {
    id: '0eab691a-3587-487f-ad2f-cef5057ed844' as AlbumId,
    name: 'AT&T Team USA Soundtrack and Fearless',
  },
  {
    id: '30410cb0-e6a4-4300-a6f9-6c87627d370c' as AlbumId,
    name: 'Taylor Swift',
  },
  {
    id: 'a8b33361-2f59-42a2-ae0d-f7024eb49541' as AlbumId,
    name: 'Red (Deluxe edition)',
  },
  {
    id: 'a76bb5cd-abb4-4c8f-9ab2-38910d49e4e4' as AlbumId,
    name: 'Fearless (Platinum edition)',
  },
  {
    id: '52a7a6f1-808a-4f30-89f9-b7b351f79e83' as AlbumId,
    name: 'Hannah Montana: The Movie',
  },
  {
    id: '6b92ce36-a154-438f-b073-c9da3f4c2f0e' as AlbumId,
    name: 'The Hunger Games',
  },
  {
    id: '3316363d-a3a8-44d2-8846-e6c0048247ff' as AlbumId,
    name: 'Battle Studies',
  },
  {
    id: 'ee0ffc0c-952d-4ad4-a991-44c8cbe07317' as AlbumId,
    name: 'Two Lanes of Freedom',
  },
  {
    id: '0ae7889f-41ac-46d3-b32b-b5ca5dd2edb3' as AlbumId,
    name: 'Rhapsody Originals[c]',
  },
  {
    id: '0f2d8926-14af-4edf-8203-15079e8abf6e' as AlbumId,
    name: 'Fifty Shades Darker: Original Motion Picture Soundtrack',
  },
  {
    id: 'aae2ff00-2c2b-4535-8356-3aa0a67a1720' as AlbumId,
    name: 'Fearless (Platinum edition) and Valentine\'s Day: Soundtrack',
  },
  {
    id: 'a67e861b-6ec4-41d2-8a33-cbc0b880ff67' as AlbumId,
    name: 'Folklore (Physical Edition)',
  },
  {
    id: '2167770c-3b02-4b5e-866d-76ed6feec3a5' as AlbumId,
    name: '1989 (Deluxe edition)',
  },
  {
    id: '7487c079-a0a5-413c-a9ad-ffdab83b668f' as AlbumId,
    name: 'Spotify Singles',
  },
  {
    id: 'bdf11695-f3ab-4aa3-9a1b-e679e5cef4b2' as AlbumId,
    name: 'One Chance Soundtrack',
  },
  {
    id: '51d325fe-ff21-4a90-8d1f-5feea29948ec' as AlbumId,
    name: 'Valentine\'s Day[f]',
  },
  {
    id: '8c02aee2-3c96-4673-a5e5-81d919f729b6' as AlbumId,
    name: 'Love Drunk',
  },
  {
    id: 'e42a76fc-2924-4179-99d3-48588a7dc741' as AlbumId,
    name: 'iTunes Live from SoHo',
  },
]

export const SONGS: Song[] = [
  {
    id: '9635afbd-4956-4633-b03a-ada3b243d47e' as SongId,
    name: 'The 1',
    artist: {
      id: '88e446b3-c370-43aa-8962-c0dc316c298f' as ArtistId,
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '88e446b3-c370-43aa-8962-c0dc316c298f' as WriterId,
        name: 'Taylor Swift',
      },
      {
        id: 'fe46ccbc-f4ec-4ecd-b922-7430c31664c9' as WriterId,
        name: 'Aaron Dessner',
      },
    ],
    album: {
      id: 'aeb1e256-9e86-4bd1-899b-93c1fd8b55e9' as AlbumId,
      name: 'Folklore',
    },
    year: 2020,
  },
  {
    id: '4b950f5a-d85c-4869-b84a-6e081d671aab' as SongId,
    name: 'Begin Again',
    artist: {
      id: '88e446b3-c370-43aa-8962-c0dc316c298f' as ArtistId,
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '88e446b3-c370-43aa-8962-c0dc316c298f' as WriterId,
        name: 'Taylor Swift',
      },
    ],
    album: {
      id: '20b37b28-4573-4be8-a784-520e2855bd0f' as AlbumId,
      name: 'Red',
    },
    year: 2012,
  },
  {
    id: 'e3b26335-32d2-46ab-9cbb-8c0a7b868008' as SongId,
    name: 'I\'d Lie',
    artist: {
      id: '88e446b3-c370-43aa-8962-c0dc316c298f' as ArtistId,
      name: 'Taylor Swift',
    },
    writers: [
      {
        id: '88e446b3-c370-43aa-8962-c0dc316c298f' as WriterId,
        name: 'Taylor Swift',
      },
    ],
    album: null,
    year: 2006,
  },
]

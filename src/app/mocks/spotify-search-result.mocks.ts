import { Artist, Album, Track, SpotifySearchResult } from '../features/search/interfaces/search.interfaces';

export const mockArtists: Artist[] = [
  {
    external_urls: { spotify: 'https://open.spotify.com/artist/1' },
    followers: { href: null, total: 1000 },
    genres: ['pop'],
    href: 'https://api.spotify.com/v1/artists/1',
    id: '1',
    images: [{ height: 640, url: 'https://i.scdn.co/image/ab6761610000', width: 640 }],
    name: 'Artist 1',
    popularity: 80,
    type: 'artist',
    uri: 'spotify:artist:1'
  }
];

export const mockAlbums: Album[] = [
  {
    album_type: 'album',
    artists: [mockArtists[0]],
    available_markets: ['US'],
    external_urls: { spotify: 'https://open.spotify.com/album/1' },
    href: 'https://api.spotify.com/v1/albums/1',
    id: '1',
    images: [{ height: 640, url: 'https://i.scdn.co/image/ab6761610000', width: 640 }],
    name: 'Album 1',
    release_date: '2022-01-01',
    release_date_precision: 'day',
    total_tracks: 10,
    type: 'album',
    uri: 'spotify:album:1'
  }
];

export const mockTracks: Track[] = [
  {
    album: mockAlbums[0],
    artists: [mockArtists[0]],
    available_markets: ['US'],
    disc_number: 1,
    duration_ms: 180000,
    explicit: false,
    external_ids: { isrc: 'US1234567890' },
    external_urls: { spotify: 'https://open.spotify.com/track/1' },
    href: 'https://api.spotify.com/v1/tracks/1',
    id: '1',
    is_local: false,
    name: 'Track 1',
    popularity: 70,
    preview_url: 'https://p.scdn.co/mp3-preview/ab1234567890',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:1'
  }
];

export const mockSpotifySearchResult: SpotifySearchResult = {
  albums: {
    href: 'https://api.spotify.com/v1/search?q=album%3Aname&type=album&market=US&limit=10&offset=0',
    items: mockAlbums,
    limit: 10,
    next: '',
    offset: 0,
    previous: null,
    total: 1
  },
  artists: {
    href: 'https://api.spotify.com/v1/search?q=artist%3Aname&type=artist&market=US&limit=10&offset=0',
    items: mockArtists,
    limit: 10,
    next: '',
    offset: 0,
    previous: null,
    total: 1
  },
  tracks: {
    href: 'https://api.spotify.com/v1/search?q=track%3Aname&type=track&market=US&limit=10&offset=0',
    items: mockTracks,
    limit: 10,
    next: '',
    offset: 0,
    previous: null,
    total: 1
  }
};

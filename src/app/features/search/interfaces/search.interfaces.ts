
export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Artists {
  href: string;
  items: Artist[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Albums {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Tracks {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIds {
  isrc: string;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface SpotifySearchResult {
  albums: Albums;
  artists: Artists;
  tracks: Tracks;
}


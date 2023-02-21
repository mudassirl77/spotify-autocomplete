import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchConstants } from '../../constants/search.constants';
import { Album, Artist, SpotifySearchResult, Track } from '../../interfaces/search.interfaces';
import { SpotifyPublicHttpService } from '../../services/spotify-public.http.service';

@Component({
  selector: 'spotify-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss'],
})
export class AutocompleteSearchComponent {
  public query: string | null = '';
  public resultLimit: number = SearchConstants.initialResultLimit;
  public artists: Artist[] = [];
  public albums: Album[] = [];
  public tracks: Track[] = [];

  constructor(private spotifyPublicHttpService: SpotifyPublicHttpService) { }

  public search(query: string | null): void {
    this.query = query;
    if (query) {
      this.spotifyPublicHttpService.searchItems(query, this.resultLimit)
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((spotifySearchResult: SpotifySearchResult) => {
            this.artists = spotifySearchResult.artists.items;
            this.albums = spotifySearchResult.albums.items;
            this.tracks = spotifySearchResult.tracks.items;
            return [];
          })
        ).subscribe();
    } else {
      this.artists = [];
      this.albums = [];
      this.tracks = [];
    }
  }

  public showMoreResults(): void {
    this.resultLimit += SearchConstants.initialResultLimit;
    this.search(this.query);
  }
}

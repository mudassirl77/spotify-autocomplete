import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Album, Artist, SpotifySearchResult, Track } from '../../interfaces/search.interfaces';
import { SpotifyPublicHttpService } from '../../services/spotify-public.http.service';

@Component({
  selector: 'spotify-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss']
})
export class AutocompleteSearchComponent {
  public query: string = '';
  public loading: boolean = false;
  public artists: Artist[] = [];
  public albums: Album[] = [];
  public tracks: Track[] = [];

  constructor(private spotifyPublicHttpService: SpotifyPublicHttpService) { }

  public search() {
    if (this.query) {
      this.loading = true;
      this.spotifyPublicHttpService.searchItems(this.query)
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          switchMap((response: SpotifySearchResult) => {
            this.artists = response.artists.items;
            this.albums = response.albums.items;
            this.tracks = response.tracks.items;
            this.loading = false;
            return [];
          })
        ).subscribe();
    } else {
      this.artists = [];
      this.albums = [];
      this.tracks = [];
    }
  }
}

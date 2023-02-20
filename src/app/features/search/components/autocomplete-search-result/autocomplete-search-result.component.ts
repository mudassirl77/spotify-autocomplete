import { Component, Input } from '@angular/core';
import { Album, Artist, Track } from '../../interfaces/search.interfaces';

@Component({
  selector: 'spotify-autocomplete-search-result',
  templateUrl: './autocomplete-search-result.component.html',
  styleUrls: ['./autocomplete-search-result.component.scss']
})
export class AutocompleteSearchResultComponent {
  @Input() artists: Artist[] = [];
  @Input() albums: Album[] = [];
  @Input() tracks: Track[] = [];
}

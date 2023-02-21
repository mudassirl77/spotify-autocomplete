import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album, Artist, Track } from '../../interfaces/search.interfaces';

@Component({
  selector: 'spotify-autocomplete-search-result',
  templateUrl: './autocomplete-search-result.component.html'
})
export class AutocompleteSearchResultComponent {
  @Input() public artists: Artist[] = [];
  @Input() public albums: Album[] = [];
  @Input() public tracks: Track[] = [];

  @Output() public showMoreClicked: EventEmitter<void> = new EventEmitter();
}

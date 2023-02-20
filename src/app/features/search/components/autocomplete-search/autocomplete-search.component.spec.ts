import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SpotifySearchResult } from '../../interfaces/search.interfaces';
import { SpotifyPublicHttpService } from '../../services/spotify-public.http.service';
import { of } from 'rxjs';
import { AutocompleteSearchComponent } from './autocomplete-search.component';

describe('AutocompleteSearchComponent', () => {
  let component: AutocompleteSearchComponent;
  let fixture: ComponentFixture<AutocompleteSearchComponent>;
  let mockSpotifyPublicHttpService: jasmine.SpyObj<SpotifyPublicHttpService>;

  beforeEach(async () => {
    mockSpotifyPublicHttpService = jasmine.createSpyObj(SpotifyPublicHttpService, ['searchItems']);
    await TestBed.configureTestingModule({
      declarations: [AutocompleteSearchComponent],
      imports: [FormsModule],
      providers: [
        { provide: SpotifyPublicHttpService, useValue: mockSpotifyPublicHttpService },
      ]
    })
      .compileComponents();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should clear results if query is empty', () => {
  //   component.artists = [{ name: 'Artist 1' }];
  //   component.albums = [{ name: 'Album 1' }];
  //   component.tracks = [{ name: 'Track 1' }];

  //   component.query = '';

  //   component.search();

  //   expect(component.artists).toEqual([]);
  //   expect(component.albums).toEqual([]);
  //   expect(component.tracks).toEqual([]);
  // });

  it('should call spotifyPublicHttpService.searchItems when query is not empty', () => {
    const query = 'query';
    component.query = query;

    mockSpotifyPublicHttpService.searchItems.and.returnValue(of({
      artists: { items: [{ name: 'Artist 1' }] },
      albums: { items: [{ name: 'Album 1' }] },
      tracks: { items: [{ name: 'Track 1' }] },
    } as SpotifySearchResult));

    component.search();

    expect(mockSpotifyPublicHttpService.searchItems).toHaveBeenCalledWith(query);
  });

  // it('should update results when searchItems returns data', () => {
  //   const response: SpotifySearchResult = {
  //     artists: { items: [{ name: 'Artist 1' }] },
  //     albums: { items: [{ name: 'Album 1' }] },
  //     tracks: { items: [{ name: 'Track 1' }] },
  //   };
  //   mockSpotifyPublicHttpService.searchItems.and.returnValue(of(response));

  //   component.query = 'query';
  //   component.artists = [];
  //   component.albums = [];
  //   component.tracks = [];

  //   component.search();

  //   expect(component.artists).toEqual(response.artists.items);
  //   expect(component.albums).toEqual(response.albums.items);
  //   expect(component.tracks).toEqual(response.tracks.items);
  // });
});

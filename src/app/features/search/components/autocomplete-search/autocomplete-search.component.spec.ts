import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AutocompleteSearchComponent } from './autocomplete-search.component';
import { SearchConstants } from '../../constants/search.constants';
import { SpotifyPublicHttpService } from '../../services/spotify-public.http.service';
import { of } from 'rxjs';
import { mockSpotifySearchResult } from 'src/app/mocks/spotify-search-result.mocks';

describe('AutocompleteSearchComponent', () => {
  let component: AutocompleteSearchComponent;
  let fixture: ComponentFixture<AutocompleteSearchComponent>;
  let spotifyPublicHttpServiceSpy: jasmine.SpyObj<SpotifyPublicHttpService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SpotifyPublicHttpService', ['searchItems']);

    await TestBed.configureTestingModule({
      declarations: [AutocompleteSearchComponent],
      providers: [
        { provide: SpotifyPublicHttpService, useValue: spy }
      ]
    })
      .compileComponents();

    spotifyPublicHttpServiceSpy = TestBed.inject(SpotifyPublicHttpService) as jasmine.SpyObj<SpotifyPublicHttpService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSearchComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset search results when query is null', () => {
    component.artists = [{ name: 'Artist 1' }] as any;
    component.albums = [{ name: 'Album 1' }] as any;
    component.tracks = [{ name: 'Track 1' }] as any;

    component.search(null);

    expect(component.artists).toEqual([]);
    expect(component.albums).toEqual([]);
    expect(component.tracks).toEqual([]);
  });

  it('should update search results when query is not null', fakeAsync(() => {
    const spotifySearchResult = { ...mockSpotifySearchResult };

    spotifyPublicHttpServiceSpy.searchItems.and.returnValue(of(spotifySearchResult));

    component.search('query');

    tick(500);

    expect(spotifyPublicHttpServiceSpy.searchItems).toHaveBeenCalledWith('query', SearchConstants.initialResultLimit);
    expect(component.artists).toEqual(spotifySearchResult.artists.items);
    expect(component.albums).toEqual(spotifySearchResult.albums.items);
    expect(component.tracks).toEqual(spotifySearchResult.tracks.items);
  }));

  it('should increase result limit and search for more results', () => {
    component.resultLimit = SearchConstants.initialResultLimit;
    component.query = 'query';

    spyOn(component, 'search');

    component.showMoreResults();

    expect(component.resultLimit).toBe(SearchConstants.initialResultLimit * 2);
    expect(component.search).toHaveBeenCalledWith('query');
  });
});

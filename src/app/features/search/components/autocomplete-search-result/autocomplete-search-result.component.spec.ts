import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSearchResultComponent } from './autocomplete-search-result.component';

describe('AutocompleteSearchResultComponent', () => {
  let component: AutocompleteSearchResultComponent;
  let fixture: ComponentFixture<AutocompleteSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteSearchResultComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AutocompleteSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three columns with headings', () => {
    const headings = fixture.nativeElement.querySelectorAll('h3');
    expect(headings.length).toBe(3);
    expect(headings[0].textContent).toBe('Artists');
    expect(headings[1].textContent).toBe('Albums');
    expect(headings[2].textContent).toBe('Tracks');
    const columns = fixture.nativeElement.querySelectorAll('.col-sm-4');
    expect(columns.length).toBe(3);
  });

  it('should render the correct number of Spotify cards for each section', () => {
    const artistCards = fixture.nativeElement.querySelectorAll('.col-sm-4:nth-of-type(1) spotify-card');
    expect(artistCards.length).toBe(component.artists.length);
    const albumCards = fixture.nativeElement.querySelectorAll('.col-sm-4:nth-of-type(2) spotify-card');
    expect(albumCards.length).toBe(component.albums.length);
    const trackCards = fixture.nativeElement.querySelectorAll('.col-sm-4:nth-of-type(3) spotify-card');
    expect(trackCards.length).toBe(component.tracks.length);
  });

  it('should pass the correct data to each Spotify card', () => {
    const artistCards = fixture.nativeElement.querySelectorAll('.col-sm-4:nth-of-type(1) spotify-card');
    for (let i = 0; i < artistCards.length; i++) {
      const card = artistCards[i];
      const artist = component.artists[i];
      expect(card.type).toBe(artist.type);
      expect(card.title).toBe(artist.name);
      expect(card.imageUrl).toBe(artist.images[2]?.url);
    }
    const albumCards = fixture.nativeElement.querySelectorAll('.col-sm-4:nth-of-type(2) spotify-card');
    for (let i = 0; i < albumCards.length; i++) {
      const card = albumCards[i];
      const album = component.albums[i];
      expect(card.type).toBe(album.type);
      expect(card.title).toBe(album.name);
      expect(card.imageUrl).toBe(album.images[2]?.url);
    }
    const trackCards = fixture.nativeElement.querySelectorAll('.col-sm-4:nth-of-type(3) spotify-card');
    for (let i = 0; i < trackCards.length; i++) {
      const card = trackCards[i];
      const track = component.tracks[i];
      expect(card.type).toBe(track.type);
      expect(card.title).toBe(track.name);
      expect(card.imageUrl).toBe(track.album.images[2]?.url);
      expect(card.previewUrl).toBe(track.preview_url);
    }
  });
});

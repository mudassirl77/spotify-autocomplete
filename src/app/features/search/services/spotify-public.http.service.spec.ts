import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpotifyPublicHttpService } from './spotify-public.http.service';

describe('SpotifyPublicService', () => {
  let service: SpotifyPublicHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpotifyPublicHttpService]
    });
    service = TestBed.inject(SpotifyPublicHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

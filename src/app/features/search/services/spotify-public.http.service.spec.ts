import { TestBed } from '@angular/core/testing';

import { SpotifyPublicHttpService } from './spotify-public.http.service';

describe('SpotifyPublicService', () => {
  let service: SpotifyPublicHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyPublicHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

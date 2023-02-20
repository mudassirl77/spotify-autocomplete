import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHandling } from 'src/app/shared/utils/error-handling.util';
import { SearchConstants } from '../constants/search.constants';
import { SpotifySearchResult } from '../interfaces/search.interfaces';

@Injectable()
export class SpotifyPublicHttpService {
  constructor(private httpClient: HttpClient) { }

  public searchItems(query: string): Observable<SpotifySearchResult> {
    return this.httpClient.get<SpotifySearchResult>(`${SearchConstants.spotifyPublicBaseUrl}/search?q=${query}&type=artist,album,track&limit=5`).pipe(
      catchError(err => ErrorHandling.handleError(err))
    );
  }
}

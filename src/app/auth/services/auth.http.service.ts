import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ErrorHandling } from 'src/app/shared/utils/error-handling.util';
import { AuthContants } from '../constants/auth.constant';
import { CodeGeneration } from '../utils/code-generation.util';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  constructor(private httpClient: HttpClient) { }

  public authorizeUser(): void {
    const scope = 'user-read-private user-read-email';
    const state = CodeGeneration.generateRandomString(16);
    sessionStorage.setItem(AuthContants.state, state);
    const url = `${AuthContants.spotifyAccountAuthorizeBaseUrl}?
client_id=${AuthContants.clientId}&
response_type=code&
redirect_uri=${AuthContants.redirectUri}&
state=${state}&
scope=${scope}`;

    window.location.href = url;

  }

  public getAccessToken(code: string) {

    const headers = new HttpHeaders({
      Authorization: `Basic ${Buffer.from(AuthContants.clientId + ':' + AuthContants.clientSecret).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', AuthContants.redirectUri)
      .set('client_id', AuthContants.clientId)
      .set('client_secret', AuthContants.clientSecret);

    return this.httpClient.post<any>(AuthContants.spotifyAccountTokenBaseUrl, body, { headers }).pipe(
      catchError(err => ErrorHandling.handleError(err))
    );;
  }
}

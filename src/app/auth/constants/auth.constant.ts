export class AuthContants {
 // Normally we will retrieve these sensitive keys from the backend as a security measure
  static readonly clientId = 'af461ac5ee994bbd879e97ac5f1e5b8f';
  static readonly clientSecret = '9af8c7484b394a939ff9bf0eeec54156';
  static readonly accessToken = 'accessToken';
  static readonly refreshToken = 'refreshToken';
  static readonly codeVerifier = 'codeVerifier';
  static readonly requestedUrl = 'requestedUrl';
  static readonly state = 'state';
  static readonly sha256 = 'S256';
  static readonly spotifyAccountTokenBaseUrl = 'https://accounts.spotify.com/api/token';
  static readonly spotifyAccountAuthorizeBaseUrl = 'https://accounts.spotify.com/authorize';
  static readonly redirectUri = 'http://localhost:4200/callback';
}

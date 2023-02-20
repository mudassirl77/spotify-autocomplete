import * as sha256 from 'js-sha256';
export class CodeGeneration {
  public static generateRandomString(length: number): string {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    while (length--) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
  }

  public static generateCodeVerifier(): string {
    let length = 128;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~';
    let result = '';
    while (length--) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
  }

  public static generateCodeChallenge(codeVerifier: string): string {
    const sha256code = sha256.sha256(codeVerifier);
    return btoa(sha256code).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthContants } from '../../constants/auth.constant';
import { AuthHttpService } from '../../services/auth.http.service';

@Component({
  selector: 'spotify-callback',
  template: '',
})
export class SpotifyCallbackComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authHttpService: AuthHttpService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const code = params.code;
      if (code) {
        this.authHttpService.getAccessToken(code).subscribe((res: any) => {
          const accessToken = res.access_token;
          const refreshToken = res.refresh_token;

          if (accessToken && refreshToken) {
            localStorage.setItem(AuthContants.accessToken, accessToken);
            localStorage.setItem(AuthContants.refreshToken, refreshToken);

            const redirectUrl = sessionStorage.getItem(AuthContants.requestedUrl);
            if (!redirectUrl) {
              this.router.navigate(['/']);
            } else {
              this.router.navigate([redirectUrl]);
            }
          }
        });
      }
    });
  }

}

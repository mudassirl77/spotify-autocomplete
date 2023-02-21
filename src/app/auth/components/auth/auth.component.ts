import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthContants } from '../../constants/auth.constant';
import { AuthHttpService } from '../../services/auth.http.service';

@Component({
  selector: 'spotify-auth',
  template: '',
})
export class AuthComponent {

  constructor(
    private authHttpService: AuthHttpService,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.authHttpService.authorizeUser();
    activatedRoute.queryParams.subscribe(params => {
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

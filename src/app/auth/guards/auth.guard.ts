import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthContants } from '../constants/auth.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.checkLogin()) {
      return true;
    } else {
      sessionStorage.setItem('requestedUrl', state.url.toString());
      this.router.navigate(['/auth']);
      return false;
    }
  }

  private checkLogin(): boolean {
    if (environment.production) {
      return !!localStorage.getItem(AuthContants.accessToken);
    } else {
      return true;
    }
  }
}

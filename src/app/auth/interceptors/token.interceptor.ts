import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (
      !(
        request.url.includes('token') ||
        request.url.includes('authorize')
      )) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
      });
    }
    return next.handle(request);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { AuthHttpService } from './services/auth.http.service';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SpotifyCallbackComponent } from './components/spotify-callback/spotify-callback.component';



@NgModule({
  declarations: [
    AuthComponent,
    SpotifyCallbackComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthHttpService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

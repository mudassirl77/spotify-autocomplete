import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchPageComponent } from './features/search/pages/search-page/search-page.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { SpotifyCallbackComponent } from './auth/components/spotify-callback/spotify-callback.component';

const routes: Routes = [
  {
    path: 'search',
    canActivate: [AuthGuard],
    component: SearchPageComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'callback',
    component: SpotifyCallbackComponent,
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

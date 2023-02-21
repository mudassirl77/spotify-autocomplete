import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyPublicHttpService } from './services/spotify-public.http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AutocompleteSearchComponent } from './components/autocomplete-search/autocomplete-search.component';
import { CardComponent } from './components/card/card.component';
import { AutocompleteSearchResultComponent } from './components/autocomplete-search-result/autocomplete-search-result.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AutocompleteSearchComponent,
    SearchPageComponent,
    CardComponent,
    AutocompleteSearchResultComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [SpotifyPublicHttpService],
  exports: [SearchPageComponent]
})
export class SearchModule { }

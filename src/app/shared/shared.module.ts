import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/ui/card/card.component';
import { InputSearchComponent } from './components/ui/input-search/input-search.component';
import { LocalStorageService } from './services/local-storage.service';



@NgModule({
  declarations: [
    CardComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [LocalStorageService]
})
export class SharedModule { }

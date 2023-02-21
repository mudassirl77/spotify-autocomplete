import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { GridHeaderComponent } from './components/ui/grid-header/grid-header.component';
import { IconComponent } from './components/ui/icon/icon.component';
import { InputSearchComponent } from './components/ui/input-search/input-search.component';

@NgModule({
  declarations: [
    InputSearchComponent,
    NavbarComponent,
    GridHeaderComponent,
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    InputSearchComponent,
    NavbarComponent,
    GridHeaderComponent,
    IconComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared.routing';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { NavbarComponent } from './menu/navbar.component';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedRoutingModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    PaginationComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}

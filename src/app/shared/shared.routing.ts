import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

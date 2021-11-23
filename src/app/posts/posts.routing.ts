import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts-list/posts.component';

const routes : Routes = [
  { path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

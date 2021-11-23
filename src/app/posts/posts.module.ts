import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts.routing';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts-list/posts.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
  imports: [
    BrowserModule,
    PostsRoutingModule,
    SharedModule
  ],
  declarations: [
    PostsComponent,
    PostCommentComponent
  ],
  exports: [
    PostsComponent,
    PostCommentComponent
  ]
})
export class PostsModule {
}

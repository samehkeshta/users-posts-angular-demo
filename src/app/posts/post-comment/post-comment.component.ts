import { Component, Input } from '@angular/core';
import { PostComment } from '../models/posts.model';

@Component({
  selector: 'app-post-comment',
  template: `
    <div class="media">
      <img [src]="getImageUrl(comment.id)" class="mr-3" alt="...">
      <div class="media-body">
        <h5 class="mt-0">{{comment.name}}</h5>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  `,
  styles: [`
    .media > img {
      border-radius: 50px;
    }
    .media {
      margin-bottom: 10px;
    }
  `]
})
export class PostCommentComponent {
  @Input() comment = new PostComment();

  getImageUrl(id: number) {
    return 'http://lorempixel.com/80/80/people?'+ id;
  }
}

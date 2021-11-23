import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post, PostComment } from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  _url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private _httpClient: HttpClient) {
  }

  getPosts(filter?: any) {
    var url = this._url;

    if (filter && filter.userId) {
      url += '?userId=' + filter.userId;
    }

    return this._httpClient.get<Post[]>(url);
  }

  getPostComments(id: number) {
    return this._httpClient.get<PostComment[]>(this.getPostUrl(id) + '/comments');
  }

  private getPostUrl(postId: number) {
    return this._url + "/" + postId;
  }
}

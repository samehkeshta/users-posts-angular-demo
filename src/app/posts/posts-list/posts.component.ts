import { Component } from '@angular/core';
import { User } from 'src/app/users/models/users.model';
import { UserService } from 'src/app/users/services/user.service';
import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [`posts.component.css`]
})
export class PostsComponent {
  posts: Post[] = [];
  arePostsLoaded = false;

  currentPost = new Post();
  arePostCommentsLoaded = false;

  users: User[] = [];

  pageSize = 10;
  pagedPosts: Post[] = [];

  constructor(
    private _postsService: PostsService,
    private _userService: UserService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  private loadUsers() {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  private loadPosts(filter?: any) {
    this._postsService.getPosts(filter).subscribe(data => {
      this.arePostsLoaded = true;
      this.posts = data;
      this.loadPagedPosts(data, 0, this.pageSize);
    });
  }

  getPostDetails(post: Post) {
    this.currentPost = post;

    this._postsService.getPostComments(post.id).subscribe(data => {
      this.arePostCommentsLoaded = true;
      this.currentPost.comments = data;
    });
  }

  reloadPosts(filter: any) {
    this.arePostsLoaded = false;
    this.currentPost = new Post();

    this.loadPosts(filter);
  }

  onPageChanged(pageNumber: any) {
    var fromIndex = (pageNumber - 1) * this.pageSize;

    this.loadPagedPosts(this.posts, fromIndex, pageNumber * this.pageSize);
  }

  private loadPagedPosts(posts: Post[], fromIndex: number, toIndex: number) {
    this.pagedPosts = posts.slice(fromIndex, toIndex);
  }
}

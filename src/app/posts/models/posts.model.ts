export class Post {
  id: number = 0;
  title: string = '';
  body: string = '';
  userId: number = 0;
  comments?: PostComment[];
}

export class PostComment {
  postId: number = 0;
  id: number = 0;
  name: string = '';
  email: string = '';
  body: string = '';
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];

  private postsUpdated = new Subject<Post[]>();
  public postsObsever$ = this.postsUpdated.asObservable();


  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<{ message: string, posts: Post[] }>(`${this.rootUrl}/api/posts`).subscribe((postData) => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts])
    });
  }

  addPosts(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.http.post<{ message: string }>(`${this.rootUrl}/api/posts`, post).subscribe((responseData) => {
      console.log(responseData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts])
    });
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Posts } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Posts[] = [];

  private postsUpdated = new Subject<Posts[]>();
  public postsObsever$ = this.postsUpdated.asObservable();
  

  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<{ message: string, posts: Posts[] }>(`${this.rootUrl}/api/posts`).subscribe((postData) => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts])
    });
  }



}

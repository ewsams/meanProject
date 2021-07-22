import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Posts } from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  loaded = false;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts();
    this.postsService.postsObsever$.subscribe(posts => {
      this.posts = posts;
      this.loaded = true;
    });
  }

}

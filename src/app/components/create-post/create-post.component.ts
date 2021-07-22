import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  submitPost = (title: string, content: string) => {
    this.postService.addPosts(title,content);
  }

}

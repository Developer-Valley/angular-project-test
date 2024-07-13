import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostComponent } from "../post/post.component";
import { BlogCardComponent } from "../blog-card/blog-card.component";
import { BlogService } from '../../services/blog.service';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PostComponent, BlogCardComponent, NgFor]
})
export class HomeComponent implements OnInit, OnDestroy{
  posts: Post[] = [];
  subscription: Subscription = new Subscription();

  constructor(private blogService: BlogService) {}
    
  ngOnInit(): void {
    this.subscription = this.blogService.loadPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

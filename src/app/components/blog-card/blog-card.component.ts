import { Component, Input } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() post!: Post
  likes = 0

  constructor() {}

  like() {
    this.likes++;
  }
}

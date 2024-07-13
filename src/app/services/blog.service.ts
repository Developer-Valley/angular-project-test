import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  postsUrl: string = '/posts.json';

  constructor(private http: HttpClient) {}

  loadPosts(): Observable<any> {
    return this.http.get(this.postsUrl);
  }
}

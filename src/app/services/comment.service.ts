import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: Comment[] = [];

  constructor( private http:HttpClient) {


  }
  importData(): Observable<Comment[]> {

    const jsonUrl = 'assets/comments.json';

    return this.http.get<Comment[]>(jsonUrl);
  }
  getComments(): Observable<Comment[]> {
    // Mevcut yorumları döndür
    if (this.comments.length > 0) {
      return of(this.comments);
    }
    return this.importData();
  }

  // getComments(): Observable<Comment[]> {

  //   return of(this.comments);
  // }


  addComment(comment: Comment): Observable<void> {

    this.comments.push(comment);
    return of(undefined);
  }

  deleteComment(comment: Comment): void {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }


  updateComment(updatedComment: Comment): void {
    const index = this.comments.findIndex(comment => comment.id === updatedComment.id);
    if (index !== -1) {
      this.comments[index] = updatedComment;
    }
  }
  getCommentById(commentId: number): Comment | undefined {
    return this.comments.find(comment => comment.id === commentId);
  }

  // generateUniqueId(): number {
  //
  //   return Math.floor(Math.random() * 1000);
  // }

}


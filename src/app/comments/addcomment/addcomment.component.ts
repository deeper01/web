import { Component, Injectable, OnInit,Output,EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment.model';
@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})


export class AddCommentComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }
  @Output() commentAdded = new EventEmitter<Comment>(); // Yeni olay tanımı

  newComment: Comment = { id: 0, text: '', author: '', date: new Date() };


  addComment(): void {
    const newComment: Comment = {
      id: 0,
      text: this.newComment.text,
      author: this.newComment.author,
      date: new Date()
    };
    this.commentAdded.emit(newComment); // Yorum eklemek için olayı emit et
    this.newComment = { id: 0, text: '', author: '', date: new Date() }; // Formu temizle
  }


  // addComment(): void {
  //   const newComment: Comment = {
  //     id: 0,
  //     text: this.newComment.text,
  //     author: this.newComment.author,
  //     date: new Date()
  //   };
  //   this.commentService.addComment(this.newComment)
  //     .subscribe(
  //       () => {

  //         console.log('Yorum eklendi.');
  //         this.newComment = { id:0,text: '', author: '',date: new Date()}; // Formu temizle
  //       },
  //       (error) => {
  //         console.error('Yorum ekleme hatası:', error);
  //       }
  //     );
  //     this.addCommented.emit(this.newComment);
  // }
}

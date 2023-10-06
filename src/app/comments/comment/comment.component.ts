import { Component ,OnInit} from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment.model';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})


export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  loading: boolean = true;

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {

      this.loading = true; // Veri alımı başladığında loading'i true
      this.commentService.getComments()
        .subscribe(
          (comments) => {
            this.comments = comments;
            this.loading = false; // Veri alımı tamamlandığında loading'i false
          },
          (error) => {
            console.error('Yorumları alma hatası:', error);
            this.loading = false; // Hata oluştuğunda da loading'i false
          }
        );
    }
    
}

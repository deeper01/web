
import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';
@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['./editcomment.component.css']
})


export class EditCommentComponent implements OnInit {
  comment: Comment|undefined = {
    id: 0,
    text: '',
    author: '',
    date: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {

  }

  ngOnInit(): void {

  const commentId = +this.route.snapshot.paramMap.get('commentId')!;

  this.comment = this.commentService.getCommentById(commentId);

  if (!this.comment) {
    // Yorum tanımlı değilse
    console.error('Yorum bulunamadı.');

  }

  }


  updateComment(): void {
    if (this.comment !== undefined) {
      this.commentService.updateComment(this.comment);
      this.router.navigate(['/comments']);
    } else {
      console.error('this.comment is undefined.');
    }
  }

  // İptal işlemi
  cancel(): void {
    this.router.navigate(['/comments']);
  }
}

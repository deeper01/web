import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment.model';
import { AlbumsComponent } from 'src/app/album/albums/albums.component';
import { apiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  @Output() getAlbums = new EventEmitter<void>();

  albumName: string | undefined;
  lstAlbums:AlbumsComponent[] = [];
  albumDescription: string | undefined;
  comments: Comment[]=[];
  newComment: Comment = { id: 0, text: '', author: '', date: new Date() };
  constructor( private commentService:CommentService,private _apiService:apiService){

  }


  ngOnInit(): void {
    this._apiService.getAlbums().subscribe((data) => {
      this.lstAlbums = data;
      this.lstAlbums.forEach((album) => {
        album.comments = [];
      });
      });

    this.albumName = 'Örnek Albüm';
    this.albumDescription = 'Bu albüm hakkında örnek bir açıklama...';
    

     const storedComments = localStorage.getItem('comments');

  if (storedComments) {
    this.comments = JSON.parse(storedComments);
  }
  }

  private getRandomComments(allComments: Comment[], count: number): Comment[] {
    // Yorumları rastgele karıştırın ve belirtilen sayıda yorumu seçin
    const shuffledComments = this.shuffleArray(allComments);
    return shuffledComments.slice(0, count);
  }
  private shuffleArray(array: any[]): any[] {
    // Fisher-Yates shuffle algoritması ile diziyi karıştırın
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  addComment(): void {


    this.commentService.addComment(this.newComment);

    // Yorum ekledikten sonra formu temizlemek için:
    this.newComment = { id: 0, text: '', author: '', date: new Date() };

    // Yorumları güncelleme:
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}


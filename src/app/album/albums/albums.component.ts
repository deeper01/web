import { Component } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  userId!: number;
  id!: number;
  title!: string;
  comments: Comment[]=[];
  //thumbnailUrl!: string;
  constructor(){

  }


}

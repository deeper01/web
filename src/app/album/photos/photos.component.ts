import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  albumId !:number;
  id!: number;
  title!:string;
  url!: string;
  thumbnailUrl!: string;

  constructor(){

  }
  ngOnInit():void{

  }

}

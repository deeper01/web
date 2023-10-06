import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumsComponent } from 'src/app/album/albums/albums.component';
import { PhotosComponent } from 'src/app/album/photos/photos.component';
import { apiService } from 'src/app/services/api.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PopupComponent } from 'src/app/popup/popup.component';
import { AccountService } from 'src/app/services/account.service';
import { User } from '../login/user';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  @Output() getAlbums = new EventEmitter<void>();
  @Output() getPhotos = new EventEmitter<void>();
  user:any;
  loggedIn:any;

  constructor(private _apiService: apiService, private modalService: BsModalService,private accountService: AccountService ,private authService:SocialAuthService) {

  }
  AlbumSelected!: Number;
  openModal = false;
  previewAlbum: any | null = null;
  previewPhotos:PhotosComponent[]  = [];
  lstPhotos: PhotosComponent[] = [];
  lstAlbums:AlbumsComponent[] = [];

  bsModalRef!: BsModalRef;
  previewOptions: OwlOptions = {
    // Önizleme Carousel seçenekleri
  };



  ngOnInit(): void {


     this._apiService.getAlbums().subscribe((data) => {
    this.lstAlbums = data;
    });
  }


  onAlbumSelected(selectedAlbumId: any): void {
    this._apiService.getPhotos(selectedAlbumId).subscribe((data) => {
      this.lstPhotos = data;
      //this.lstPhotos = data.slice(0, 50);

    });
  }

  openPreview(album:any): void {
    this._apiService.getPhotos(album.id).subscribe((data) => {
      this.lstPhotos = data;
      const initialState = {
        images: this.lstPhotos.map(photo => photo.url)
      };
      this.bsModalRef = this.modalService.show(PopupComponent, { initialState: initialState as Partial<PopupComponent> });
    });
  }


  closePreview(): void {
    this.previewAlbum = null;
    this.previewPhotos = [];
    this.openModal = false; // Modal'ı kapat
  }
}





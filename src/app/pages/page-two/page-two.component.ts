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
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css'],
})

export class PageTwoComponent implements OnInit {
  @Output() getAlbums = new EventEmitter<void>();
  @Output() getPhotos = new EventEmitter<void>();
  user:any;
  loggedIn:any;
  loggedInUser: User | null = null;
  constructor(private _apiService: apiService, private modalService: BsModalService,private accountService: AccountService ,private authService:SocialAuthService) {

  }
  // lstAlbums!: AlbumsComponent[];
  AlbumSelected!: Number;
  // lstPhotos!: PhotosComponent[];
  openModal = false;
  previewAlbum: any | null = null;
  previewPhotos:PhotosComponent[]  = [];
  lstPhotos: PhotosComponent[] = [];
  lstAlbums:AlbumsComponent[] = [];
  userAlbums: any[] = [];
  bsModalRef!: BsModalRef;
  previewOptions: OwlOptions = {

      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 500,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1, // Mobil boyutları için 1 resim
        },
        600: {
          items: 3, // Tablet boyutları için 3 resim
        },
        1000: {
          items: 5, // Desktop boyutları için 5 resim
        },

      },
      nav: true,

  };



  ngOnInit(): void {


    this.loggedInUser = this.accountService.getLoggedInUser();
    if (this.loggedInUser) {
      console.log(this.loggedInUser.userId,"userId");
      console.log(`Hoş geldin, ${this.loggedInUser.name}!`);
      this.loadUserAlbums(this.loggedInUser.userId);

    }
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);

    });

    // this._apiService.getAlbums().subscribe((data) => {
    //   this.lstAlbums = data;
    // });
  }

  loadUserAlbums(userId: number): void {
    this._apiService.getUserAlbums(userId).subscribe((data) => {
      this.userAlbums = data;
      console.log("data",data);

    });
  }

  onAlbumSelected(selectedAlbumId: any): void {
    this._apiService.getPhotos(selectedAlbumId).subscribe((data) => {
      this.lstPhotos = data;
      //this.lstPhotos = data.slice(0, 50);

    });
  }


  // openPreview(album: any): void {
  //   this.previewAlbum = album;
  //   this._apiService.getPhotos(album.id).subscribe((data) => {
  //     this.previewPhotos = data;
  //     this.openModal = true; // Modal'ı aç
  //   });
  // }
  // openPreview(album: any): void {
  //   this._apiService.getPhotos(album.id).subscribe((data) => {
  //     this.lstPhotos = data;
  //     this.bsModalRef = this.modalService.show(PopupComponent);
  //     //console.log(data);
  //   });
  // }
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

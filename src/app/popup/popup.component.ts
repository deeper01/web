import { Component, Input } from '@angular/core';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { apiService } from '../services/api.service';
import { PhotosComponent } from '../album/photos/photos.component';
import { AlbumsComponent } from '../album/albums/albums.component';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Input() lstPhotos: any[] = []; // lstPhotos dizisi modal içeriğine aktarılacak
  @Input() previewPhotos: any[] = [];
  @Input() previewAlbum: any | null = null;
  @Input() openModal = false;
  @Input() images: string[] = [];
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
  constructor(private modalService: BsModalService,public bsModalRef: BsModalRef,private _apiService: apiService,) {}
  // openPreview(album: any): void {
  //   this._apiService.getPhotos(album.id).subscribe((data) => {
  //     this.lstPhotos = data;
  //     this.bsModalRef = this.modalService.show(PopupComponent);
  //     //console.log(data);
  //   });
  // }
  isLoading = true;
  openPreview(album: any): void {
    this._apiService.getPhotos(album.id).subscribe((data) => {
      this.lstPhotos = data;
      this.images = this.lstPhotos.map(photo => photo.url); // Resim URL'lerini images dizisine yükle
      this.isLoading = false; // Resimler yüklendi
      this.bsModalRef = this.modalService.show(PopupComponent);
    });
  }

  close(): void {
    this.bsModalRef.hide();
    this.previewAlbum = null;
    this.previewPhotos = [];
    this.openModal = false;
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from 'src/app/album/photos/photos.component';
import { PageTwoComponent } from './page-two.component';
import { AlbumsComponent } from 'src/app/album/albums/albums.component';
import { apiService } from 'src/app/services/api.service';

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTwoComponent]
    });
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

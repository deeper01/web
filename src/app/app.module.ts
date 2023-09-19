import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { FormsModule } from '@angular/forms';
import { apiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './album/albums/albums.component';
import { PhotosComponent } from './album/photos/photos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './pages/login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './pages/login/login.guard';
import {
  GoogleLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';

import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    CounterComponent,
    CounterOutputComponent,
    AlbumsComponent,
    PhotosComponent,
    PopupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    apiService,
    AccountService,
    LoginGuard,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '770439127391-7c57878abc69085iei0k887ou3n7mvmn.apps.googleusercontent.com'
            ),
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

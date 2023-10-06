import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { apiService } from './services/api.service';
// import { CommonModule } from '@angular/common';
// import {MatCardModule} from '@angular/material/card';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatButtonModule}  from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccountService } from './services/account.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';


@Component({  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'web';
  user:any;
  loggedIn:any;

  selectedMenu:any='Home';
  constructor(private router:Router ,private accountService:AccountService ,private authService: SocialAuthService){

  }


  // goTo(paramText:string){
  //   this.selectedMenu=paramText
  //   this.router.navigate(this.selectedMenu)
  // }
  goTo(paramText: string) {
    this.selectedMenu = paramText;
    this.router.navigate([this.selectedMenu]);
  }
  isLoggedin(){
    return this.accountService.isLoggedIn();

  }

  logOut() {
    this.accountService.logOut();
    this.router.navigate(['/home']);
  }

  ngOnInit():void {


    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
}

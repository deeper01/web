import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { User } from './user';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  model:User= new User();
  user:any;
  loggedIn:any;
  constructor(private accountService:AccountService ,private authService: SocialAuthService,private router:Router){

  }
  ngOnInit(){

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        // this.router.navigate(['/two']);
        this.handleGoogleLogin();
      }
      console.log(this.user);

    });


  }
  login(form:NgForm)
  {
    this.accountService.login(this.model);
    console.log(this.model.email);
    console.log(this.model.password);
    console.log(this.model.name);
    console.log(this.accountService.getLoggedInUser());

    if (this.accountService.isLoggedIn()) {
      this.router.navigate(['/two']);
    }
  }
  private handleGoogleLogin() {
    if (this.accountService.isLoggedIn()) {
      this.router.navigate(['/two']);
    }
  }


    googleLogin() {

      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        if(this.loggedIn){
          // this.router.navigate(['/two']);
          this.handleGoogleLogin();
        }
        console.log(this.user);

      });
    }



 
}

import { Injectable } from '@angular/core';
import { User } from '../pages/login/user';


const users = [
    {userId:1,name:'Sinem', email: "sinem@gmail.com", password: "12345" },
    { userId:2,name:'Ayşe',email: "ayse@gmail.com", password: "67891" },
     // Diğer kullanıcılar
];
@Injectable()
export class AccountService {

  private loggedInUser: User | null = null;
  private isGoogleLogged: boolean = false;

  constructor() {
    const savedUser = localStorage.getItem('userEmail');
    // const name= localStorage.getItem('isLogged');
    if (savedUser) {
      this.loggedInUser = users.find(u => u.email === savedUser ) || null;
    }
    const googleLoginStatus = localStorage.getItem('isGoogleLogged');
    if (googleLoginStatus) {
      this.isGoogleLogged = googleLoginStatus === 'true';
    }

  }
  getLoggedInUser(): User | null {
    const email = localStorage.getItem('userEmail');
    const name= localStorage.getItem('userName');
    if (!email) {
      return null;
    }
    return this.loggedInUser;
  }
  //loggedIn=false;
  login(user:User):boolean{
    const foundUser = users.find(u => u.email === user.email && u.password === user.password);
    if(foundUser){
      this.loggedInUser = foundUser;

      //this.loggedIn=true;
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("isGoogleLogged", "false");

      localStorage.setItem("userId",user.userId)
      localStorage.setItem("userName",user.name)
      return true;

    }
    else{
      window.alert("Girdiğiniz bilgiler yanlış ya da eksik.Lütfen tekrar kontrol edin")
    }return false;
  }
  // isLoggedIn(){
  //  return this.loggedInUser !== null;
  //    //return this.loggedIn;

  //  }
  isLoggedIn(): boolean {
    return this.loggedInUser !== null || this.isGoogleLogged;
  }
  logOut(){
    // localStorage.removeItem("isLogged")
    // return this.loggedInUser;
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isGoogleLogged");
    localStorage.clear();
    this.loggedInUser = null;
    //this.loggedIn=false;
  }

   setGoogleLoginStatus(isLogged: boolean): void {
    this.isGoogleLogged = isLogged;
    localStorage.setItem("isGoogleLogged", isLogged.toString());
  }
  isGoogleLoggedIn(): boolean {
    const isGoogleLogged = localStorage.getItem("isGoogleLogged");
    return isGoogleLogged === "true";
  }

}

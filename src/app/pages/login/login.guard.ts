import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Injectable()

export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  // canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  //   let logged = this.accountService.isLoggedIn();
  //   if (logged) {
  //     return true;
  //   }
  //   this.router.navigate(["login"]);
  //   return false;
  // }
   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isNormalLoggedIn = this.accountService.isLoggedIn(); // Normal giriş kontrolü
    const isGoogleLoggedIn = this.accountService.isGoogleLoggedIn(); // Google ile giriş kontrolü

    if (isNormalLoggedIn || isGoogleLoggedIn) {

      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './pages/login/login.guard';

const routes: Routes = [
  {
    path: 'home',
    component:HomePageComponent
  },
  {
     path: '',
     redirectTo: 'login',
     pathMatch: 'full',

  },
  {
    path: 'one',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent,canActivate:[LoginGuard]
  },

  {
    path: 'three',
    component: PageThreeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AccountService,LoginGuard],


})
export class AppRoutingModule { }

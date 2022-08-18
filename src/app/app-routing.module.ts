import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';


import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './platos/paginas/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo: '404'
  }


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

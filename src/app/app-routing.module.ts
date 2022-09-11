import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';


import { LoginComponent } from './auth/pages/login/login.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent

  },
  {
    path: 'platos',
    loadChildren: () => import('./platos/platos.module').then( m => m.PlatosModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    
    path: '404',
    component: ErrorPageComponent
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

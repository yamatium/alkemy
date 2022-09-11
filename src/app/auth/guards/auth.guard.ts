import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if ( localStorage.getItem('token')){
        return true
      }

      console.log('blockeado por el authguard-canActivate')
    
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if ( localStorage.getItem('token')){
        return true
      } 

      console.log('blockeado por el authguard-canLoad')


      this.router.navigate(['/login']);
    return false;
  }
}

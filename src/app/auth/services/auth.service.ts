import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //

  // `http://challenge-react.alkemy.org/?email=${email}&password=${contraseña}`

  constructor( private http: HttpClient) { }

  login(email: string, contraseña: string) {
    return this.http.post(`http://challenge-react.alkemy.org/?email=${email}&password=${contraseña}`, {});
  }



}

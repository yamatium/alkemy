import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platos } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _apiKey: string = 'cf85651e1dd646379bc43dbc9a058352';
  private _baseUrl: string = 'https://api.spoonacular.com/recipes/complexSearch';
  private _platosElejidos: any[] = [];
  private _vegano:number = 0;
  private _Novegano: number = 0;
  


  constructor( private http: HttpClient ) { }

  getPlatos( termino: string ): Observable<Platos> {
    return this.http.get<Platos>(`${this._baseUrl}/?query=${termino}&apiKey=${this._apiKey}&addRecipeInformation=true`)
  }
}

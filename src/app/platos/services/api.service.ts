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
  private _novegano: number = 0;
  


  constructor( private http: HttpClient ) { }

  getPlatos( termino: string ): Observable<Platos> {
    return this.http.get<Platos>(`${this._baseUrl}/?query=${termino}&apiKey=${this._apiKey}&addRecipeInformation=true`)
  }

  get platosElejidos():any []{
    return [...this._platosElejidos]
  }

  get vegano(): number {
    return this._vegano
  }

  get novegano(): number {
    return this._novegano
  }

 agregarPlatos( plato: any ){
   this._platosElejidos.push(plato)
 }

 sumar (termino:string ) {
  if(termino == 'vegan'){
    this._vegano ++
  } else this._novegano ++;
 }

 borrarPlatos( plato:any ) {

  (plato.vegan == true) ? this._vegano -- : this._novegano -- ;

  const platoASacar = ( variable:Platos)  => variable == plato;
  
  this._platosElejidos.splice(this._platosElejidos.findIndex(platoASacar), 1)
 }
}

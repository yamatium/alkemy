import { Component, OnInit } from '@angular/core';
import { Platos, Result } from '../../interface/menu.interface';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2'

import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit{
  data!: Platos;

  termino = new FormControl('', [Validators.minLength(2)]);

  get vegano() : number {
    return this.menu.vegano
  }

  get novegano() : number {
    return this.menu.novegano
  }



  debouncer: Subject<string> = new Subject();

  constructor(private menu: ApiService) {}

  ngOnInit( ): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(  () => {
      this.enviar()
    })
  }

  tecla(){
    this.debouncer.next(this.termino.value! );
  }


  
  enviar( ) {
    if(this.termino.invalid || this.termino.value == ''){
      return
    }
    this.menu.getPlatos (this.termino.value!)
     .subscribe(resp => {
      this.data = resp});
  }


  agregar(plato:any){
    if (plato.vegan && this.vegano < 2){
      this.menu.sumar('vegan');
      this.menu.agregarPlatos(plato);
    } else if (!plato.vegan && this.novegano < 2) {
      this.menu.sumar('novegano')
      this.menu.agregarPlatos(plato);
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se puede agregar mas de dos platos '+ (plato.vegan?'veganos': 'no veganos'),
        footer: 'Por favor edite su orden en el menu principal o Seleccione un plato de otra categoria'
      })


    }

    

  }

  
}

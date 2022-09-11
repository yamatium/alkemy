import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Platos, Result } from '../../interface/menu.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css' ]
})
export class HomeComponent implements OnInit {

  data!: Platos;
  
  
 

  constructor(private router: Router,
              private menu: ApiService ) { }

  ngOnInit(): void {
    
  }

 
    
  get platosElejidos(): any[] {
    return this.menu.platosElejidos; 
    
    
  }

  get preciototal(): number {
    let total:number = 0;
    for(let precio of this.platosElejidos){
    total += precio.pricePerServing  
    }
    return total 
    
  }

  get tiempo():number {
    let tiempototal:number = 0;
    for(let tiempo of this.platosElejidos){
      tiempototal += tiempo.readyInMinutes
    }
    return (tiempototal/ this.platosElejidos.length)
  }

  get health():number {
    let vida:number = 0;
    for(let health of this.platosElejidos){
      vida += health.healthScore
    }
    return (vida/this.platosElejidos.length)
  }
  
  borrar ( plato:Result){
    this.menu.borrarPlatos(plato);
  }

  
  
  


  


  
      
  

}

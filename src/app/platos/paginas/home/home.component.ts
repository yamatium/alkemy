import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Platos } from '../../interface/menu.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  data!: Platos;

  constructor(private router: Router,
              private menu: ApiService ) { }

  ngOnInit(): void {

    //this.menu.getPlatos2()
     //.subscribe(resp => {
      //console.log(resp);
      //this.data = resp});
      //.subscribe(console.log)
  }


  enviar(termino: NgForm) {
    this.menu.getPlatos (termino.value.nombres)
     .subscribe(resp => {
      this.data = resp});
  }


  
      
  salir() {
    this.router.navigate(['./login'])  
    localStorage.clear()
  }

}

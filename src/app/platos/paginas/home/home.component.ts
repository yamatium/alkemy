import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Platos } from '../../interface/menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  menuplatos: Platos[] = [];

  termino: string = '';

  constructor(private router: Router,
              private menu: ApiService ) { }

  ngOnInit(): void {

  }

  

  
      
  salir() {
    this.router.navigate(['./login'])  
    localStorage.clear()
  }

}

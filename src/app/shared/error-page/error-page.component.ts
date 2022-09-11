import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: ['img { display:Block; }']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
    setTimeout(() => {
      if(localStorage.getItem('token')){
        this.router.navigateByUrl('/platos/home');
      } else {this.router.navigateByUrl('/login');}
    }, 2000);
  }

  get token() : boolean {
    return localStorage.getItem('token') ? true :false;
  }

  

}

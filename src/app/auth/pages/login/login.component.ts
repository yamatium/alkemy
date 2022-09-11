import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['login.component.css'] 
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(8)]],
    contraseña: ['', [Validators.required, Validators.minLength(4)]]
  })

  click: boolean = false;

  constructor( private fb:     FormBuilder,
               private router: Router,
               private authService: AuthService  ) { }

  campoEsValido( campo:string,) {

    return this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched;
  }

  ngOnInit(): void {
  }


  guardar() {

    const {email, contraseña} = this.miFormulario.value

    if(this.miFormulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos',
        footer: 'Por favor revise que sus datos sean correctos'})
      return;
    }
    this.click=true;


    this.authService.login(email, contraseña )
      .subscribe( resp => { 
        localStorage.setItem('token', JSON.stringify(resp))
        if ('token'){
          this.router.navigate(['./platos/home']) 
        } 
        }, err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos',
            footer: 'Por favor revise que sus datos sean correctos'})
          this.click=false;
        })

    

  }
  
  

}

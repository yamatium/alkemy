import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


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

    //hacer un service e injectarlo para comunicarse con la api
    //realizar  peticion post a la api para autenticarlo cuando aprete el boton y darle un token
    // mostrar al usuario que se esta procesando la peticion, no permitiendo que vuelva a tocar el boton login hasta que haya una respuesta

    // en caso de un error de la api, mostrar una alerta con sweet alert , mientras que si es valido debera redirigir al home y guardar el token en 
    //local storage.   hacer un boton de logout que borre el token del localstorage


    console.log(this.miFormulario.value);

    const {email, contraseña} = this.miFormulario.value


    this.authService.login(email, contraseña )
      .subscribe( resp => {
        console.log(resp); 
        localStorage.setItem('token', JSON.stringify(resp))

        if ('token'){
          this.router.navigate(['./home']) 
        }
        
      })

    

  }
  
  

}

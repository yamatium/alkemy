import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { CartaComponent } from './components/carta/carta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { PlatosRoutingModule } from './platos-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    CartaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    PlatosRoutingModule,
    MatDialogModule
    
    
  ]
})
export class PlatosModule { }

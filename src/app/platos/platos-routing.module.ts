import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './paginas/menu/menu.component';
import { HomeComponent } from './paginas/home/home.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path:'menu',component: MenuComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class PlatosRoutingModule { }

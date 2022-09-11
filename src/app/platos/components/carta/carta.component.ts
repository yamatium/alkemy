import { Component, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Platos, Result } from '../../interface/menu.interface';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit  {

  @Input () plato !: Result;

  @Output () boton: EventEmitter <Result> = new EventEmitter();

  @Input () condicion!: boolean ;

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

  openDialog(){
    this.dialog.open(Cartadetalles, {
      data:this.plato
    })
  }

  evento() {
    this.boton.emit(this.plato);
  }

}


@Component({
  selector:'dialog-data-example',
  templateUrl:'carta-detalles.html',
  styles: []
})

export class Cartadetalles {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<Cartadetalles>) {}
  
  get vegan():string {
    return this.data.vegan? 'si' : 'no';
  }

  closeDialog() {
    this.dialogRef.close();
  }

  




}
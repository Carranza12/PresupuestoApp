import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto: string;
  cantidadGasto:number;
 

  formularioIncorrecto:boolean;
  textIncorrecto:string;

  constructor(
    private _presupuestoService:PresupuestoService
  ) { 
    this.nombreGasto="";
    this.cantidadGasto=0;
   
    this.formularioIncorrecto=false;
    this.textIncorrecto="";
  }

  ngOnInit(): void {
  }

  agregarGasto(){

    if(this.cantidadGasto>this._presupuestoService.restante){
      this.formularioIncorrecto=true;
      this.textIncorrecto="Cantidad ingresada es mayor al restante";
      return;
    }

    if(this.nombreGasto==='' || this.cantidadGasto<=0){
      this.formularioIncorrecto=true;
      this.textIncorrecto="Nombre o cantidad no validas, verifique sus datos";

    }else{
      //creamos el objeto
      const GASTO = {
        nombre:this.nombreGasto,
        cantidad:this.cantidadGasto
      }

      //enviamos el objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(GASTO);

      //reseteamos formulario
      this.formularioIncorrecto=false;
      this.cantidadGasto=0;
      this.nombreGasto="";

    }
  }

}

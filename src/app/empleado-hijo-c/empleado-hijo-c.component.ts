import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {

  //CON DIRECTIVA INPUT HIJO VA A ESTAR READY PARA RECIBIR ESTOS DATOS
  @Input() empleadoDeLista: Empleado  //ir al tsconfig.jon y añadir compileroption stricpropertyinic para hacer que la sintaxis sea no estrica y no obligarnos a inciar estas variables

  @Input() indice:number;

}

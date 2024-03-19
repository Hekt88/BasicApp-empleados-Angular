import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {

  @Output() caracteristicasEmpleados= new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) { }//inyeccion del servicio 
    
  



  agregaCaracteristicas(value:string){
    this.miServicio.muestraMensaje(value)  //uso del constructor
    this.caracteristicasEmpleados.emit(value);
  }

}

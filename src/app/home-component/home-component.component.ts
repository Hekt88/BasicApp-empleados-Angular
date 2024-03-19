import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent  implements OnInit{
    titulo = 'Listado de empleados';



    constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){ 


      //this.empleados=this.empleadosService.empleados; lo metemos dentro del onInit
    }
 
 
 
  ngOnInit(): void {
    
    this.empleados=this.empleadosService.empleados;


  }
  empleados:Empleado[]=[];

/*  lo hemos trasladado de empleados.service.ts 
    new Empleado("Héctor", "Apellido", "Presidente", 7500),
    new Empleado("Walter", "White", "Director", 5500),
    new Empleado("Tony", "Montana", "Jefe de seccion", 4500),
    new Empleado("Luka", "Modric", "Administrativo", 3500),

*/
  



  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)  //llamada al constructor 
    this.empleadosService.agregarEmpleadoServicio(miEmpleado); //no olvidar registrar el servicio en app.module en proveedores

    
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent implements OnInit{
  
  
  constructor(private router:Router,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }
  
  
  empleados:Empleado[]=[];

  ngOnInit(): void {
    
    this.empleados=this.empleadosService.empleados;
  }


  volverHome(){
    this.router.navigate(['']); //se le pasa ruta del htnml app.componenet.html
  }




  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)  //llamada al constructor 
    this.empleadosService.agregarEmpleadoServicio(miEmpleado); //no olvidar registrar el servicio en app.module en proveedores

    this.router.navigate(['']); //rediccionamiento a home

    
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}

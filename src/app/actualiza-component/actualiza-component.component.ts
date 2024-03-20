import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute ,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }
  
  
  empleados:Empleado[]=[];

  accion:number;




  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams['accion'] ) //alamcena el numero 1 o 2 de la variable accion del html a traves de route.captura
    
    this.empleados=this.empleadosService.empleados;

    this.indice=this.route.snapshot.params['id'];  //creamos variable indice y en el OnInit le decimos k es igual al indice de la ruta

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }


  volverHome(){
    this.router.navigate(['']); //se le pasa ruta del htnml app.componenet.html
  }



/*
  actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)  //llamada al constructor 
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado); //no olvidar registrar el servicio en app.module en proveedores

    this.router.navigate(['']); //rediccionamiento a home

    
  }

  eliminaEmpleado(){


    this.empleadosService.eliminarEmpleado(this.indice); //no olvidar registrar el servicio en app.module en proveedores tambien hay que crearlo en empleados.service.ts

    this.router.navigate(['']);


  }

*/

  actualizaEmpleado(){

    if(this.accion==1){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)

    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre)  //llamada al constructor 
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado); //no olvidar registrar el servicio en app.module en proveedores

    this.router.navigate(['']); //rediccionamiento a home

    }else{



    this.empleadosService.eliminarEmpleado(this.indice); //no olvidar registrar el servicio en app.module en proveedores tambien hay que crearlo en empleados.service.ts

    this.router.navigate(['']);

    }
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  indice:number;

}

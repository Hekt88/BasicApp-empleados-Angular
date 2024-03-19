import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
 

//hemos traslado todo este contenido a la nueva ruta de home-componenets

/*
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    
    //this.empleados=this.empleadosService.empleados; lo metemos dentro del onInit
    
    // constructor que llama al servicio de alert creado
 //si inyecta en este componenete el servicio creado EmpleadosService
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


*/
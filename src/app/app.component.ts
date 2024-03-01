import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de empleados';

  empleados:Empleado[]=[

    new Empleado("Héctor", "Apellido", "Presidente", 7500),
    new Empleado("Walter", "White", "Director", 5500),
    new Empleado("Tony", "Montana", "Jefe de seccion", 4500),
    new Empleado("Luka", "Modric", "Administrativo", 3500),


  ];



  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleados.push(miEmpleado);
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}

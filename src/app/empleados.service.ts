import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()   //permite inyectar un servicio dentro de otro
export class EmpleadosService{


    constructor(private servicioVentanaEmergente:ServicioEmpleadosService){

    }

    empleados:Empleado[]=[

        new Empleado("Héctor", "Apellido", "Presidente", 7500),
        new Empleado("Walter", "White", "Director", 5500),
        new Empleado("Tony", "Montana", "Jefe de seccion", 4500),
        new Empleado("Luka", "Modric", "Administrativo", 3500),
    
    
      ];


      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("persona que se va a agregar: " + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);
      }
    
}
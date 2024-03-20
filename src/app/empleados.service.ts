import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()   //permite inyectar un servicio dentro de otro
export class EmpleadosService{

  //importante inyectar en el constructor los servicios creados
    constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices){

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

        this.dataService.guardarEmpleados(this.empleados)
      }


      encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }


      actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
      }


      eliminarEmpleado(indice:number){

        this.empleados.splice(indice,1)
      }
    
}
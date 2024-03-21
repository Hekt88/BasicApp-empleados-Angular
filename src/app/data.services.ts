import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

        guardarEmpleados(empleados: Empleado[]){

            //post envia la info, debe acabar en datos.json y especificar que queremos almacenar
        this.httpClient.put('https://mis-clientes-a9798-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(  //necesario observable para ver cambios en la bd

        response=> console.log("Se han registrado los empleados:" + response),


        error=>console.log("Errror: "+error),
        
        ); 

        }


        actualizarEmpleado(indice:number, empleado:Empleado){

            let url='https://mis-clientes-a9798-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice+ '.json' //se debe concatenar el indice con la url para que reconoczca que empleado update

            this.httpClient.put(url,empleado).subscribe(  //necesario observable para ver cambios en la bd

            response=> console.log("Se han modicificado los datos del empleado:" + response),


            error=>console.log("Errror: "+error),

            )
        }


        eliminarEmpleados(indice:number){


            let url='https://mis-clientes-a9798-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice+ '.json' //se debe concatenar el indice con la url para que reconoczca que empleado update

            this.httpClient.delete(url).subscribe(  //necesario observable para ver cambios en la bd

            response=> console.log("Se ha eliminado el empleado:" + response),


            error=>console.log("Errror: "+error),

            )

        }

    
}
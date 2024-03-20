import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

        guardarEmpleados(empleados: Empleado[]){

            //post envia la info, debe acabar en datos.json y especificar que queremos almacenar
        this.httpClient.post('https://mis-clientes-a9798-default-rtdb.europe-west1.firebasedatabase.app/datos.json',empleados).subscribe(  //necesario observable para ver cambios en la bd

        response=> console.log("Se han registrado los empleados:" + response),


        error=>console.log("Errror: "+error),
        
        ); 

        }

    
}
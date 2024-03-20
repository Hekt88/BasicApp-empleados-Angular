import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';


const appRoutes:Routes=[  //se crea constante dentro array de rutas, la url del navegador y el componenete a cargar, declararlas en declaratios, importar router module en imports y decir las rutas

  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id',component:ActualizaComponentComponent},// con /:id hace que nos seleccione el id del indice de la ruta del componente en su html
  {path:'**', component:ErrorPersonalizadoComponent}   //el path del error siemore el ultimo ** indica que todo lo que sea contrario a lo anterior
  

]
@NgModule({
  declarations: [  //aqui se registran los componentes que creamos automaticamente
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ContactoComponentComponent,
    QuienesComponentComponent,
    ProyectosComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

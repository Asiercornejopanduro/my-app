import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { FlujoInformacionComponent } from './flujo-informacion/flujo-informacion.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ListadoAlumnoComponent,
    FlujoInformacionComponent,
    Page404Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

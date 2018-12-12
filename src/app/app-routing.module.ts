import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutasComponent } from './components/crud-frutas/crud-frutas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'lista', component: ListadoClaseComponent},
  {path: 'flujo', component: FlujoInformacionComponent},
  {path: 'videojuego-detalle', component: VideojuegoDetalleComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'comparador', component: ComparadorComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'tareas', component: TareaComponent},
  {path: 'frutas', component: CrudFrutasComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

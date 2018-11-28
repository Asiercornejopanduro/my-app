import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { HomeComponent } from './components/home/home.component';
import { ListadoAlumnoComponent } from './components/listado-alumno/listado-alumno.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'flujo', component: FlujoInformacionComponent },
  { path: 'videojuego-detalle', component: VideojuegoDetalleComponent },
  { path: 'listado', component: ListadoAlumnoComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

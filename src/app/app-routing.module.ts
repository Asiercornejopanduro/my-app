import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { ListadoAlumnoComponent } from './components/listado-alumno/listado-alumno.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'flujo', component: FlujoInformacionComponent },
  { path: 'listado', component: ListadoAlumnoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Page404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

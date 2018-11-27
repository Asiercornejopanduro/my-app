import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { FlujoInformacionComponent } from './flujo-informacion/flujo-informacion.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
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

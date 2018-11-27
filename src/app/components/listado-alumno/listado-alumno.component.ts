import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.scss']
})
export class ListadoAlumnoComponent implements OnInit {
alumnos: string[];
  constructor() {
    console.trace('ListadoAlumnoComponent constructor');
    this.alumnos=['Asier','Adrian','Raúl','Luis','Alain','Valeria','Adriana','Andrea']

   }

  ngOnInit() {

    console.trace('ListadoAlumnoComponent ngOnInit');

  }

}

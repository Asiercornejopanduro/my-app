import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clase',
  templateUrl: './listado-clase.component.html',
  styleUrls: ['./listado-clase.component.scss']
})
export class ListadoClaseComponent implements OnInit {

  listadoClase: string[];

  constructor() {
    this.listadoClase = ['Asier', 'Adrian', 'Ainara', 'Raul', 'Luis', 'Alain', 'Valeria', 'Andrea', 'Adriana'];
  }

  ngOnInit() {
  }

}

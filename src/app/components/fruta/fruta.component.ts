import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  //Atributos declarar y no inicializar

  frutas: Fruta[];

  constructor(public frutaService: FrutaService) {
    console.trace('FrutaComponent constructor');

    this.frutas = [];
  }

  ngOnInit() {
    console.trace('FrutaComponent ngOnInit');
    this.frutaService.getAll().subscribe(data => {
      console.debug('datos recibidos %o', data);
      this.frutas = data.map(el => el);
    });
  }

}

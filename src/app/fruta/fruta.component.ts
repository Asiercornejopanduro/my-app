import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  //Los atributos se declaran aqui pero NUNCA se inicializan.
  titulo: string;
  frutas: string[];

  constructor() {

    console.trace('FrutaComponent constructor');

    this.titulo = 'fruta';
    this.frutas=['fresa','platano','mango','kiwi'];

  }

  ngOnInit() {

    console.trace('FrutaComponent ngOnInit');

  }

}

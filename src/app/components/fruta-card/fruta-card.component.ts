import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  fruta: Fruta;
  constructor() {
    console.trace('FrutaCardComponent constructor');
    this.fruta = new Fruta();
    this.fruta.nombre = 'Melocoton';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 3.45;
    this.fruta.descuento = 10;
    this.fruta.oferta = true;
    this.fruta.imagen = "./assets/img/melocoton.jpg";
  }

  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit')
  }
  comprar() {
    console.trace('FrutaCardComponent comprar');
    alert(`lo sentimos pero de momentro tenemos esta opcion desabilitada ##${this.fruta.nombre}##`);
    
  }
}

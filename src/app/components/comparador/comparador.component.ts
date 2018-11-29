import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { PipeComponent } from '../pipe/pipe.component';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  private frutas: Fruta[];
  private fruta1: Fruta;
  private fruta2: Fruta;


  constructor() {
    this.frutas = [];
    let fruta: Fruta = new Fruta();
    fruta.nombre = "banana";
    fruta.imagen = "./assets/img/banana.jpg"
    fruta.calorias = 12;
    fruta.precio=12;
    fruta.colores = ['amarillo', 'verde'];
    fruta.descuento = 0;
    fruta.oferta = false;
    
    this.frutas.push(fruta);

    fruta = new Fruta();
    fruta.nombre = 'fresa';
    fruta.precio = 0.75;
    fruta.calorias = 100;
    fruta.descuento = 25;
    fruta.colores = ['rosa', 'rojo', 'verde'];
    fruta.oferta = true;
    fruta.imagen = "./assets/img/fresa.jpg"
    this.frutas.push(fruta);

    fruta = new Fruta();
    fruta.nombre = 'pera';
    fruta.precio = 0.75;
    fruta.calorias = 100;
    fruta.descuento = 15;
    fruta.colores = ['rosa', 'rojo', 'verde'];
    fruta.oferta = true;
    fruta.imagen = "./assets/img/pera.jpg"
    this.frutas.push(fruta);


    this.fruta1=this.frutas[0];
    this.fruta2=this.frutas[1];
  }

  ngOnInit() {
  }

  seleccionar(fruta :Fruta){
    this.fruta2=this.fruta1;
    this.fruta1=fruta;

  }
}

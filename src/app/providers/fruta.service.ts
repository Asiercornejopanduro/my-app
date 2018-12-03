import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from '../model/fruta';
//No hace falta crear un new por el @Injectable
@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  private frutas: Fruta[];

  constructor() { 
    console.log('FrutaService contructor');
    this.frutas=[];
  }

  getAll():Fruta[]{
    this.frutas=[];
    this.loadFrutas();
    return this.frutas;
  }

 private loadFrutas(){
    let fruta: Fruta = new Fruta();
    fruta.nombre = "banana";
    fruta.imagen = "./assets/img/banana.jpg"
    fruta.calorias = 12;
    fruta.precio = 12;
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

  }

}

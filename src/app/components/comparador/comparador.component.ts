import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { PipeComponent } from '../pipe/pipe.component';
import { LineaProducto } from 'src/app/model/linea-producto';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  private frutas: Fruta[];
  private fruta1: Fruta;
  private fruta2: Fruta;
  private carroCompra: LineaProducto[];



  constructor() {
    this.frutas = [];
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


    this.fruta1 = this.frutas[0];
    this.fruta2 = this.frutas[1];

    this.carroCompra = [];
  }

  ngOnInit() {
  }

  seleccionar(fruta: Fruta) {
    this.fruta2 = this.fruta1;
    this.fruta1 = fruta;

  }

  actualizarCarro(event: Event) {

    console.debug('ComparadorComponent actualizarCarro, recibimos el evento del compoenente hijo')
    console.debug('Parametro frutaClick= %o', event['frutaClick']);
    let f: Fruta = event['frutaClick'];
    let l:LineaProducto= new LineaProducto();
    l.nombre=f.nombre;
    l.cantidad=1;
    l.precio=f.precio;
    l.total+=f.precio;
if (this.carroCompra.length>0) {
 
    
    let encontrado=this.carroCompra.find(x=>x.nombre===l.nombre);
    if (encontrado) {
      encontrado.precio+=l.precio;
      encontrado.cantidad+=l.cantidad;
      encontrado.total+=l.total;
    } else {
      this.carroCompra.push(l);
    }
      
      
    
    
      
   
  
} else {
  this.carroCompra.push(l);
}

    
    
    
  }
}

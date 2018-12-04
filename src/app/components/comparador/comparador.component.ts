import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { PipeComponent } from '../pipe/pipe.component';
import { LineaProducto } from 'src/app/model/linea-producto';
import { FrutaService } from 'src/app/providers/fruta.service';

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
  private totalCompra:number;


  /*FrutaService es @Injectable por lo cual debemos declararlo
  
  */
  constructor(public frutaService: FrutaService) {
    this.frutas = [];
    this.carroCompra = [];
    this.totalCompra=0;
  }


  ngOnInit() {

    this.frutaService.getAll().subscribe(data =>{
      console.debug('datos recibidos %o', data);
      this.frutas=data.map(el =>el);
      this.fruta1 = this.frutas[0];
      this.fruta2 = this.frutas[1];
    });
   
  }

  seleccionar(fruta: Fruta) {
    this.fruta2 = this.fruta1;
    this.fruta1 = fruta;

  }

  actualizarCarro(event: Event) {

    console.debug('ComparadorComponent actualizarCarro, recibimos el evento del compoenente hijo')
    console.debug('Parametro frutaClick= %o', event['frutaClick']);
    let f: Fruta = event['frutaClick'];
    let l: LineaProducto = new LineaProducto();
    l.fruta=f;
    l.nombre = f.nombre;
    l.cantidad = 1;
    l.precio = (f.precio)-(f.precio*f.descuento/100) ;
    l.total += l.precio*l.cantidad;
    this.totalCompra+=l.precio;

    if (this.carroCompra.length > 0) {


      let encontrado = this.carroCompra.find(x => x.nombre === l.nombre);
      if (encontrado) {
        encontrado.precio += l.precio;
        encontrado.cantidad += l.cantidad;
        encontrado.total += l.total;
      } else {
        this.carroCompra.push(l);
      }


    } else {
      this.carroCompra.push(l);
    }

  }

  sumarFruta(fruta:Fruta,index:number){
    let f: Fruta=this.carroCompra[index].fruta;
    let l=this.carroCompra[index];
    l.cantidad+=1;
    l.fruta=f;
    l.nombre = f.nombre;
    l.precio = (f.precio)-(f.precio*f.descuento/100) ;
    l.total = ((f.precio)-(f.precio*f.descuento/100))*l.cantidad;
    this.totalCompra+=l.precio;
    this.carroCompra[index]=l;
    
  }
  restarFruta(fruta:Fruta,index:number){
    let f: Fruta=this.carroCompra[index].fruta;
    let l=this.carroCompra[index];
    l.cantidad-=1;
    l.fruta=f;
    l.nombre = f.nombre;
    l.precio = (f.precio)-(f.precio*f.descuento/100) ;
    l.total = ((f.precio)-(f.precio*f.descuento/100))*l.cantidad;
    this.totalCompra-=l.precio;
    this.carroCompra[index]=l;
  }

  
}

import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  
   _fruta: Fruta;
  _fruta2?: Fruta;//opcional

  @Input ('_fruta') set fruta(value: Fruta) {
    if(value){
      this._fruta=value;
    }else{
      this._fruta=new Fruta();
    }
  }

  get fruta(): Fruta {
    return this._fruta;
  }
  
@Input ('_fruta2') set fruta2(value:Fruta){
  this._fruta2=value;
}
 get fruta2(): Fruta {
  return this._fruta2;
}

//Registrar evento de salida.
@Output() clickCompra= new EventEmitter();

  constructor() {
    console.trace('FrutaCardComponent constructor');
    /*this.fruta = new Fruta();
    this.fruta.nombre = 'Melocoton';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 3.45;
    this.fruta.descuento = 10;
    this.fruta.oferta = true;
    this.fruta.imagen = "./assets/img/melocoton.jpg";*/
  }


  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit')
  }
  comprar() {
    console.trace('FrutaCardComponent comprar');
    alert(`lo sentimos pero de momentro tenemos esta opcion desabilitada ##${this.fruta.nombre}##`);
    //Emitimos el evento al componente padre y enviamos el parametro frutaClick
    this.clickCompra.emit({frutaClick : this.fruta});
  }
}

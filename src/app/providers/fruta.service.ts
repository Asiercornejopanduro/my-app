import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


//No hace falta crear un new por el @Injectable
@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  
  endpoint:string="http://localhost:3000/frutas";

  constructor(public http: HttpClient) { 
    console.log('FrutaService contructor');
    
  }

  getAll():Observable <any>{
    console.trace(`FrutaService get ${this.endpoint}`);
    return this.http.get("http://localhost:3000/frutas");
  }

  crear(fruta:Fruta): Observable<any>{
    let body={
      "id":fruta.id,
      "nombre":fruta.nombre,
      "calorias":fruta.calorias,
      "precio":fruta.precio,
      "oferta":fruta.oferta,
      "descuento":fruta.descuento
    
    };

    const httOptions={

      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post(this.endpoint,body,httOptions)
   }
}

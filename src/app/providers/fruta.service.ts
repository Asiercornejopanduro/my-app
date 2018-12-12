import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


//No hace falta crear un new por el @Injectable
@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  endpoint: string = "http://localhost:3000/frutas";

  constructor(public http: HttpClient) {
    console.log('FrutaService contructor');

  }

  getAll(): Observable<any> {
    console.trace(`FrutaService get ${this.endpoint}`);
    return this.http.get("http://localhost:3000/frutas");
  }

  getById(id: number): Observable<any> {
    
    const httOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(this.endpoint + "/" + id,httOptions);

  }

  crear(fruta: Fruta): Observable<any> {
    let body = {
      
      "nombre": fruta.nombre,
      "calorias": fruta.calorias,
      "precio": fruta.precio,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen

    };

    const httOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.endpoint, body, httOptions)
  }

  eliminar(fruta: Fruta): Observable<any> {
    let id = fruta.id;
    const httOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete(this.endpoint + "/" + id, httOptions);
  }

  modificar(fruta:Fruta):Observable<any>{
    
    let body = {
      
      "nombre": fruta.nombre,
      "calorias": fruta.calorias,
      "precio": fruta.precio,
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen

    };
    const httOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(this.endpoint + "/" + fruta.id,body, httOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Tarea } from '../model/Tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {
  endpoint:string="http://localhost:3000/tareas";

  constructor(public http: HttpClient) {
    console.trace('TareaService constructor');
   }

   //Como el servicio retorna un Observable, debemos subscribirnos
   getAll():Observable <any>{
    console.trace(`TareaService get ${this.endpoint}`);
    return this.http.get("http://localhost:3000/tareas");
   }

   add(tarea:Tarea): Observable<any>{
    let body={
      "titulo":tarea.titulo,
      "terminado":tarea.terminado
    };

    const httOptions={

      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.post(this.endpoint,body,httOptions)
   }

   delete(id:number): Observable<any>{
    console.trace(`TareaService delete ${id}`);

    return this.http.delete(this.endpoint+"/"+id);
   }
   marcarTerminado(tarea:Tarea):Observable<any>{
     let body={
       "terminado": !tarea.terminado
     }
     const httOptions={

      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.patch(this.endpoint+"/"+tarea.id,body,httOptions);
   }
}

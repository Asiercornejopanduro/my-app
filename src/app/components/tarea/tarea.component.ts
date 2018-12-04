import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/providers/tarea.service';
import { Tarea } from 'src/app/model/Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  tareas: Tarea[];
  nueva: string;
  todas:boolean;
  textoFiltro:string;
  constructor(public tareaService: TareaService) {
    console.trace('TareaComponent constructor');
    this.tareas = [];
    this.todas=true;
    this.textoFiltro="Todas";
  }

  ngOnInit() {
    console.trace('TareaComponent ngOnInit');
    //Llamar al servicio para la carga inicial de las tareas,NO hacerlo en el constructor.
    this.recargarLista();
    
  }

  nuevaTarea() {
    console.log('TareaComponent nuevaTarea' + this.nueva);

    let tarea = new Tarea();
    tarea.titulo = this.nueva;
    this.tareaService.add(tarea).subscribe(data => {
      console.debug(data);
      this.recargarLista();
      this.nueva = "";
    })
  }

  recargarLista() {
    this.tareaService.getAll().subscribe(data => {
      console.debug('datos recibidos %o', data);
      this.tareas = data.map(el => el);
    });
  }
  eliminar(id: number) {
    console.trace(`TareaComponent eliminar ${id}`);
    this.tareaService.delete(id).subscribe(data => {
      console.debug('datos recibidos %o', data);
      this.recargarLista();
    });
  }
  terminar(tarea) {
    this.tareaService.marcarTerminado(tarea).subscribe(data=>{
      console.debug('data %o',data);
      this.recargarLista();
    })
  }

  filtrar(){
    this.todas=!this.todas;
    this.textoFiltro=(this.todas)?'Todas':'Pendientes';
  }
}

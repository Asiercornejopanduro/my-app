import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crud-frutas',
  templateUrl: './crud-frutas.component.html',
  styleUrls: ['./crud-frutas.component.scss']
})
export class CrudFrutasComponent implements OnInit {
  fruta: Fruta;
  frutas: Fruta[];

  constructor(public frutaService: FrutaService,public router: Router) { 
    this.fruta=new Fruta();
    this.frutas=[];
  }

  ngOnInit() {
    this.frutaService.getAll().subscribe(data =>{
      console.debug('datos recibidos %o', data);
      this.frutas=data.map(el =>el);
      
    });
  }

  irDetalle(id:number){
    this.router.navigate(['/formulario', id])
  }
}

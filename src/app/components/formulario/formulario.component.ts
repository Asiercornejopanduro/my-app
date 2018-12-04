import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  simple: FormControl;//input del formulario
  formulario: FormGroup;//agrupar inputs (FormControl)
  frutas:Fruta[];
  

  constructor(public frutaService: FrutaService) {
    console.trace('FormularioComponent constructor');
    this.frutas = [];


    //control unico
    this.simple = new FormControl();
    this.simple.setValue('fresa');

    //agurpacion de controlles==formulario
    this.formulario = new FormGroup({
      nombre: new FormControl('',
        [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]
      ),
      precio: new FormControl(
        0,//valor inicial
        [//validacones
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(5)
        ]
      ),
      calorias: new FormControl(
        0,//valor inicial
        [//validacones
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(5)
        ]
      ),
      oferta: new FormControl(
        false,//valor inicial
        [//validacones
          Validators.required,
          
        ]
      ),
      descuento: new FormControl(
        0,//valor inicial
        [//validacones
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(5)
        ]
      )

    });
  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
    this.frutaService.getAll().subscribe(data =>{
      console.debug('datos recibidos %o', data);
      this.frutas=data.map(el =>el);
    });
  }

  cargarFormulario() {
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue('fresa');
    this.formulario.controls.precio.setValue(2.50);

  }

  sumitar(){
    console.trace('FormularioComponent sumitar %o',this.formulario);

    let fruta= new Fruta();
    fruta.nombre=this.formulario.controls.nombre.value;
    fruta.precio=this.formulario.controls.precio.value;
    fruta.calorias=this.formulario.controls.calorias.value;
    fruta.descuento=this.formulario.controls.descuento.value;
    this.frutaService.crear(fruta).subscribe(data =>{
      console.debug('datos recibidos %o', data);    
    });


    console.debug('llamar provider pasando la fruta %o: ',fruta);


  }

  habilitarDescuento(formControl:FormControl){
    
  }
}

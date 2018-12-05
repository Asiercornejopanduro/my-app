import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
  frutas: Fruta[];
  mensaje:string;



  constructor(public frutaService: FrutaService) {
    console.trace('FormularioComponent constructor');
    const patronImagen: string = "(^http)(s?:\/\/).+(\.(jpg|jpeg|png))$";
    this.frutas = [];
    this.mensaje="";


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
          Validators.min(0.1),
          Validators.maxLength(999)
        ]
      ),
      calorias: new FormControl(
        0,//valor inicial
        [//validacones
          Validators.required,
          Validators.min(1),
          Validators.maxLength(999)
        ]
      ),
      oferta: new FormControl(
        false,//valor inicial

      ),
      descuento: new FormControl(
        0,//valor inicial
        [//validacones
          Validators.required,
          Validators.min(0),
          Validators.max(90)
        ]
      ),
      imagen: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(patronImagen)
        ]
      ),
      colores: new FormArray([this.crearColorFormGroup()], Validators.minLength(1))

    });

  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
    this.frutaService.getAll().subscribe(data => {
      console.debug('datos recibidos %o', data);
      this.frutas = data.map(el => el);
    });
  }

  cargarFormulario() {
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue('fresa');
    this.formulario.controls.precio.setValue(2.50);

  }

  sumitar() {
    console.trace('FormularioComponent sumitar %o', this.formulario);

    let fruta = new Fruta();
    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    this.frutaService.crear(fruta).subscribe(data => {
      console.debug('datos recibidos %o', data);
    });


    console.debug('llamar provider pasando la fruta %o: ', fruta);
    this.mensaje="Fruta añadida correctamente"

  }
  crearColorFormGroup(): FormGroup {
    return new FormGroup({
      color: new FormControl('verde', [Validators.required, Validators.minLength(2), Validators.maxLength(15)])
    })
  }

  nuevoColor() {
    let arrayColores=this.formulario.get('colores')as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }
  eliminarColor(index:number){
    let arrayColores=this.formulario.get('colores')as FormArray;
    if (arrayColores.length>1) {
      arrayColores.removeAt(index);
    } 
    
  }
}

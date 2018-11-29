import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';
import { Sexos } from 'src/app/model/persona';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {

  titulo: string;
  videojuego: Videojuego;
  persona: Persona;
  yo: Persona;
  compa: Persona;
  personas: Persona[];

  constructor() {
    console.trace('VideojuegoDetalleComponent constructor');
    this.titulo = 'Aprendiendo a usar clases.';
    this.videojuego = new Videojuego();

    // Llamamos al setter siempre que está definido
    this.videojuego.titulo = `Tim's World`;

    this.persona = new Persona();

    this.yo = new Persona();
    this.yo.nombre = 'Adrian';
    this.yo.apellidos = 'Garcia Santos';
    this.yo.sexo = Sexos.Masculino;
    this.yo.email = 'akirruai@gmail.com';
    this.yo.edad = 22;

    this.compa = new Persona();    
    this.compa.nombre = 'Ainara';
    this.compa.apellidos = 'Goitia Arenaza';
    this.compa.sexo = Sexos.Femenino;
    this.compa.email = 'agoitia@gmail.com';
    this.compa.edad = 25;

    this.personas = [];
    this.loadPersonas();

  }

  ngOnInit() {
    console.trace('VideojuegoDetalleComponent ngOnInit');
  }

  loadPersonas(): void{
    console.trace('VideojuegoDetalleComponent loadPersonas');

    let p = new Persona();
    p.nombre = 'Adrian';
    p.sexo = Sexos.Masculino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Asier';
    p.sexo = Sexos.Masculino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Maria';
    p.sexo = Sexos.Femenino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Aldo';
    p.sexo = Sexos.Indefinido;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Paula';
    p.sexo = Sexos.Femenino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Marto';
    p.sexo = Sexos.Indefinido;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Laura';
    p.sexo = Sexos.Indefinido;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Paca';
    p.sexo = Sexos.Femenino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Ángel';
    p.sexo = Sexos.Masculino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Diego';
    p.sexo = Sexos.Masculino;
    this.personas.push(p);

  }

}

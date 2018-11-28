import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { Persona, Sexos } from 'src/app/model/persona';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  videojuegos: Videojuego[];
  personas: Persona[];
  fecha: Date;
  pi: number;

  constructor() {
    this.fecha = new Date();
    this.pi = 3.14567;
    this.videojuegos = [];
    this.loadVideojuegos();
    this.personas = [];
    this.loadPersonas();
  }

  ngOnInit() {
  }


  loadVideojuegos(): void {
    let v: Videojuego = new Videojuego();
    v.titulo = 'Mario Bros';
    this.videojuegos.push(v);
    v = new Videojuego();
    v.titulo = `Luigi´s Mansion`;
    this.videojuegos.push(v);
    v = new Videojuego();
    v.titulo = `Zelda`;
    v.alquilado = false;
    this.videojuegos.push(v);
    v = new Videojuego();
    v.titulo = `Space Invaders`;
    v.alquilado = false;
    this.videojuegos.push(v);
  }

  loadPersonas(): void {
    let p: Persona = new Persona();
    p.nombre = "Asier";
    p.sexo = Sexos.Indefinido;
    this.personas.push(p);

    p= new Persona();
    p.nombre = "Adrian";
    p.sexo = Sexos.Masculino;
    this.personas.push(p);

     p = new Persona();
    p.nombre = "Ainara";
    p.sexo = Sexos.Femenino;
    this.personas.push(p);

    p = new Persona();
    p.nombre = "Raul";
    p.sexo = Sexos.Masculino;
    this.personas.push(p);

     p= new Persona();
    p.nombre = "Andrea";
    p.sexo = Sexos.Femenino;
    this.personas.push(p);


  };
}

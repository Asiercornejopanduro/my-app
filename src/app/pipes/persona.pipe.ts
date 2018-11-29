import { Pipe, PipeTransform } from '@angular/core';
import { Persona, Sexos } from '../model/persona';

@Pipe({
  name: 'sexo'
})
export class PersonaPipe implements PipeTransform {

  transform(personas: Persona[], sexo: Sexos): any {
    console.debug('PersonaPipe transform');
    let resul: Persona[] = [];

    personas.forEach(el => {
      if(el.sexo === sexo){
        resul.push(el);
      }
    });

    return resul;
  }

}

import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miadata: Date = new Date(1977, 11, 12);

    prezzo: number = 65.43216;

    guadagno: number = 0.37;

    nome: string = 'Giacomo';

    testo: string = "testo tutto minuscolo";

    jsonobject: any = {

        nome: 'Mario',

        cognome: 'Viola',

        dettagli: {

            eta: 33,

            pregi: ['Bello', 'Alto', 'Onesto']

        }

    };

    object: any = { nome: 'Fragole', prezzo: 7 };

    map: any = new Map([[1, 'Arance'], [2, 'Broccoli']]);
  stringa = 'Mia stringa';

  lista = ['Aldo', 'Giovanni', 'Giacomo'];
  myObservable$ = new Observable(observer => {

    setTimeout(() => {

      observer.next('Aldo');

    }, 0);

    setTimeout(() => {

      observer.next('Bice');

    }, 1000);

    setTimeout(() => {

      observer.next('Ciro');

    }, 2000);

    setTimeout(() => {

      observer.next('Dudù');

    }, 3000);

  });
  // Le pipe builtin vanno importate come Service a livello di modulo
  testoPipeModel: string="ciao Pippo!"
  constructor(private upperCasePipe: UpperCasePipe) {

    this.testoPipeModel = upperCasePipe.transform(this.testoPipeModel);

  }
}

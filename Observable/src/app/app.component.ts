import { Component } from '@angular/core';
import { Observable,Observer,Subscription } from 'rxjs';
// Operatori

import { pipe, of, from, fromEvent, range, interval, concat, merge, throwError, timer } from 'rxjs';

import { first, take, map, filter, every, delay, catchError, finalize, retry, retryWhen, tap, delayWhen, mapTo, distinct, switchMap,  defaultIfEmpty, mergeWith } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable';
  myArray: Array<any> = ['A', 'B', 'C', 'D', 'E', 12, 'G'];

    myObject: any[] = [

        { nome: 'Aldo', eta: 33 },

        { nome: 'Giovanni', eta: 22 },

        { nome: 'Giacomo', eta: 33 }

    ];

    myObject2: any[] = [

        { nome: 'Alda', eta: 33 },

        { nome: 'Giovanni', eta: 22 },

        { nome: 'Giacomina', eta: 33 }

    ];
    myObservableOf$ = of(1, 2, 1, 3, 2, 4, 6);

    myObservableFrom$ = from(this.myArray);

    myObservableRange$ = range(9, 11);

    myObservableInterval$ = interval(1000);
    getCountries(code: string) {   
      
      ajax('https://restcountries.com/v3.1/all')

      .pipe(

          // 1. Restituisce un nuovo observable per ogni item dell'observable

          switchMap(async (ajaxResponse) => ajaxResponse.response),

          switchMap((response: any | null) => response),

          // 2. Filtra i valori in base ad una condizione

          filter((response: any | null) => response['fifa'] === code),

          // 3. Accede alle proprietà annidate

          map(country => country?.name?.common),

          // Valore di default in caso di mancato match con criteri di filtro

          defaultIfEmpty('Nazione non trovata')

      )

      .subscribe({

          next: country => console.log(country),

          error: error => console.log(error),

          complete: () => console.log('Complete')

      });

  }
    myObservable$ = new Observable(observer => {

      // Al sottoscrittore/observer vengono passati i valori via via emessi dall'Observable

      // L'esecuzione può produrre più valori nel tempo, in modo sincrono o asincrono.

      observer.next(1);

      observer.next(2);

      observer.next(3);
      

     
      // Invio asincrono

      // setTimeout(funzioneDaEseguire(), ritardo)

      setTimeout(() => {

          observer.next(4);

      }, 2000);

      // Genera un errore

      throw new Error('OPS!');

      observer.next(5);

      setTimeout(() => {

          observer.complete();

      }, 3000);

  });
    myObservableConcat$ = concat(this.myObservableFrom$, this.myObservableRange$);
    mySubscribe() {


      this.myObservableFrom$.pipe(

         //first()

        //take(3)

        // Map, come in JavaScript, trasforma gli elementi emessi applicando ad ognuno una funzione

        //map(value => value * 100)

        // Filter emette solo i valori che rispondono a determinate condizioni

        //filter(value => value % 2 === 0),

        // Every emette true o false se tutti i valori soddisfano o meno una condizione

        //every(value => typeof value === 'string')

        // distinct filtra i valori in ingresso escludendo valori duplicati

        //distinct()    

        // CatchError gestisce gli errori restituendo un observable contenete il messaggio di errore

        /* Es: genera un errore applicando toUppercase() ad un numero, quindi catchError() gestisce l'errore */

        map(value => value.toLowerCase()),
catchError(err=>of('F'))
        //catchError(error => of('F corretto'))

    )

      .subscribe({

          next: value => console.log('Subscribe() next: ' + JSON.stringify(value)),

          error: error => console.error('Subscribe() error: ' + error),

          complete: () => console.log('Subscribe() completed\n----')

      });

  }
  //cpstruttore-> ngOnInit()-> ngAfterWviewInit()
  ngOnInit() {

    console.log("OnInit");        

    this.mySubscribe();

    //this.mySubscribeError();

    //this.mySubscription();

    //this.myObservable$.subscribe(this.myObserver);        

    this.getCountries('FRA');        

}  
}

import { Injectable } from '@angular/core';

 @Injectable(
  //{
//   providedIn: 'root'
// }
)
export class MyServiceService {

  constructor() { }
  // Proprietà

  public proprietaMyService = 'Proprietà MyService';

  // Metodi

  public metodoMyService(stringa?: string) {

      console.log('Metodo MyService ' + stringa);

  }
}

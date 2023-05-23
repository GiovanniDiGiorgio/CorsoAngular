import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Template';

  myImgUrl: string = './assets/lime.png';

  myNum: number = 3.679;

  myNum2: number = 0;

  myBoolean: boolean = true;

  myModel: string = 'MyModel input text 2';

  myObject: any = { nome: 'Aldo', cognome: 'Rossi', eta: 33 };


  myNames: string[] = ['Al', 'Joe', 'Jack'];

  myObjects: any[] = [

    { id: 1, nome: 'Aldo', cognome: 'Rossi', eta: 33 },

    { id: 2, nome: 'Giovanni', cognome: 'Verdi', eta: 44 },

    { id: 3, nome: 'Giacomo', cognome: 'Bianchi', eta: 55 },

  ];

  getMyNum() {

    return this.myNum;

  }

  mostraModel() {

    alert(this.myModel);

  }

  mostraRef(ref: any) {

    alert(ref);

  }


}

import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @INPUT
  title :string='titolo'
  // Decoratore @Input(): espone la proprietà all'esterno per essere utilizzata con il Property Binding

  @Input() inputChild: string = 'Input Child inizializzato';
  @Output() outputChild: EventEmitter<any> = new EventEmitter<any>();
  numeroChild = 222;

  arrayChild: number[] = [12, this.numeroChild];



  constructor() { }




  // Metodo per la generazione dell'evento

  childEventEmitter() {

    // La generazione dell’evento si effettua invocando il metodo emit() che accetta un unico argomento

    this.outputChild.emit(this.arrayChild);

  }


}

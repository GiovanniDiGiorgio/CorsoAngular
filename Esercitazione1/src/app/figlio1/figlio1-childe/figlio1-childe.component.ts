import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio1-childe',
  templateUrl: './figlio1-childe.component.html',
  styleUrls: ['./figlio1-childe.component.css']
})
export class Figlio1ChildeComponent {
  

  @Input() titolo: any = 'Sono il nipote';
  @Output() esporta: EventEmitter<any> = new EventEmitter();
  cambia() {
    this.titolo = 'Nipote_new';
    this.esporta.emit(this.titolo);
  }

}

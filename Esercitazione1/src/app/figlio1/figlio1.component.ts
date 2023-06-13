import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-figlio1',
  templateUrl: './figlio1.component.html',
  styleUrls: ['./figlio1.component.css']
})
export class Figlio1Component {

  @Input() titolo1: string | undefined;
  @Output() Export: EventEmitter<any> = new EventEmitter();
  cambia1() {
    this.titolo1 = 'figlio1_New';
    this.Export.emit(this.titolo1);
  }
  Importa(a: any) {
    this.titolo1 = a;
    this.Export.emit(this.titolo1);
  }
  
}

import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-figlio2',
  templateUrl: './figlio2.component.html',
  styleUrls: ['./figlio2.component.css']
})
export class Figlio2Component {
  

  @Input() titolo2: any='figlio2';
  @Output() export2: EventEmitter<any> = new EventEmitter();
  cambia2() {
    this.titolo2 = 'new_titolo_2'
    this.export2.emit(this.titolo2);
  }
 
}

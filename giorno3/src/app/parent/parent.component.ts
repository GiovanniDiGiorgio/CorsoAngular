import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  stringaParent: string = 'stringa parent'
 




  // Proprietà modificabile dal Componente Child via @Output

  numeroParent: number = 12;




  // Listener che gestisce l'output del componente figlio recuperandone il payload $event

  onOutputParent($event: any): void {

    // Valore iniziale della proprietà parent

    //console.log('Il valore iniziale di numeroParent è: ' + this.numeroParent);

    // Contenuto del payload inviato dall'emitter

    //console.log('Il contenuto del payload è: ' + $event[0] + ' - '  + $event[1]);

    // Assegna il valore della proprietà del child alla proprietà del parent

    this.numeroParent = $event[1];

  }
  // Istanze multiple del componente child

  @ViewChildren(ChildComponent) myChildren!: QueryList<ChildComponent>;

  ngAfterViewInit() {

    // Modifica la proprietà title per ogni istanza del componente child

    this.myChildren.forEach(childInstance => console.log(childInstance));

    let counter = 0;

    this.myChildren.forEach(childInstance => {

      setTimeout(

        () => { counter++; childInstance.title += ` ${counter}`; },

        0

      );

    });

  }



}

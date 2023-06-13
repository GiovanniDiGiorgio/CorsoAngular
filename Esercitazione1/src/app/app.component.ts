import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component1';
  cambia() {
    this.title = 'Nonno';
  }

  funzioneImport(e : any) {
    this.title = e;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// Elementi per i Model Driven Forms

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(

    private httpClient: HttpClient,
    private formBuilder: FormBuilder

  ) { }
  hobbies: string[] = ['Nuoto', 'Musica', 'Cucina'];

  user: any = { nome: '', password: '', email: '', hobby: '' };
  // Url della API

  url: string = 'https://ugobetori.it/_notes/api-test/angular/angular2/login.php';
  logged: any;
  submitTemplateForm() {
    const datiJSON = {
      nome: this.user.nome,
      password:this.user.password,
      email: this.user.email,
      hobby:this.user.hobby

    }
    // Stringhifica l'oggetto JSON (in questo caso per soddisfare le richieste del mio endpoint)    



  
    const datiStringa = JSON.stringify(datiJSON);

    // Http fornisce metodi per effettuare richieste HTTP restituisce un'Observable che apre un canale continuo di comunicazione

    this.httpClient.post(this.url, datiStringa).subscribe(

      {
        

        next: response => {

          this.logged = response;

          console.log('next: ' + JSON.stringify(this.logged))

        },
       

        error: error => console.log('error: ' + JSON.stringify(error)),

        complete: () => console.log('complete')

      }

    );


 

  }
  submitReactiveForm() {

    const datiJSON = {

      nome: this.nome.value,

      password: this.password.value,

      email: this.email.value,

      hobby: this.hobby.value

    };

    const data = JSON.stringify(datiJSON);

    this.httpClient.post<Logged>(this.url, data)

      .subscribe({

        next: response => {

          this.logged = response;

          console.log('next: ' + JSON.stringify(this.logged))

        },

        error: error => console.log('onError: ' + error),

        complete: () => console.log('onCompleted')

      });

  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient ) {

  }
  User: any = { nome: '', password: '' }
  Login() {
    const datiJson = {
      nome: this.User.nome,
      password: this.User.password
    }
    const stringa = JSON.stringify(datiJson);
    var vet: any = { log: 'No', id: '', nome: '' };
    this.httpClient.post<any>('https://ugobetori.it/_notes/api-test/angular/angular2/login.php', stringa).subscribe({

      next: response => {
        console.log(response);
        
        if (response['log'] === 'Si') {
          this.httpClient.get('https://ugobetori.it/_notes/api-test/angular/angular2/users.php').subscribe({
            next: res => {
              console.log(res);
            }
          })
        }
        else {
          alert("Errore, password o username errati")
        }
      },
      error: error => alert("Errore"),

      complete: () => console.log('complete')
    })
  }

}

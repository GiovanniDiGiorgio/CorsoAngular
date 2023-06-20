import { Component } from '@angular/core';
import { MyServiceService } from '../Servizi/my-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-componente-servizio',
  templateUrl: './componente-servizio.component.html',
  styleUrls: ['./componente-servizio.component.css'],
  providers:[MyServiceService]
})
export class ComponenteServizioComponent {

constructor(private servizio: MyServiceService, private client: HttpClient){
this.servizio.metodoMyService("ciao");
}

}

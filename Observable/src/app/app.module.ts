import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrologioComponent } from './orologio/orologio.component';
import { MyServiceService } from './Servizi/my-service.service';
import { ComponenteServizioComponent } from './componente-servizio/componente-servizio.component';

@NgModule({
  declarations: [
    AppComponent,
    OrologioComponent,
    ComponenteServizioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    MyServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

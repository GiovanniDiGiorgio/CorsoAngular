import { UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPipePipe } from './my-pipe.pipe';
import { TranslatePipePipe } from './translate-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    TranslatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

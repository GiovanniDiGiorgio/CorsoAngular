import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-orologio',
  templateUrl: './orologio.component.html',
  styleUrls: ['./orologio.component.css']
})
export class OrologioComponent {
  
  

   data! : Date;
   mySubscriber!: Subscription;
   myObservable$ = new Observable(observer => {

    setInterval(() => {

        let data = new Date();

        observer.next(data);

    }, 1000);


});
myObserver: Observer<any> = {

  next: value =>  {
    this.data=value;
    console.log(value);
  
  }, 

  error: error => console.error('Error: ' + error),

  complete: () => console.log('Complete!'),

};
   start() : void{
  this.mySubscriber = this.myObservable$.subscribe(
   this.myObserver
  );
}
  stop() : void{
    this.mySubscriber.unsubscribe();
  }
 
}

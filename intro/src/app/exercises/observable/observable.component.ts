import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [RouterModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {

  //NEXT
    //v-pulita
    observable$ = new Observable(subscriber => {
      subscriber.next('Irene');  
      subscriber.next('Andrea');  
    })

    //v-compatta + unsubscribe + setTimeout
    observable2$ = new Observable(subscriber => {
      setTimeout(() => subscriber.next('Gatto'), 2000); 
      setTimeout(() => subscriber.next('Cane'), 5000); 
      //COMPLETE
      setTimeout(() => subscriber.complete(), 3000); 
      setTimeout(() => subscriber.next('Ou'), 3000); 
      setTimeout(() => subscriber.next('Erroreeee'), 3000); 
      
      
    })

    //v-interval
    interval$ = new Observable<number>(subscriber => {
      let counter = 1;
      const intervalId = setInterval(() =>{
        console.log('Emesso', counter);
        subscriber.next(counter++)
      }, 2000)

      return () => {
        clearInterval(intervalId);
      }
    })


  ngOnInit(){
    //NEXT 
      //v-pulita
      const observer = {
        next: (value: any) => console.log(value)
      };
      this.observable$.subscribe(observer);
      
      //v-compatta + unsubscribe + setTimeout
      const subscription = this.observable2$.subscribe(value => console.log(value));
      setTimeout(()=>{
        console.log('Unsubscribe');
        subscription.unsubscribe();
      }, 3000);
      
      //v-interval
      const subscriptionInterval = this.interval$.subscribe(value => console.log(value));

      setTimeout(() =>{
        console.log('Unsubscribe');
        subscriptionInterval.unsubscribe()
      }, 7000)
  }
}

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  standalone: true,
  imports: [],
  templateUrl: './memory-leak.component.html',
  styleUrl: './memory-leak.component.scss'
})
export class MemoryLeakComponent implements OnInit, OnDestroy {
  @ViewChild('trigger', { static: true })
  triggerButton!: ElementRef<HTMLButtonElement>;

  subscription!: Subscription;

  ngOnInit(): void {
    const triggerClick$ = new Observable<MouseEvent>((subscriber) => {
      const clickHandlerFunction = (event: MouseEvent) => {
        console.log('Evento di callback eseguito');
        subscriber.next(event);
      };

      this.triggerButton.nativeElement.addEventListener('click', clickHandlerFunction);

      return () => {
        console.log('Rimozione del listener');
        this.triggerButton.nativeElement.removeEventListener('click', clickHandlerFunction);
      };
    });

    this.subscription = triggerClick$.subscribe((event) =>
      console.log('Hai cliccato', event.type, event.x, event.y)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      console.log('Unsubscribe');
      this.subscription.unsubscribe(); // Triggera anche il teardown dell'observable
    }
  }
}

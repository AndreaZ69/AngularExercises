import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-ng-on-destroy',
  imports: [CommonModule],
  templateUrl: './ng-on-destroy.component.html',
  styleUrl: './ng-on-destroy.component.scss',
})
export class NgOnDestroyComponent implements OnInit, OnDestroy {
  counter = 0;
  timerId: any;
  private destroy$ = new Subject<void>();
  private subscription!: Subscription;

  ngOnInit(): void {
    
    this.timerId = setInterval(() => {
      this.counter++;
    }, 1000);

    
    this.subscription = interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => {
        console.log('Observable emission:', val);
      });
  }

  ngOnDestroy(): void {
    console.log(':( Componente distrutto! Pulizia in corso...');
    clearInterval(this.timerId);
    this.destroy$.next();
    this.destroy$.complete();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Subject, mergeMap, concatMap, switchMap, exhaustMap, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-rxjs-http',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rxjs-http.component.html',
  styleUrls: ['./rxjs-http.component.scss']
})
export class RxjsHttpComponent {
  userId = 1;
  user?: User;
  error = '';
  loading = false;

  private fetchSubject = new Subject<number>();

  constructor(private http: HttpClient) {}

  private fetchUser(id: number): Observable<User> {
    this.loading = true;
    this.error = '';
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  fetchWithMergeMap() {
    console.clear();
    console.log('fetchWithMergeMap:');

    this.fetchSubject.pipe(
      mergeMap(id => {
        console.log(`Chiamata per id ${id} con mergeMap`);
        return this.fetchUser(id);
      })
    ).subscribe({
      next: user => {
        this.user = user;
        this.loading = false;
        console.log('Risposta:', user);
      },
      error: err => {
        this.error = err.message || 'Errore';
        this.loading = false;
      }
    });

    this.emitMultipleRequests();
  }

  fetchWithConcatMap() {
    console.clear();
    console.log('fetchWithConcatMap:');

    this.fetchSubject.pipe(
      concatMap(id => {
        console.log(`Chiamata per id ${id} con concatMap`);
        return this.fetchUser(id);
      })
    ).subscribe({
      next: user => {
        this.user = user;
        this.loading = false;
        console.log('Risposta:', user);
      },
      error: err => {
        this.error = err.message || 'Errore';
        this.loading = false;
      }
    });

    this.emitMultipleRequests();
  }

  fetchWithSwitchMap() {
    console.clear();
    console.log('fetchWithSwitchMap:');

    this.fetchSubject.pipe(
      switchMap(id => {
        console.log(`Chiamata per id ${id} con switchMap`);
        return this.fetchUser(id);
      })
    ).subscribe({
      next: user => {
        this.user = user;
        this.loading = false;
        console.log('Risposta:', user);
      },
      error: err => {
        this.error = err.message || 'Errore';
        this.loading = false;
      }
    });

    this.emitMultipleRequests();
  }

  fetchWithExhaustMap() {
    console.clear();
    console.log('fetchWithExhaustMap:');

    this.fetchSubject.pipe(
      exhaustMap(id => {
        console.log(`Chiamata per id ${id} con exhaustMap`);
        return this.fetchUser(id);
      })
    ).subscribe({
      next: user => {
        this.user = user;
        this.loading = false;
        console.log('Risposta:', user);
      },
      error: err => {
        this.error = err.message || 'Errore';
        this.loading = false;
      }
    });

    this.emitMultipleRequests();
  }

  private emitMultipleRequests() {
    this.fetchSubject.next(this.userId);
  }
}

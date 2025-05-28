import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  standalone: true,
  selector: 'app-user-async',
  imports: [CommonModule],
  templateUrl: './user-async.component.html',
  styleUrl: './user-async.component.scss',
})
export class UserAsyncComponent {
  users$: Observable<User[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}

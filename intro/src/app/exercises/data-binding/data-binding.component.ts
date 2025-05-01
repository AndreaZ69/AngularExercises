import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'data-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  username = 'Mario Rossi';
  price = 29.99;
  quantity = 3;

  isAvailable = true;

  acquista() {
    alert(`Hai acquistato ${this.quantity} prodotti per un totale di €${this.getTotal().toFixed(2)}!`);
  }
  
  getTotal(): number {
    return this.price * this.quantity;
  }

  getFormattedName(): string {
    return this.username.toUpperCase();
  }

  get currentDate(): string {
    return new Date().toLocaleString();
  }
}

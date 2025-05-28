import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent {
  @Input() titolo!: string;
  @Input() utente!: { nome: string; eta: number };
  @Input() prodotti: { nome: string }[] = [];

  @Output() cliccato = new EventEmitter<void>();
  @Output() inviaTesto = new EventEmitter<string>();
  @Output() aggiunto = new EventEmitter<{ nome: string }>();

  valore = '';

  onClick() {
    this.cliccato.emit();
  }

  invia() {
    if (this.valore.trim()) {
      this.inviaTesto.emit(this.valore);
      this.valore = '';
    }
  }

  aggiungiAlCarrello(prodotto: { nome: string }) {
    this.aggiunto.emit(prodotto);
  }
}

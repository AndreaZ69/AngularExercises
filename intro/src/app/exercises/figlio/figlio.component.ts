import { Output, Component, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './figlio.component.html',
})
export class FiglioComponent {
  @Input() titolo!: string;
  //@Input() utente!: { nome: string; eta: number };
  //@Output() cliccato = new EventEmitter<void>();
  //@Output() inviaTesto = new EventEmitter<string>();
  //valore = '';
  //@Input() prodotti: { nome: string }[] = [];
  //@Output() aggiunto = new EventEmitter<{ nome: string }>();
}

import {
  Component,
  DoCheck,
  KeyValueDiffers,
  KeyValueDiffer
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-do-check-example',
  imports: [CommonModule],
  templateUrl: './do-check-example.component.html',
  styleUrl: './do-check-example.component.scss',
})
export class DoCheckExampleComponent implements DoCheck {
  persona = { nome: 'Mario', cognome: 'Rossi' };
  messaggio = '';
  private differ: KeyValueDiffer<string, any>;
  private contatore = 1;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find(this.persona).create();
  }

  cambiaNome() {
    this.persona.nome = `Mario${this.contatore++}`;
  }

  cambiaCognome() {
    this.persona.cognome = `Rossi${this.contatore++}`;
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.persona);
    if (changes) {
      this.messaggio = `Persona modificata in (${this.persona.nome} ${this.persona.cognome})`;
    }
  }
}

import { Component } from '@angular/core';
import { FiglioComponent } from '../figlio/figlio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [FiglioComponent, CommonModule],
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {
  titolo = 'Benvenuto!';
  utente = { nome: 'Luca', eta: 25 };
  messaggio = '';
  lista: string[] = [];
  prodotti = [
    { nome: 'Mouse' },
    { nome: 'Tastiera' },
    { nome: 'Monitor' }
  ];
  carrello: { nome: string }[] = [];

  mostraMessaggio() {
    this.messaggio = 'Hai cliccato il bottone nel figlio!';
  }

  aggiungiTesto(testo: string) {
    this.lista.push(testo);
  }

  aggiungiAlCarrello(prodotto: { nome: string }) {
    this.carrello.push(prodotto);
  }
}

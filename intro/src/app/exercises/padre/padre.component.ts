import { Component } from '@angular/core';
import { FiglioComponent } from '../figlio/figlio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FiglioComponent, CommonModule],
  templateUrl: './padre.component.html',
})
export class PadreComponent {
  titolo = 'Benvenuto!';
  //utente = { nome: 'Luca', eta: 25 };
  //messaggio = '';
  //mostraMessaggio() {
  //  this.messaggio = 'Hai cliccato il bottone nel figlio!';
  //}
  //lista: string[] = [];
  //aggiungiTesto(testo: string) {
  //  this.lista.push(testo);
  //}
  //prodotti = [
  //  { nome: 'Mouse' },
  //  { nome: 'Tastiera' },
  //  { nome: 'Monitor' }
  //];
  //carrello: { nome: string }[] = [];
  //aggiungiAlCarrello(prodotto: { nome: string }) {
  //  this.carrello.push(prodotto);
  //}
}

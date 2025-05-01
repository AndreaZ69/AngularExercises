import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'direttive-comunicazione-componenti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direttive-comunicazione-componenti.component.html',
  styleUrls: ['./direttive-comunicazione-componenti.component.scss']
})
export class direttiveComunicazioneComponenti {
  isLoggedIn = true;
  utenti = ['Mario', 'Luisa', 'Carlo'];
  ruolo = 'admin';

  evidenzia = true;

  cambiaRuolo() {
    const ruoli = ['admin', 'editor', 'guest'];
    const index = ruoli.indexOf(this.ruolo);
    this.ruolo = ruoli[(index + 1) % ruoli.length];
  }
}

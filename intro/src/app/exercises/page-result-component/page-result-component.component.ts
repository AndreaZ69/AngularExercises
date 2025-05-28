import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-page-result',
  templateUrl: './page-result-component.component.html',
  imports: [CommonModule],
  styleUrl: './page-result-component.component.scss'
})
export class PageResultComponent {
  nome = '';
  cognome = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nome = params['nome'];
      this.cognome = params['cognome'];
    });
  }
}

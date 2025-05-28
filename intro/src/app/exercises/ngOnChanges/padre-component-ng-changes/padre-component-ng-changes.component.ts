import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiglioComponentNgChangesComponent } from '../figlio-component-ng-changes/figlio-component-ng-changes.component';

@Component({
  standalone: true,
  selector: 'app-padre',
  imports: [CommonModule, FormsModule, FiglioComponentNgChangesComponent],
  templateUrl: './padre-component-ng-changes.component.html',
  styleUrl: './padre-component-ng-changes.component.scss'
})
export class PadreComponentNgChangesComponent {
  nome: string = '';
}
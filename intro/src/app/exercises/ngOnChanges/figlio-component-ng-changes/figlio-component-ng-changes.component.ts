import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-figlio',
  imports: [CommonModule],
  templateUrl: 'figlio-component-ng-changes.component.html'
})
export class FiglioComponentNgChangesComponent implements OnChanges {
  @Input() nome: string = '';
  log: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nome']) {
      const change = changes['nome'];
      const previous = change.previousValue;
      const current = change.currentValue;
      const first = change.firstChange;

      this.log.push(
        `Nome cambiato da "${previous}" a "${current}". Prima volta: ${first}`
      );
    }
  }
}

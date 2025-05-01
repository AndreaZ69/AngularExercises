import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'event-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  count = 0;
  log: string[] = [];
  inputText = '';
  selectValue = '';
  isMouseOver = false;

  incrementa() {
    this.count++;
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputText = input.value;
  }

  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectValue = select.value;
  }

  onMouseEnter() {
    this.isMouseOver = true;
    this.log.push('Mouse sopra il box');
  }

  onMouseLeave() {
    this.isMouseOver = false;
    this.log.push('Mouse fuori dal box');
  }

  onKeydown(event: KeyboardEvent) {
    this.log.push(`Tasto premuto: ${event.key}`);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.log.push(`Form inviato con input: ${this.inputText}`);
  }
}

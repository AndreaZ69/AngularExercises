import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOnDestroyComponent } from '../ng-on-destroy.component';

@Component({
  standalone: true,
  selector: 'app-toggle-wrapper',
  imports: [CommonModule, NgOnDestroyComponent],
  templateUrl: './toggle-wrapper.component.html',
  styleUrl: './toggle-wrapper.component.scss',
})
export class ToggleWrapperComponent {
  show = true;

  toggle() {
    this.show = !this.show;
  }
}

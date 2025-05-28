import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-page-form',
  templateUrl: './page-form-component.component.html',
  imports: [CommonModule, RouterModule],
  styleUrl: './page-form-component.component.scss'
})
export class PageFormComponent {
}

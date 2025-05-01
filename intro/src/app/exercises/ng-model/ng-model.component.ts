import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ng-model',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  email = '';
  password = '';
  username = '';
  acceptedTerms = false;
  selectedGender = '';
  selectedLanguage = '';
  comment = '';
}

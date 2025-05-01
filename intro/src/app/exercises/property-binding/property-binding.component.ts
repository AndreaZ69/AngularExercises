import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  profileImageUrl = 'https://media.tenor.com/uHG_IhZLnGoAAAAM/dario-moccia-distanze.gif';
  isFormValid = false;
  userName = 'Dario Moccia';
  hasError = false;
  cardWidth = 300;
  favoriteColor = 'lightblue';
  subscribeToNewsletter = true;

  toggleError() {
    this.hasError = !this.hasError;
  }

  validateForm() {
    this.isFormValid = true;
  }
  submitForm() {
    alert('Form inviato!');
  }
  
}

import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-view-child-demo',
  imports: [CommonModule],
  templateUrl: './view-child-children.component.html',
  styleUrls: ['./view-child-children.component.scss'],
})
export class ViewChildChildrenComponent implements AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement>;
  @ViewChildren('btnRef') btns!: QueryList<ElementRef<HTMLButtonElement>>;

  buttons = ['Pulsante 1', 'Pulsante 2', 'Pulsante 3'];
  btnColors: string[] = ['lightblue', 'lightgreen', 'lightpink'];

  ngAfterViewInit() {
    this.focusInput();
  }

  focusInput() {
    this.myInput.nativeElement.focus();
  }

  onButtonClick(index: number) {
    alert(`Hai cliccato il bottone: ${this.buttons[index]}`);
  }

  colorAllRed() {
    this.btns.forEach((btnRef, idx) => {
      btnRef.nativeElement.style.backgroundColor = 'tomato';
      this.btnColors[idx] = 'tomato';
    });
  }
}

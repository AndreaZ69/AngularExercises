import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-ng-after-view-init',
  imports: [CommonModule],
  templateUrl: './ng-after-view-init.component.html',
  styleUrl: './ng-after-view-init.component.scss',
})
export class NgAfterViewInitComponent implements AfterViewInit {
  @ViewChild('myDiv') myDivElement!: ElementRef<HTMLDivElement>;

  private toggle = false;

  ngAfterViewInit(): void {
    console.log('View inizializzata!');

    setInterval(() => {
      this.toggle = !this.toggle;

      const el = this.myDivElement.nativeElement;
      el.style.backgroundColor = this.toggle ? 'lightcoral' : 'lightseagreen';
      el.innerText = this.toggle
        ? 'Stato 1'
        : 'Stato 2';
    }, 3000);
  }
}

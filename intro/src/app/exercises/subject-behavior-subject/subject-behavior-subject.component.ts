import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-color-demo',
  imports: [CommonModule],
  templateUrl: './subject-behavior-subject.component.html',
  styleUrl: './subject-behavior-subject.component.scss',
})
export class SubjectBehaviorSubjectComponent {
  private subject = new Subject<string>();
  private behavior = new BehaviorSubject<string>('lightgray');

  behaviorColor: string | null = null;
  subjectColor: string | null = null;

  emittedColors: string[] = [];
  colors = ['lightblue', 'lightgreen', 'lightpink', 'lightcoral'];
  index = 0;

  constructor() {
    
    this.behavior.subscribe(color => this.behaviorColor = color);
    this.subject.subscribe(color => this.subjectColor = color);

  }

  emitColor() {
    const color = this.colors[this.index];
    this.index = (this.index + 1) % this.colors.length;

    this.emittedColors.push(color);
    this.behavior.next(color);
    this.subject.next(color);
  }

  subscribeLate() {
    this.behaviorColor = null;
    this.subjectColor = null;

    setTimeout(() => {
      this.behavior.subscribe(color => this.behaviorColor = color);
    }, 3000);

    setTimeout(() => {
      this.subject.subscribe(color => this.subjectColor = color);
    }, 3000);
  }
}

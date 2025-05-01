import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirettiveComunicazioneComponentiComponent } from './direttive-comunicazione-componenti.component';

describe('DirettiveComunicazioneComponentiComponent', () => {
  let component: DirettiveComunicazioneComponentiComponent;
  let fixture: ComponentFixture<DirettiveComunicazioneComponentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirettiveComunicazioneComponentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirettiveComunicazioneComponentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

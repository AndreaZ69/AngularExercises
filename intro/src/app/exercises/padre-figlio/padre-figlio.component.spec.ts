import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreFiglioComponent } from './padre-figlio.component';

describe('PadreFiglioComponent', () => {
  let component: PadreFiglioComponent;
  let fixture: ComponentFixture<PadreFiglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreFiglioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreFiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametriDemoComponent } from './parametri-demo.component';

describe('ParametriDemoComponent', () => {
  let component: ParametriDemoComponent;
  let fixture: ComponentFixture<ParametriDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametriDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametriDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

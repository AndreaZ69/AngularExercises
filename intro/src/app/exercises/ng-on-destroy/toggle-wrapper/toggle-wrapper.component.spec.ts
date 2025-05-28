import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleWrapperComponent } from './toggle-wrapper.component';

describe('ToggleWrapperComponent', () => {
  let component: ToggleWrapperComponent;
  let fixture: ComponentFixture<ToggleWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckExampleComponent } from './do-check-example.component';

describe('DoCheckExampleComponent', () => {
  let component: DoCheckExampleComponent;
  let fixture: ComponentFixture<DoCheckExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoCheckExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoCheckExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

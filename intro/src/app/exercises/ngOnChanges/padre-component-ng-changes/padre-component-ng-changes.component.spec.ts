import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComponentNgChangesComponent } from './padre-component-ng-changes.component';

describe('PadreComponentNgChangesComponent', () => {
  let component: PadreComponentNgChangesComponent;
  let fixture: ComponentFixture<PadreComponentNgChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComponentNgChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComponentNgChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

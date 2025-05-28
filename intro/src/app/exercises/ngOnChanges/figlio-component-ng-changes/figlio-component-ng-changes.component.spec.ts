import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioComponentNgChangesComponent } from './figlio-component-ng-changes.component';

describe('FiglioComponentNgChangesComponent', () => {
  let component: FiglioComponentNgChangesComponent;
  let fixture: ComponentFixture<FiglioComponentNgChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiglioComponentNgChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiglioComponentNgChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

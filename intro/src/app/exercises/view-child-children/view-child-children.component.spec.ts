import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChildrenComponent } from './view-child-children.component';

describe('ViewChildChildrenComponent', () => {
  let component: ViewChildChildrenComponent;
  let fixture: ComponentFixture<ViewChildChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

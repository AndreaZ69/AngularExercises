import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormComponentComponent } from './page-form-component.component';

describe('PageFormComponentComponent', () => {
  let component: PageFormComponentComponent;
  let fixture: ComponentFixture<PageFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

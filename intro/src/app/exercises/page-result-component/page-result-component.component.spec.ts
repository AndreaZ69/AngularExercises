import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResultComponentComponent } from './page-result-component.component';

describe('PageResultComponentComponent', () => {
  let component: PageResultComponentComponent;
  let fixture: ComponentFixture<PageResultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageResultComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

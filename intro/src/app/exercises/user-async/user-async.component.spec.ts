import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAsyncComponent } from './user-async.component';

describe('UserAsyncComponent', () => {
  let component: UserAsyncComponent;
  let fixture: ComponentFixture<UserAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetLinkComponent } from './password-reset-link.component';

describe('PasswordResetLinkComponent', () => {
  let component: PasswordResetLinkComponent;
  let fixture: ComponentFixture<PasswordResetLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

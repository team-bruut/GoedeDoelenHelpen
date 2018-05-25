import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEventRegisterComponent } from './default-event-register.component';

describe('DefaultRegisterComponent', () => {
  let component: DefaultEventRegisterComponent;
  let fixture: ComponentFixture<DefaultEventRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultEventRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEventRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

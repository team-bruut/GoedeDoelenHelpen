import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatedComponent } from './donated.component';

describe('DonatedComponent', () => {
  let component: DonatedComponent;
  let fixture: ComponentFixture<DonatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatedComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

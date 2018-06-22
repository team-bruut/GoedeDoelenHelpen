import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsChartComponent } from './donations-chart.component';

describe('DonationsChartComponent', () => {
  let component: DonationsChartComponent;
  let fixture: ComponentFixture<DonationsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsChartComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

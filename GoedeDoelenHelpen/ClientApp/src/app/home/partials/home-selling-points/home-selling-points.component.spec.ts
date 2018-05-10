import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSellingPointsComponent } from './home-selling-points.component';

describe('HomeSellingPointsComponent', () => {
  let component: HomeSellingPointsComponent;
  let fixture: ComponentFixture<HomeSellingPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSellingPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSellingPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

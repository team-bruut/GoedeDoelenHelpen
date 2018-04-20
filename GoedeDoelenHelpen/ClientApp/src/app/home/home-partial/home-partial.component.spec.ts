import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartialComponent } from './home-partial.component';

describe('HomePartialComponent', () => {
  let component: HomePartialComponent;
  let fixture: ComponentFixture<HomePartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

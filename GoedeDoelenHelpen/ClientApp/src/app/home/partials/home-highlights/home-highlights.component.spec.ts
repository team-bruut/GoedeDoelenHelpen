import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHighlightsComponent } from './home-highlights.component';

describe('HomeHighlightsComponent', () => {
  let component: HomeHighlightsComponent;
  let fixture: ComponentFixture<HomeHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

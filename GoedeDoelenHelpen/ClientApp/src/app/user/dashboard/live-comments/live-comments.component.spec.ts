import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCommentsComponent } from './live-comments.component';

describe('LiveCommentsComponent', () => {
  let component: LiveCommentsComponent;
  let fixture: ComponentFixture<LiveCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

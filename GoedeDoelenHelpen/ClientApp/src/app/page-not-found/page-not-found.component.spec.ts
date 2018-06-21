import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuService } from './../nav-menu/nav-menu.service';

import { PageNotFoundComponent } from './page-not-found.component';

import { CirclesComponent } from './../elements/circles/circles.component';
import { GradientComponent } from './../elements/gradient/gradient.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PageNotFoundComponent,
        CirclesComponent,
        GradientComponent,
      ],
      providers: [ NavMenuService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

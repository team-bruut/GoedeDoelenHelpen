import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule, MatDialogModule } from '@angular/material';

import { NavMenuService } from '../../nav-menu/nav-menu.service';

import { EventPageComponent } from './event-page.component';

import { UserComponent } from './partials/user/user.component';
import { DetailsComponent } from './partials/details/details.component';
import { EditDetailsComponent } from './partials/details/edit-details/edit-details.component';
import { DonatedComponent } from './partials/donated/donated.component';
import { CommentsComponent } from './partials/comments/comments.component';
import { CharityComponent } from './partials/charity/charity.component';

import { CirclesComponent } from './../../elements/circles/circles.component';
import { GradientComponent } from './../../elements/gradient/gradient.component';

describe('EventPageComponent', () => {
  let component: EventPageComponent;
  let fixture: ComponentFixture<EventPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatAutocompleteModule,
        MatDialogModule,
      ],
      declarations: [
        EventPageComponent,
        UserComponent,
        DetailsComponent,
        EditDetailsComponent,
        DonatedComponent,
        CommentsComponent,
        CharityComponent,
        CirclesComponent,
        GradientComponent,
      ],
      providers: [
        NavMenuService,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

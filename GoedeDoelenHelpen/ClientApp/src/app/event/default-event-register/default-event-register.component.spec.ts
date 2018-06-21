import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatAutocomplete } from '@angular/material';

import { AuthenticationService } from './../../authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterStub } from './../../../testing/router.stub';

import { NavMenuService } from '../../nav-menu/nav-menu.service';

import { DefaultEventRegisterComponent } from './default-event-register.component';

import { CirclesComponent } from './../../elements/circles/circles.component';
import { GradientComponent } from './../../elements/gradient/gradient.component';

describe('DefaultRegisterComponent', () => {
  let component: DefaultEventRegisterComponent;
  let fixture: ComponentFixture<DefaultEventRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        DefaultEventRegisterComponent,
        CirclesComponent,
        GradientComponent,
        MatAutocomplete,
      ],
      providers: [
        FormBuilder,
        NavMenuService,
        AuthenticationService,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
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

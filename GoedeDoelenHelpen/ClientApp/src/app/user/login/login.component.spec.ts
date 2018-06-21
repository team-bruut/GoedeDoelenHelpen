import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from './../../authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { Router } from '@angular/router';
import { RouterStub } from './../../../testing/router.stub';

import { LoginComponent } from './login.component';

import { CirclesComponent } from './../../elements/circles/circles.component';
import { GradientComponent } from './../../elements/gradient/gradient.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
      ],
      declarations: [
        LoginComponent,
        CirclesComponent,
        GradientComponent,
      ],
      providers: [
        FormBuilder,
        AuthenticationService,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { AuthenticationService } from './../../authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterStub } from './../../../testing/stubs/router.stub';
import { ActivatedRouteStub } from './../../../testing/stubs/activated-route.stub';

import { PasswordResetLinkComponent } from './password-reset-link.component';

describe('PasswordResetLinkComponent', () => {
  let component: PasswordResetLinkComponent;
  let fixture: ComponentFixture<PasswordResetLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [
        PasswordResetLinkComponent
      ],
      providers: [
        FormBuilder,
        AuthenticationService,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

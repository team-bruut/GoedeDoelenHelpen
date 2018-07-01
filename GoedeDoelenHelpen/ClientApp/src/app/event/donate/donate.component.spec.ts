import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { NavMenuService } from './../../nav-menu/nav-menu.service';
import { AuthenticationService } from './../../authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterStub } from './../../../testing/stubs/router.stub';

import { DonateComponent } from './donate.component';

import { CirclesComponent } from './../../elements/circles/circles.component';
import { GradientComponent } from './../../elements/gradient/gradient.component';

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DonateComponent,
        CirclesComponent,
        GradientComponent,
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
    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterStub } from './../../testing/stubs/router.stub';
import { WindowWrapper } from './../classes/windowwrapper/windowwrapper';
import { MatDialog } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

import { FacebookComponent } from './facebook.component';

describe('FacebookComponent', () => {
  let component: FacebookComponent;
  let fixture: ComponentFixture<FacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        OverlayModule,
      ],
      declarations: [ FacebookComponent ],
      providers: [
        WindowWrapper,
        MatDialog,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterLinkDirectiveStub } from './../testing/stubs/router-link-directive-stub';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  @Component({selector: 'app-nav-menu', template: ''})
  class NavMenuStubComponent {}

  @Component({selector: 'router-outlet', template: ''})
  class RouterOutletStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        RouterLinkDirectiveStub,
        NavMenuStubComponent,
        RouterOutletStubComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

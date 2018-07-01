import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationService } from './../../authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterStub } from './../../../testing/stubs/router.stub';
import { NavMenuService } from './../../nav-menu/nav-menu.service';
import { WindowWrapper } from './../../classes/windowwrapper/windowwrapper';

import { DashboardComponent } from './dashboard.component';
import { DonatedComponent } from './donated/donated.component';
import { VisitorsChartComponent } from './visitors-chart/visitors-chart.component';
import { LikesChartComponent } from './likes-chart/likes-chart.component';
import { DonationsChartComponent } from './donations-chart/donations-chart.component';
import { LiveCommentsComponent } from './live-comments/live-comments.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HeaderComponent } from './header/header.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [
        DashboardComponent,
        DonatedComponent,
        VisitorsChartComponent,
        LikesChartComponent,
        DonationsChartComponent,
        LiveCommentsComponent,
        ProgressBarComponent,
        HeaderComponent,
      ],
      providers: [
        { provide: NavMenuService, useClass: NavMenuService },
        AuthenticationService,
        WindowWrapper,
        {provide: 'BASE_URL', useValue: ''},
        {provide: Router, useClass: RouterStub},
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

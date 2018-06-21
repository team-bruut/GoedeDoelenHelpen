import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuService } from './../../nav-menu/nav-menu.service';

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

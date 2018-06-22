import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuService } from './../nav-menu/nav-menu.service';

import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './partials/home-hero/home-hero.component';
import { HomeDashboardComponent } from './partials/home-dashboard/home-dashboard.component';
import { HomeSellingPointsComponent } from './partials/home-selling-points/home-selling-points.component';
import { HomeHighlightsComponent } from './partials/home-highlights/home-highlights.component';
import { HomeFunctionsComponent } from './partials/home-functions/home-functions.component';
import { HomeQuoteComponent } from './partials/home-quote/home-quote.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HomeHeroComponent,
        HomeDashboardComponent,
        HomeSellingPointsComponent,
        HomeHighlightsComponent,
        HomeFunctionsComponent,
        HomeQuoteComponent,
      ],
      providers: [
        { provide: NavMenuService, useClass: NavMenuService },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

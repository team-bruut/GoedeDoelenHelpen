// Modules
import { NgModule, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

// Home Components
import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './partials/home-hero/home-hero.component';
import { HomeDashboardComponent } from './partials/home-dashboard/home-dashboard.component';
import { HomeSellingPointsComponent } from './partials/home-selling-points/home-selling-points.component';
import { HomeHighlightsComponent } from './partials/home-highlights/home-highlights.component';
import { HomeFunctionsComponent } from './partials/home-functions/home-functions.component';
import { HomeQuoteComponent } from './partials/home-quote/home-quote.component';

// General Components
import { RoundedButtonDirective } from '../elements/rounded-button.directive';
import { GradientComponent } from '../elements/gradient/gradient.component';
import { CirclesGeneratorComponent } from '../elements/circles/circles.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeDashboardComponent,
    HomeHighlightsComponent,
    HomeSellingPointsComponent,
    HomeFunctionsComponent,
    HomeQuoteComponent,
    GradientComponent,
    CirclesGeneratorComponent
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }

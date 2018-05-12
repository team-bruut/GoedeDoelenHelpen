// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Dashboard Components
import { DonatedComponent } from './donated/donated.component';
import { VisitorsChartComponent } from './visitors-chart/visitors-chart.component';
import { LikesChartComponent } from './likes-chart/likes-chart.component';
import { DonationsChartComponent } from './donations-chart/donations-chart.component';
import { LiveCommentsComponent } from './live-comments/live-comments.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NgxChartsModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    DonatedComponent,
    VisitorsChartComponent,
    LikesChartComponent,
    DonationsChartComponent,
    LiveCommentsComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }

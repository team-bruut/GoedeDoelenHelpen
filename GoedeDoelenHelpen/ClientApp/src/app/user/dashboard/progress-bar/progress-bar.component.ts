import { Component, OnInit } from '@angular/core';
import { ChartSettings } from './../dashboard.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  cs = new ChartSettings();

  chartType = 'linear-gauge';
  view = [300, 100];
  scheme = this.cs.getColorScheme(this.cs.colorScheme);
  animations = true;
  gaugeMin = 0;
  gaugeMax = 5;
  gaugeLargeSegments = 5;
  gaugeTextValue = 'Progress';
  gaugeUnits = 'Niveau';
  gaugeShowAxis = true;
  gaugeValue = 2; // linear gauge value
  gaugePreviousValue = 3;

  constructor() { }

  ngOnInit() {
  }

}

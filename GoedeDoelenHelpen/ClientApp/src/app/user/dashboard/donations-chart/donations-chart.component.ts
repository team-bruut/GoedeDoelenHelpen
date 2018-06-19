import { Component, OnInit } from '@angular/core';
import { ChartSettings } from '../dashboard.component';

@Component({
  selector: 'app-donations-chart',
  templateUrl: './donations-chart.component.html',
  styleUrls: ['./donations-chart.component.scss']
})
export class DonationsChartComponent implements OnInit {
  cs = new ChartSettings();

  legendTitle: string;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  timeline: boolean;
  label: string;

  chartType: string;
  view: number[];
  results: any[];

  scheme: object;
  schemeType: string;

  animations: boolean;
  tooltipDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.animations = true;
    this.tooltipDisabled = false;
    this.legendTitle = '';
    this.chartType = 'pie-grid';
    this.label = 'Totaal';

    this.scheme = this.cs.getColorScheme(this.cs.colorScheme);
    this.schemeType = 'ordinal';

    this.results = [
      {
        'name': '1000 bezoekers',
        'value': 542
      },
      {
        'name': 'Donaties',
        'value': 279
      },
    ];
  }

  pieTooltipText({data}) {
    const label = data.name.toLocaleString();
    const val = data.value.toLocaleString();

    return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">${val}</span>
    `;
  }
}

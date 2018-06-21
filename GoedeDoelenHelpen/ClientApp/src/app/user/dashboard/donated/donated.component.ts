import { Component, OnInit } from '@angular/core';
import { ChartSettings } from '../dashboard.component';

@Component({
  selector: 'app-donated',
  templateUrl: './donated.component.html',
  styleUrls: ['./donated.component.scss']
})
export class DonatedComponent implements OnInit {
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
    this.label = 'Opgehaald';

    this.scheme = this.cs.getColorScheme(this.cs.colorScheme);
    this.schemeType = 'ordinal';

    this.results = [
      {
        'name': 'Opgehaald',
        'value': 950
      },
    ];
  }

  pieTooltipText({data}) {
    const label = data.name.toLocaleString();
    const val = data.value.toLocaleString();

    return `
      <span class="tooltip-label">${label}</span>
      <span class="tooltip-val">&euro;${val}</span>
    `;
  }
}

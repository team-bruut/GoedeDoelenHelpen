import { Component, OnInit } from '@angular/core';
import { ChartSettings } from '../dashboard.component';
import { log } from 'util';

@Component({
  selector: 'app-visitors-chart',
  templateUrl: './visitors-chart.component.html',
  styleUrls: ['./visitors-chart.component.scss']
})
export class VisitorsChartComponent implements OnInit {
  cs = new ChartSettings();

  legendTitle: string;
  xAxisLabel: string;
  yAxisLabel: string;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  timeline: boolean;

  chartType: string;
  view: number[];
  results: any[];
  curveType: string;
  curve: object;

  scheme: object;
  schemeType: string;

  constructor() { }

  ngOnInit() {
    this.legendTitle = '';
    this.xAxisLabel = 'Datum';
    this.yAxisLabel = 'Aantal';
    this.timeline = false;
    this.chartType = 'line-chart';

    this.curveType = 'Natural';
    this.curve = this.cs.getCurve(this.curveType);

    this.scheme = this.cs.getColorScheme(this.cs.colorScheme);
    this.schemeType = 'ordinal';

    this.results = [
      {
        'name': 'Bezoekers',
        'series': [
          {
            'value': 39,
            'name': '2018-04-01T03:15:35.469Z',
          },
          {
            'value': 19,
            'name': '2018-04-04T03:15:35.469Z',
          },
          {
            'value': 43,
            'name': '2018-04-07T03:15:35.469Z',
          },
          {
            'value': 64,
            'name': '2018-04-10T03:15:35.469Z',
          },
          {
            'value': 79,
            'name': '2018-04-13T03:15:35.469Z',
          },
          {
            'value': 92,
            'name': '2018-04-17T03:15:35.469Z'
          },
          {
            'value': 61,
            'name': '2018-04-20T03:15:35.469Z'
          }
        ]
      },
      {
        'name': 'Donaties',
        'series': [
          {
            'value': 9,
            'name': '2018-04-01T03:15:35.469Z',
          },
          {
            'value': 3,
            'name': '2018-04-04T03:15:35.469Z',
          },
          {
            'value': 8,
            'name': '2018-04-07T03:15:35.469Z',
          },
          {
            'value': 23,
            'name': '2018-04-10T03:15:35.469Z',
          },
          {
            'value': 30,
            'name': '2018-04-13T03:15:35.469Z',
          },
          {
            'value': 59,
            'name': '2018-04-17T03:15:35.469Z'
          },
          {
            'value': 45,
            'name': '2018-04-20T03:15:35.469Z'
          }
        ]
      },
    ];

    this.results.forEach(o => o.series.forEach(s => s.name = this.toLocalDate(s.name)));
  }

  toLocalDate(dateString: string): string {
    const options = { month: 'short', day: 'numeric' };

    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', options);
  }

}

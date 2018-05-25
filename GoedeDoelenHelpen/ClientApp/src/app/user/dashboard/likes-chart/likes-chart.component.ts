import { Component, OnInit } from '@angular/core';
import { ChartSettings } from '../dashboard.component';

@Component({
  selector: 'app-likes-chart',
  templateUrl: './likes-chart.component.html',
  styleUrls: ['./likes-chart.component.scss']
})
export class LikesChartComponent implements OnInit {
  cs = new ChartSettings();

  chartType = 'bar-vertical-stacked';
  view: any[];
  legendTitle = '';
  xAxisLabel = 'Maand';
  yAxisLabel = 'Likes';

  scheme = this.cs.getColorScheme(this.cs.colorScheme);
  schemeType = 'ordinal';

  results = [
    {
      'name': '2018-01-01T03:15:35.469Z',
      'series': [
        {
          'value': 95,
          'name': 'Facebook',
        },
        {
          'value': 72,
          'name': 'Twitter'
        },
        {
          'value': 20,
          'name': 'LinkedIn'
        },
      ]
    },
    {
      'name': '2018-02-01T03:15:35.469Z',
      'series': [
        {
          'value': 65,
          'name': 'Facebook',
        },
        {
          'value': 35,
          'name': 'Twitter'
        },
        {
          'value': 12,
          'name': 'LinkedIn'
        },
      ]
    },
    {
      'name': '2018-03-01T03:15:35.469Z',
      'series': [
        {
          'value': 30,
          'name': 'Facebook',
        },
        {
          'value': 55,
          'name': 'Twitter'
        },
        {
          'value': 45,
          'name': 'LinkedIn'
        },
      ]
    },
    {
      'name': '2018-04-01T03:15:35.469Z',
      'series': [
        {
          'value': 130,
          'name': 'Facebook',
        },
        {
          'value': 150,
          'name': 'Twitter'
        },
        {
          'value': 13,
          'name': 'LinkedIn'
        },
      ]
    },
    {
      'name': '2018-05-01T03:15:35.469Z',
      'series': [
        {
          'value': 105,
          'name': 'Facebook',
        },
        {
          'value': 100,
          'name': 'Twitter'
        },
        {
          'value': 25,
          'name': 'LinkedIn'
        },
      ]
    },
  ];

  constructor() {
    this.results.forEach(o => o.name = this.toLocalDate(o.name));
  }

  ngOnInit() {
  }

  toLocalDate(dateString: string): string {
    const options = { month: 'short' };

    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', options);
  }

}

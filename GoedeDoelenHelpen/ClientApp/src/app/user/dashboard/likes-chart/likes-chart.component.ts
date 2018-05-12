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
  legendTitle = 'Legend';
  xAxisLabel = 'Country';
  yAxisLabel = 'GDP Per Capita';

  scheme = this.cs.getColorScheme('flame');
  schemeType = 'ordinal';

  results = [
    {
      'name': 'Morocco',
      'series': [
        {
          'value': 2839,
          'name': '2016-09-20T03:15:35.469Z'
        },
        {
          'value': 6228,
          'name': '2016-09-14T19:30:10.542Z'
        },
        {
          'value': 3552,
          'name': '2016-09-21T08:19:17.115Z'
        },
        {
          'value': 4914,
          'name': '2016-09-17T19:16:41.397Z'
        },
        {
          'value': 6551,
          'name': '2016-09-17T12:41:01.595Z'
        }
      ]
    },
    {
      'name': 'Algeria',
      'series': [
        {
          'value': 2816,
          'name': '2016-09-20T03:15:35.469Z'
        },
        {
          'value': 5940,
          'name': '2016-09-14T19:30:10.542Z'
        },
        {
          'value': 5489,
          'name': '2016-09-21T08:19:17.115Z'
        },
        {
          'value': 5025,
          'name': '2016-09-17T19:16:41.397Z'
        },
        {
          'value': 2661,
          'name': '2016-09-17T12:41:01.595Z'
        }
      ]
    },
    {
      'name': 'Philippines',
      'series': [
        {
          'value': 6289,
          'name': '2016-09-20T03:15:35.469Z'
        },
        {
          'value': 5214,
          'name': '2016-09-14T19:30:10.542Z'
        },
        {
          'value': 3898,
          'name': '2016-09-21T08:19:17.115Z'
        },
        {
          'value': 5336,
          'name': '2016-09-17T19:16:41.397Z'
        },
        {
          'value': 2610,
          'name': '2016-09-17T12:41:01.595Z'
        }
      ]
    },
    {
      'name': 'Equatorial Guinea',
      'series': [
        {
          'value': 6905,
          'name': '2016-09-20T03:15:35.469Z'
        },
        {
          'value': 3636,
          'name': '2016-09-14T19:30:10.542Z'
        },
        {
          'value': 4372,
          'name': '2016-09-21T08:19:17.115Z'
        },
        {
          'value': 2823,
          'name': '2016-09-17T19:16:41.397Z'
        },
        {
          'value': 4737,
          'name': '2016-09-17T12:41:01.595Z'
        }
      ]
    },
    {
      'name': 'Maldives',
      'series': [
        {
          'value': 4433,
          'name': '2016-09-20T03:15:35.469Z'
        },
        {
          'value': 2213,
          'name': '2016-09-14T19:30:10.542Z'
        },
        {
          'value': 4775,
          'name': '2016-09-21T08:19:17.115Z'
        },
        {
          'value': 6880,
          'name': '2016-09-17T19:16:41.397Z'
        },
        {
          'value': 6100,
          'name': '2016-09-17T12:41:01.595Z'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

@Component({
  selector: 'app-visitors-chart',
  templateUrl: './visitors-chart.component.html',
  styleUrls: ['./visitors-chart.component.scss']
})
export class VisitorsChartComponent implements OnInit {

  schemeType = 'linear';
  chartType = 'line-chart';
  view: any[];
  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
    'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
  ];

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

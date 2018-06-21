import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavMenuService } from '../../nav-menu/nav-menu.service';
import * as shape from 'd3-shape';
import * as d3 from 'd3';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private navMenuService: NavMenuService) {
    navMenuService.setTheme('default');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementsByClassName('mat-sidenav-content').item(0).scrollTop = 0;
  }

}

export class ChartSettings {
  theme = 'light';
  colorScheme = 'flame';

  showGridLines = false;
  showXAxis = true;
  showYAxis = true;
  showYAxisLabel = false;
  showXAxisLabel = false;

  fitContainer = true;
  gradient = false;
  showLegend = true;
  showDataLabel = false;
  tooltipDisabled = false;
  showSeriesOnHover = true;
  roundEdges = true;
  animations = true;
  autoScale = true;
  roundDomains = true;

  private colorSets = [{
      name: 'fire',
      selectable: true,
      group: 'Ordinal',
      domain: [
          '#ff3d00', '#bf360c', '#ff8f00', '#ff6f00', '#ff5722', '#e65100', '#ffca28', '#ffab00'
    ]}, {
      name: 'flame',
      selectable: false,
      group: 'Ordinal',
      domain: [
          '#ea972a', '#D3342D', '#EF6D49', '#FAAD67', '#FDDE90', '#DBED91', '#A9D770', '#6CBA67', '#2C9653', '#146738'
      ]}
  ];

  private interpolationTypes = [
    'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
    'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
  ];

  private closedInterpolationTypes = [
    'Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'
  ];

  private curves = {
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

  getColorScheme(name: string) {
    return this.colorSets.find(s => s.name === name);
  }

  getCurve(type: string) {
    return this.curves[type];
  }
}

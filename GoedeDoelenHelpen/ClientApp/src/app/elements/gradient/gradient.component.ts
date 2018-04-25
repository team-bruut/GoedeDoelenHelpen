import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss']
})
export class GradientComponent implements OnInit {

  screenheight: string;
  screenwidth: string;

  constructor() { }

  ngOnInit() {
    this.screenheight = window.innerHeight + 'px';
    this.screenwidth = window.innerWidth + 'px';
  }

}

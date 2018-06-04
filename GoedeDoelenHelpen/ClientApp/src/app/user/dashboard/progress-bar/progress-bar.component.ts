import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { ChartSettings } from './../dashboard.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @ViewChild('progressBar') progressBar: ElementRef;

  level: number;
  levelString: String;
  levelArray: any[];
  maxLevels: number;

  value: number;
  v: number;
  valueString: string;
  maxValue: number;

  constructor() {
  }

  ngOnInit() {
    this.level = 1;
    this.levelArray = [
      { 'name': 'Beginner', 'steps': [] },
      { 'name': 'Enthousiasteling', 'steps': [
          { 'desc': 'Je Facebook account toe te voegen', 'link': '<>', 'done': true },
          { 'desc': 'Vandaag iets te posten', 'link': '<>', 'done': false },
          { 'desc': 'Je Twitter account toe te voegen', 'link': '<>', 'done': false }
        ] },
      { 'name': 'Professional', 'steps': [
        { 'desc': 'Je LinkedIn account toe te voegen', 'link': '<>', 'done': false },
        { 'desc': 'Deze week twee keer  iets te posten', 'link': '<>', 'done': true },
        { 'desc': 'Je Hyves account toe te voegen', 'link': '<>', 'done': true }
      ] },
      { 'name': 'Expert', 'steps': [] },
      { 'name': 'Legend', 'steps': [] }
    ];
    this.maxLevels = this.levelArray.length;

    this.value = 0;
    this.maxValue = 100;

    this.updateLevel();
    this.updateValue();
  }

  updateLevel() {
    if (this.level > this.maxLevels) {
      this.level = this.maxLevels;
    }
    this.levelString = this.levelArray[this.level - 1].name;
  }

  updateValue() {
    this.value = (this.level - 1) * 25;
    if (this.value > this.maxValue) {
      this.value = this.maxValue;
    }

    this.v = 2.3 - ((this.level - 1) * 0.6); // adds some space to hit the full points
    this.valueString = this.value + this.v + '%';
  }

  move(addLevels: number) {
    this.level += addLevels;
    this.updateLevel();
    this.updateValue();
  }
}

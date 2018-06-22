import { Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { ChartSettings } from './../dashboard.component';
import { FbService } from '../../../facebook/fb.service';
import { AuthenticationService } from '../../../authentication.service';

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

  constructor(
    private fbService: FbService,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.level = 1;
    this.levelArray = [
      { 'name': 'Beginner', 'steps': [] },
      { 'name': 'Enthousiasteling', 'steps': [
          { 'desc': 'Je Facebook account toe te voegen', 'link': '<>', 'done': false, 'onclick': this.fbLoginPrompt, 'service': this.fbService },
        { 'desc': 'Vandaag iets te posten', 'link': '<>', 'done': false, 'onclick': this.fbSharePrompt , 'service': this.fbService },
        { 'desc': 'Je Twitter account toe te voegen', 'link': '<>', 'done': false, 'onclick': this.stub}
        ] },
      { 'name': 'Professional', 'steps': [
        { 'desc': 'Je LinkedIn account toe te voegen', 'link': '<>', 'done': false, 'onclick': this.stub },
        { 'desc': 'Deze week twee keer  iets te posten', 'link': '<>', 'done': true, 'onclick': this.stub },
        { 'desc': 'Je Hyves account toe te voegen', 'link': '<>', 'done': true, 'onclick': this.stub }
      ] },
      { 'name': 'Expert', 'steps': [] },
      { 'name': 'Legend', 'steps': [] }
    ];
    this.maxLevels = this.levelArray.length;

    this.value = 0;
    this.maxValue = 100;

    this.updateLevel();
    this.updateValue();

    this.authService.getFB().subscribe(result => this.levelArray[1].steps[0].done = result.loggedIn);
  }

  //onClickEvents
  stub(done: boolean) {
    console.log("Works");
  }

  fbLoginPrompt(done: boolean): boolean {
    if (done == false) {
      let self: any = this;
      return self.service.fbLoginPrompt();
    } else {
      return false;
    }
  }

  fbSharePrompt(done: boolean) {
    if (done == false) {
      console.log(this);
      let self: any = this;
      self.done = self.service.fbSharePrompt();
    }
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

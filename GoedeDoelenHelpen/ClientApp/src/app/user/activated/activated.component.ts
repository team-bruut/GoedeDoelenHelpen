import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.scss']
})
export class ActivatedComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementsByClassName('mat-sidenav-content').item(0).scrollTop = 0;
  }
}

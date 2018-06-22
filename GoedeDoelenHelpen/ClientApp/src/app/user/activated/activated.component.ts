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
    const contentWindow = document.getElementsByClassName('mat-sidenav-content');
    if (contentWindow.length > 0) {
      contentWindow.item(0).scrollTop = 0;
    }
  }
}

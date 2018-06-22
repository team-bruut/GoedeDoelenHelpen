import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavMenuService } from '../../nav-menu/nav-menu.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private navMenuService: NavMenuService,
  ) {
    this.navMenuService.setTheme('event');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }

  ngAfterViewInit() {
    const contentWindow = document.getElementsByClassName('mat-sidenav-content');
    if (contentWindow.length > 0) {
      contentWindow.item(0).scrollTop = 0;
    }
  }
}

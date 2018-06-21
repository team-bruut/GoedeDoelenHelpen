import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenuService } from '../../nav-menu/nav-menu.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit, OnDestroy {

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

}

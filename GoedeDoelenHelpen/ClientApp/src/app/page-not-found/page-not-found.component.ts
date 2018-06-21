import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavMenuService } from '../nav-menu/nav-menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private navMenuService: NavMenuService) {
    this.navMenuService.setTheme('registration');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }

  ngAfterViewInit() {
    document.getElementsByClassName('mat-sidenav-content').item(0).scrollTop = 0;
  }
}

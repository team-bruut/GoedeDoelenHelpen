import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavMenuService } from '../nav-menu/nav-menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private navMenuService: NavMenuService) {
    this.navMenuService.setTheme('homepage');
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

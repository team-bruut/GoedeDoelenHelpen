import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { NavMenuService } from './nav-menu.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  content = 'Awesome content!';

  theme = 'default';

  button_1 = {
    text: 'hoe werkt het?',
    link: '/over/hoe-werkt-het'
  };

  button_2 = {
    text: 'waarom?',
    link: '/over/waarom'
  };

  button_3 = {
    text: 'over ons',
    link: '/over/ons'
  };

  button_4 = {
    text: 'inloggen',
    link: '/user/login'
  };

  constructor(
    private navMenuService: NavMenuService
  ) { }

  ngOnInit() {
    this.navMenuService.change.subscribe(theme => {
      this.theme = theme;
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

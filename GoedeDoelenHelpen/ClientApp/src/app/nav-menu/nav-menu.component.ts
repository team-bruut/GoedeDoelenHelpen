import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { NavMenuService } from './nav-menu.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit, OnDestroy {
  isExpanded = false;
  content = 'Awesome content!';

  theme = 'default';
  subscription: Subscription;

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

  user = {
    username: 'fjwillemsen',
    firstname: 'Floris-Jan',
    name: 'Willemsen',
  };

  username_abbreviation = this.user.firstname[0] + '. ' + this.user.name[0] + '.';

  constructor(private navMenuService: NavMenuService) { }

  ngOnInit() {
    this.subscription = this.navMenuService.theme.subscribe(
      theme => {
        this.theme = theme;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

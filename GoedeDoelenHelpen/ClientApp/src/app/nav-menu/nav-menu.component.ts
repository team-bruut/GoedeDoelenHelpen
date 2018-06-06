import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavMenuService } from './nav-menu.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../authentication.service';
import { map } from 'rxjs/operators';

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

  get username_abbreviation() {
    return this.authenticationService.AuthenticationInfo.pipe(map(info => {
      if (info.loggedIn) {
        return `${info.firstName[0]}, ${info.lastName[0]}`;
      } else {
        return '?';
      }
    }));
  }

  get user_logedIn() {
    return this.authenticationService
      .AuthenticationInfo.pipe(
        map(info => info.loggedIn)
      );
  }

  constructor(
    private navMenuService: NavMenuService,
    private authenticationService: AuthenticationService
  ) { }

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

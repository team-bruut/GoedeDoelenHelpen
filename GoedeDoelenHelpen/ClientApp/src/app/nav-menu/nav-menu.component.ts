import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
// import { RoundedButtonDirective } from '../elements/rounded-button.directive';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  isExpanded = false;
  content = 'Awesome content!';

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

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

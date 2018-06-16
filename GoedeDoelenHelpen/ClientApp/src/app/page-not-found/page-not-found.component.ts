import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenuService } from '../nav-menu/nav-menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  constructor(private navMenuService: NavMenuService) {
    this.navMenuService.setTheme('registration');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }
}

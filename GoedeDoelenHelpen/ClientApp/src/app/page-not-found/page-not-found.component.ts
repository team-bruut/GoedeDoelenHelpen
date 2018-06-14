import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuService } from '../nav-menu/nav-menu.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  constructor(private navMenuService: NavMenuService, private router: Router) {
    this.navMenuService.setTheme('registration');
  }

  ngOnInit() {
  }

  toHome() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }
}

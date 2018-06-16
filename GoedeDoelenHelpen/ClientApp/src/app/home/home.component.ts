import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenuService } from '../nav-menu/nav-menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor(private navMenuService: NavMenuService) {
    this.navMenuService.setTheme('homepage');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.navMenuService.setTheme('default');
  }
}

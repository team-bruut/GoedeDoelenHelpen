import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../../nav-menu/nav-menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: NavMenuService) {
    service.setTheme('default');
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../nav-menu/nav-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private service: NavMenuService) {
    service.setTheme('homepage');
  }

  ngOnInit() {
  }
}

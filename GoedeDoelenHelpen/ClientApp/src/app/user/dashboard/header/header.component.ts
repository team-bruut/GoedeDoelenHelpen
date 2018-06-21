import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  pages = [{ title: 'WNF', id: 'GPXQD' }, { title: 'Power2Fly', id: 'JDPQX' }, { title: 'Nierstichting', id: 'OBOKO' }];

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }
}

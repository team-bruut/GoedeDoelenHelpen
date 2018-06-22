import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  pages = [{ title: 'WNF', id: 'GPXQD' }, { title: 'Power2Fly', id: 'JDPQX' }, { title: 'Nierstichting', id: 'OBOKO' }];

  constructor(private authService: AuthenticationService) {

  }

  get username(): Observable<string> {
    return this.authService.AuthenticationInfo.pipe(map(info => info.loggedIn ? info.firstName : ''));
  }

  ngOnInit() {

  }
}

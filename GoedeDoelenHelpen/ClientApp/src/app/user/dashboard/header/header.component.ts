import { Component, OnInit } from '@angular/core';
import { FbService } from '../../../facebook/fb.service';
import { FBAuthModel } from '../../../facebook/FBAuthModel';
import { AuthenticationService } from '../../../authentication.service';
import { WindowWrapper } from '../../../classes/windowwrapper/windowwrapper';
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

  constructor(private authService: AuthenticationService,
    private windowWrapper: WindowWrapper,
    private authenticationService: AuthenticationService,
    private fbService: FbService) {

  }

  get username(): Observable<string> {
    return this.authService.AuthenticationInfo.pipe(map(info => info.loggedIn ? info.firstName : ''));
  }

  ngOnInit() {

  }

  fbAuth(): boolean { // Checks if user is authorized with facebook through backend
    if (this.fbService !== undefined) {
      return (this.fbService.loggedIn());
    } else {
      return true;
    }
  }
  fbLoginPrompt(): boolean {
    return this.fbService.fbLoginPrompt();
  }
}

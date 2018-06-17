import { Component, OnInit } from '@angular/core';
import { FbService } from '../../../facebook/fb.service';
import { FBAuthModel } from '../../../facebook/FBAuthModel';
import { AuthenticationService } from '../../../authentication.service';
import { WindowWrapper } from '../../../classes/windowwrapper/windowwrapper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  pages = [{ title: "WNF", id: "GPXQD" }, { title: "Power2Fly", id: "JDPQX" }, { title: "Nierstichting", id: "OBOKO" }];

  constructor(private authService: AuthenticationService,
    private windowWrapper: WindowWrapper,
    private fbService : FbService) {
    
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
  }

  fbAuth(): boolean { //Checks if user is authorized with facebook through backend
    if (this.fbService != undefined) {
      return (this.fbService.loggedIn());
    } else {
      return true;
    }
  }
  fbLoginPrompt(): boolean {
    return this.fbService.fbLoginPrompt();
  }
}

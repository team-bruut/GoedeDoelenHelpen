import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../../../models/EventsModel';
import { EventsService } from '../../../services/events/events.service';
import { FbService } from '../../../services/fb/fb.service';
import { FBAuthModel } from '../../../models/FBAuthModel';
import { AuthenticationService } from '../../../authentication.service';
import { WindowWrapper } from '../../../classes/windowwrapper/windowwrapper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  isLoggedIn: FBAuthModel;
  //FB: any;

  pages: EventsModel[];

  constructor(private eventsService: EventsService,
    private authService: AuthenticationService,
    private windowWrapper: WindowWrapper) {
    
  }

  ngOnInit() {
    //this.fbAuth();
    this.pages = this.eventsService.getEvents();
    this.authService.getFB().subscribe(result => this.isLoggedIn = result);
    //FB is defined
    
  }

  ngAfterContentInit() {
    console.log(this.windowWrapper.nativeWindow);
  }

  fbAuth() {
    console.log(this.isLoggedIn);
  }

  fbTestLogin() {
    let FB: any = this.windowWrapper.nativeWindow.FB;
    if (FB == undefined) {
      alert("Issues connecting to Facebook Server, please try again by refreshing");
    } else {
      FB.login();
      FB.getLoginStatus(function (result) { console.log(result) });
    }    
  }



}

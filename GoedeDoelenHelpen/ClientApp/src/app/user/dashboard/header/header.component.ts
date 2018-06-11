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

  pages: EventsModel[];

  constructor(private eventsService: EventsService,
    private authService: AuthenticationService,
    private windowWrapper: WindowWrapper,
    private fbService : FbService) {
    
  }

  ngOnInit() {
    this.pages = this.eventsService.getEvents();
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
}

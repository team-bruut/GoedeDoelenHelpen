import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../../../models/EventsModel';
import { EventsService } from '../../../services/events/events.service';
import { FbService } from '../../../services/fb/fb.service';
import { FBAuthModel } from '../../../models/FBAuthModel';
import { AuthenticationService } from '../../../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  isLoggedIn: FBAuthModel;

  pages: EventsModel[];

  constructor(private eventsService: EventsService, private authService : AuthenticationService ) {}

  ngOnInit() {
    //this.fbAuth();
    this.pages = this.eventsService.getEvents();
    this.authService.getFB().subscribe(result => this.isLoggedIn = result);
  }

  fbAuth() {
    console.log(this.isLoggedIn);

  }



}

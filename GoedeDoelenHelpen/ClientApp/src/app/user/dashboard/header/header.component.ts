import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../../../models/EventsModel';
import { EventsService } from '../../../services/events/events.service';
import { FbService } from '../../../services/fb/fb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  pages: EventsModel[];

  constructor(private eventsService: EventsService, private fbService: FbService ) {}

  ngOnInit() {
    this.pages = this.eventsService.getEvents();
  }

  fbAuth() {
    alert("aaa");
    this.fbService.getStatus();
  }

}

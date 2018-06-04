import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../../../models/EventsModel';
import { EventsService } from '../../../services/events/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  images = '../../../assets/images/dashboard';

  pages: EventsModel[];

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.pages = this.eventsService.getEvents();
  }

}

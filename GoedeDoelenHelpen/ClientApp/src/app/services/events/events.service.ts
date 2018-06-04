import { Injectable } from '@angular/core';
import { EventsModel } from '../../models/EventsModel';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: EventsModel[];

  constructor() {
    this.events = [{ title: "WNF", id: "GPXQD" }, { title: "Power2Fly", id: "JDPQX" }, { title: "Nierstichting", id: "OBOKO" }];
  }

  public getEvents(): EventsModel[] {
    return this.events;
  }
}

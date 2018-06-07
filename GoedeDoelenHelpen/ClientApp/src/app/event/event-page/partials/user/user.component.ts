import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  images = '../../../../assets/images/event';
  user: object;
  event: object;

  constructor() { }

  ngOnInit() {
    this.user = {
      firstName: 'Koen',
      lastName: 'de Vries',
    };

    this.event = {
      charity: 'WEM Nederland',
    };
  }

}

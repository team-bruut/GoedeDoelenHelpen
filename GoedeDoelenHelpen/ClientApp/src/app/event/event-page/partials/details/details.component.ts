import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  event: {
    title: string,
    date: string,
    charity: string,
  };

  constructor() {
  }

  ngOnInit() {
    this.event = {
      title: 'Carwash Capelle',
      date: '9 juli 2018',
      charity: 'WEM Nederland',
    };
  }

}

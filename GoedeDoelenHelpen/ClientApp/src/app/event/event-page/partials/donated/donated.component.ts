import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donated',
  templateUrl: './donated.component.html',
  styleUrls: ['./donated.component.scss']
})
export class DonatedComponent implements OnInit {

  donated: {
    amount: string,
  };

  constructor() { }

  ngOnInit() {
    this.donated = {
      amount: '€950,05'
    };
  }

}

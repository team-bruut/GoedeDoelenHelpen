import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-quote',
  templateUrl: './home-quote.component.html',
  styleUrls: ['./home-quote.component.scss']
})
export class HomeQuoteComponent implements OnInit {

  images = '../../assets/images/home/quote';

  constructor() { }

  ngOnInit() {
  }

}

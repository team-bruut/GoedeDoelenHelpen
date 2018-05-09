import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-highlights',
  templateUrl: './home-highlights.component.html',
  styleUrls: ['./home-highlights.component.scss']
})
export class HomeHighlightsComponent implements OnInit {

  images = '../../assets/images/home/highlights';

  constructor() { }

  ngOnInit() {
  }

}

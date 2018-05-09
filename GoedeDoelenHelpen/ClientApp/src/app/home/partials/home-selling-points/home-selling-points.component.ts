import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-selling-points',
  templateUrl: './home-selling-points.component.html',
  styleUrls: ['./home-selling-points.component.scss']
})
export class HomeSellingPointsComponent implements OnInit {

  images = '../../assets/images/home/sellingpoints';

  constructor() { }

  ngOnInit() {
  }

}

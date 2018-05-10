import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-functions',
  templateUrl: './home-functions.component.html',
  styleUrls: ['./home-functions.component.scss']
})
export class HomeFunctionsComponent implements OnInit {

  images = '../../assets/images/home/functions';
  phoneImage: HTMLElement;
  selected = 0;

  constructor() { }

  ngOnInit() {
    this.phoneImage = document.getElementById('phoneImage');
  }

  setPhoneImage(image: string, i: number) {
    this.selected = i;
    this.phoneImage.setAttribute('src', this.images + '/' + image);
  }

}

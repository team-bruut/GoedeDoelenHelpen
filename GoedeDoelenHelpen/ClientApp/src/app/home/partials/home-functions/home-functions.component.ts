import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-functions',
  templateUrl: './home-functions.component.html',
  styleUrls: ['./home-functions.component.scss']
})
export class HomeFunctionsComponent implements OnInit {

  images = '../../assets/images/home/functions';
  phoneImage: HTMLElement;
  selected = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.phoneImage = document.getElementById('phoneImage');
  }

  setPhoneImage(image: string, i: number) {
    this.selected = i;
    this.phoneImage.setAttribute('src', this.images + '/' + image);
  }

  toRegistration() {
    this.router.navigate(['/evenement/register']);
  }
}

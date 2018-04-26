import { Component, OnInit } from '@angular/core';
import { RoundedButtonDirective } from '../../../elements/rounded-button.directive';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  images = '../../assets/images/home/hero';

  constructor() { }

  ngOnInit() {
  }

}

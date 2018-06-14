import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  images = '../../assets/images/home/hero';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  toRegistration() {
    this.router.navigate(['/evenement/register']);
  }
}

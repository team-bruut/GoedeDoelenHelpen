import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-comments',
  templateUrl: './live-comments.component.html',
  styleUrls: ['./live-comments.component.scss']
})
export class LiveCommentsComponent implements OnInit {

  comments: {
    message: string,
    user: string,
    amount: string
  }[];

  constructor() { }

  ngOnInit() {
    this.comments = [
      {
        message: 'Gaaf dat je dit organiseert!',
        user: 'Tommie',
        amount: '5,00',
      },
      {
        message: 'Veel succes! Dat moet helemaal goed gaan komen met jouw instelling!',
        user: 'K. van Dam',
        amount: '23,00',
      },
      {
        message: 'Hopen dat hier heel veel kinderen mee geholpen zijn',
        user: 'Mama van Koen',
        amount: '15,00',
      }
    ];
  }

}

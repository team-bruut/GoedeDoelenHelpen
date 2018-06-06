import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-comments',
  templateUrl: './live-comments.component.html',
  styleUrls: ['./live-comments.component.scss']
})
export class LiveCommentsComponent implements OnInit {

  liveComments: string[];

  constructor() { }

  ngOnInit() {
    this.liveComments = ['This platform is awesome!', 'Check out this website guys!', 'Donate for Save The Children now'];
  }

}

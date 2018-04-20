import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.route.queryParams.pipe(
      map(params => ({code: params['code'], userId: params['userId']})),
      map(params => console.log(params) || params),
      switchMap(params => authenticationService.activateAccount(params))
    ).subscribe(
      () => this.router.navigate(['/user/activated']),
      e => {}
    );
  }

  ngOnInit() {
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-password-reset-link',
  templateUrl: './password-reset-link.component.html',
  styleUrls: ['./password-reset-link.component.css']
})
export class PasswordResetLinkComponent implements OnInit, AfterViewInit {
  passwordResetGroup: FormGroup;
  passwordC: AbstractControl;
  passwordRepeatC: AbstractControl;
  private code: string;
  emailC: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.passwordResetGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordRepeat: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    }, {validator: this.matchingPasswordValidator});

    this.passwordC = this.passwordResetGroup.get('password');
    this.passwordRepeatC = this.passwordResetGroup.get('passwordRepeat');
    this.emailC = this.passwordResetGroup.get('email');

    this.route.queryParams.pipe(
      map(params => ({code: params['code'], userId: params['userId']})),
    ).subscribe(
      (params) => this.code = params.code,
      e => {}
    );
  }

  private matchingPasswordValidator(group: FormGroup) {
    if (group.get('password').value === group.get('passwordRepeat').value) {
      return {
        mismatchedPasswords: true
      };
    }
  }

  onSubmitPasswordReset() {
    this.authenticationService.resetPassword(
      {
        code: this.code,
        password: this.passwordC.value,
        confirmPassword: this.passwordRepeatC.value,
        email: this.emailC.value
      }
    ).subscribe(
      () => alert('uw wachtwoord is veranderd')
    );
  }

  ngAfterViewInit() {
    const contentWindow = document.getElementsByClassName('mat-sidenav-content');
    if (contentWindow.length > 0) {
      contentWindow.item(0).scrollTop = 0;
    }
  }
}

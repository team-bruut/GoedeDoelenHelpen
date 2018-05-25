import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginGroup: FormGroup;
  emailC: AbstractControl;
  passwordC: AbstractControl;
  loginMessage: string;

  passwordResetGroup: FormGroup;
  emailReset: AbstractControl;
  resetPassword = false;
  resetMessage: string;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.userLoginGroup = fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required]
      }
    );

    this.emailC = this.userLoginGroup.get('email');
    this.passwordC = this.userLoginGroup.get('password');

    this.passwordResetGroup = fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])]
      }
    );
    this.emailReset = this.passwordResetGroup.get('email');
  }

  onSubmit()  {
    if (this.userLoginGroup.valid) {
      this.authenticationService
        .login({username: this.emailC.value, password: this.passwordC.value})
        .subscribe(
          success => this.loginMessage = 'Je bent ingelogd',
          err => this.loginMessage = 'Je bent niet ingelogd'
        );
    }
  }

  onSubmitPasswordReset() {
    this.authenticationService
      .forgotPassword(this.emailReset.value)
      .subscribe(
      );
  }

  ngOnInit() {
  }

}

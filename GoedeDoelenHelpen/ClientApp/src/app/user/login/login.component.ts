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
  message: string;

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
  }

  onSubmit()  {
    if (this.userLoginGroup.valid) {
      this.authenticationService
        .login({username: this.emailC.value, password: this.passwordC.value})
        .subscribe(
          success => this.message = 'Je bent ingelogd',
          err => this.message = 'Je bent niet ingelogd'
        );
    }
  }

  ngOnInit() {
  }

}

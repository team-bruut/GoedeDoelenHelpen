import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AuthenticationInfoLoggedIn } from '../../../client';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegisterGroup: FormGroup;
  emailC: AbstractControl;
  passwordC: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.userRegisterGroup = fb.group(
      {
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.required]
      }
    );

    this.emailC = this.userRegisterGroup.get('email');
    this.passwordC = this.userRegisterGroup.get('password');
  }

  onSubmit()  {
    if (this.userRegisterGroup.valid) {
      this.authenticationService.signUp({username: this.emailC.value, password: this.passwordC.value}).subscribe();
    }
  }

  ngOnInit() {
  }

}

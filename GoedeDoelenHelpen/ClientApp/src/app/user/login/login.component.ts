import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { SharedModule } from '../../shared/shared.module';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  userLoginGroup: FormGroup;
  emailC: AbstractControl;
  passwordC: AbstractControl;
  loginMessage: string;

  passwordResetGroup: FormGroup;
  emailReset: AbstractControl;
  resetPassword = false;
  resetMessage: string;

  templateRef: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog,
    private router: Router
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

  setDialog(templateRef) {
    this.templateRef = templateRef;
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.templateRef, {
      width: '250px',
    });
  }

  onSubmit()  {
    if (this.userLoginGroup.valid) {
      this.authenticationService
        .login({username: this.emailC.value as string, password: this.passwordC.value as string})
        .subscribe(
          success => this.router.navigate(['dashboard']),
          err => {
            this.loginMessage = 'Je bent niet ingelogd';
            this.openDialog();
          }
        );
    }
  }

  onSubmitPasswordReset() {
    this.authenticationService
      .forgotPassword(this.emailReset.value)
      .subscribe(
        success => {
          this.resetMessage = 'Er is een mail naar je e-mailadress verzonden';
          this.openDialog();
        },
        err => {
          this.resetMessage = 'Er is iets misgegaan probeer het nog een keer';
          this.openDialog();
        }
      );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const contentWindow = document.getElementsByClassName('mat-sidenav-content');
    if (contentWindow.length > 0) {
      contentWindow.item(0).scrollTop = 0;
    }
  }
}

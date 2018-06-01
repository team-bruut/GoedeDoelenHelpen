import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationInfo } from './authenticationInfo';
import { ActionResult } from './actionResult';
import { ResetPassword } from './resetPassword';

export type SignUpModel = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  profileimage: any;
};

export type EventModel = {
  eventname: string;
  eventdescription: string;
  eventdate: Date;
};

export type SignInModel = {
  username: string;
  password: string;
};

export type ActivateAccountModel = {
  userId: string;
  code: string;
};

@Injectable()
export class AuthenticationService {
  resetPassword(model: ResetPassword): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ResetPassword/`, model);
  }

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  activateAccount(model: ActivateAccountModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/ConfirmEmail`, model);
  }
  signUp(signUpModel: SignUpModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/Register`, signUpModel);
  }

  public login(model: SignInModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/api/Authentication/Login`, model);
  }

  public get AuthenticationInfo(): Observable<AuthenticationInfo> {
    return this.http.get<AuthenticationInfo>(`${this.baseUrl}/api/Authentication/AuthenticationInfo`);
  }

  public forgotPassword(email: string): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ForgotPassword/`, {email: email});
  }
}

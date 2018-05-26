import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationInfo } from './authenticationInfo';
import { ReplaySubject } from 'rxjs';
import { ActionResult } from './actionResult';
import { ResetPassword } from './resetPassword';

export type SignUpModel = {
  username: string;
  password: string;
};

export type ActivateAccountModel = {
  userId: string;
  code: string;
};

@Injectable()
export class AuthenticationService {
  private _authenticationInfo: ReplaySubject<AuthenticationInfo> = new ReplaySubject();
  public get AuthenticationInfo(): Observable<AuthenticationInfo> {
    return this._authenticationInfo;
  }

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    this.refreshAuthInfo();
  }

  resetPassword(model: ResetPassword): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ResetPassword/`, model);
  }

  public refreshAuthInfo() {
    this.http.get<AuthenticationInfo>(`${this.baseUrl}/api/Authentication/AuthenticationInfo`).subscribe(this._authenticationInfo);
  }

  public activateAccount(model: ActivateAccountModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/ConfirmEmail`, model);
  }
  public signUp(signUpModel: SignUpModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/Register`, signUpModel);
  }

  public login(model: SignUpModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/api/Authentication/Login`, model);
  }

  public forgotPassword(email: string): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ForgotPassword/`, {email: email});
  }
}

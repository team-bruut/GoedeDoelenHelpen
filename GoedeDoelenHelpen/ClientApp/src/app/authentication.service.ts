import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationInfo } from './authenticationInfo';
import { ReplaySubject, BehaviorSubject, Subject } from 'rxjs';
import { ActionResult } from './actionResult';
import { ResetPassword } from './resetPassword';
import { FBAuthModel, FBBackendResponse } from './facebook/FBAuthModel';
import { FBAssignModel } from './facebook/FBAssignModel';
import { map, startWith, switchMap, share, shareReplay } from 'rxjs/operators';


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



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _refresh = new Subject<boolean>();
  public readonly AuthenticationInfo: Observable<AuthenticationInfo>;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
    this.AuthenticationInfo = this._refresh.pipe(
      startWith(true),
      switchMap(() => this.http.get<AuthenticationInfo>(`${this.baseUrl}/api/Authentication/AuthenticationInfo`)),
      shareReplay()
    );
  }

  resetPassword(model: ResetPassword): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ResetPassword/`, model);
  }

  public refreshAuthInfo() {
    this._refresh.next(true);
  }

  public activateAccount(model: ActivateAccountModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/ConfirmEmail`, model);
  }
  public signUp(model: SignUpModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/Register`, model);
  }

  public login(model: SignInModel): Observable<void> {
    return this.http.post<{token: string, expiration: string}>(`${this.baseUrl}api/Authentication/createToken`, model).pipe(
      map(({token, expiration}) => {
        localStorage.setItem('token', token);
        localStorage.setItem('TokenExpiration', expiration);
        this.refreshAuthInfo();
        return;
      })
    );
  }

  public forgotPassword(email: string): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ForgotPassword/`, {email: email});
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getExpirationFromToke(): Date {
    return new Date(localStorage.getItem('TokenExpiration'));
  }

  public getFB(): Observable<FBBackendResponse> {
    var a = this.http.get<FBBackendResponse>(`${this.baseUrl}api/Authentication/FacebookInfo`);
    console.log(a);
    return a;
  }

  public assignFB(model: FBAuthModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/AssignFB`, model);
  }
  isAuthenticated(): Observable<boolean> {
    return this.AuthenticationInfo.pipe(map(inf => inf.loggedIn));
}

}

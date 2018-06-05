import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationInfo } from './authenticationInfo';
import { ReplaySubject, BehaviorSubject, Subject } from 'rxjs';
import { ActionResult } from './actionResult';
import { ResetPassword } from './resetPassword';
import { map, startWith, switchMap, share, shareReplay } from 'rxjs/operators';
import { FBAuthModel } from './models/FBAuthModel';
import { FBAssignModel } from './models/FBAssignModel';

export type SignUpModel = {
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
    console.log('construct');
    // this._authenticationInfo = new BehaviorSubject<AuthenticationInfo>({loggedIn: false});
    this.AuthenticationInfo = this._refresh.pipe(
      startWith(true),
      switchMap(() => this.http.get<AuthenticationInfo>(`${this.baseUrl}/api/Authentication/AuthenticationInfo`)),
      shareReplay()
    );
    // this.refreshAuthInfo();
  }

  resetPassword(model: ResetPassword): Observable<ActionResult> {
    return this.http.post<ActionResult>(`${this.baseUrl}api/Authentication/ResetPassword/`, model);
  }

  public refreshAuthInfo() {
    console.log('refresh');
    // this.http.get<AuthenticationInfo>(`${this.baseUrl}/api/Authentication/AuthenticationInfo`).subscribe(this._authenticationInfo);
  }

  public activateAccount(model: ActivateAccountModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/ConfirmEmail`, model);
  }
  public signUp(signUpModel: SignUpModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/Register`, signUpModel);
  }

  public login(model: SignUpModel): Observable<void> {
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

  public getFB(): Observable<FBAuthModel> {
    return this.http.get<FBAuthModel>(`${this.baseUrl}api/Authentication/FacebookInfo`);
  }

  public assignFB(model: FBAssignModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}api/Authentication/AssignFB`, model);
  }
}

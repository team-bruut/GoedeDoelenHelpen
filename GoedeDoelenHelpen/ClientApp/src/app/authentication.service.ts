import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export type SignUpModel = {
  username: string;
  password: string;
};

@Injectable()
export class AuthenticationService {

  signUp(signUpModel: SignUpModel): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/api/Authentication/Register`, signUpModel);
  }
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

}

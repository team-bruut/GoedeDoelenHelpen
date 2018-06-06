import { Injectable } from '@angular/core';
import { FBAuthModel } from '../../models/FBAuthModel';
import { AuthenticationService } from '../../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class FbService {
  public fbstatus: FBAuthModel;

  constructor(private authService: AuthenticationService) {
    this.getStatus();
  }

  getStatus(): boolean {
    console.log("bbb");
    this.authService.getFB().subscribe(result => this.writeFBStatus(result));
    return this.fbstatus.loggedIn;
  }

  writeFBStatus(data: FBAuthModel) {
    this.fbstatus = data;
    alert(this.fbstatus.loggedIn);
    
  }
}

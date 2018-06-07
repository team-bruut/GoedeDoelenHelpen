import { Injectable } from '@angular/core';
import { FBAuthModel } from '../../models/FBAuthModel';
import { AuthenticationService } from '../../authentication.service';
import { WindowWrapper } from '../../classes/windowwrapper/windowwrapper';

@Injectable({
  providedIn: 'root'
})
export class FbService {
  public fbstatus: FBAuthModel;

  constructor(private authService: AuthenticationService) {
  }

  getStatus(): boolean {
    return false;
  }

  

  writeFBStatus(data: FBAuthModel) {
    this.fbstatus = data;
    alert(this.fbstatus.status);
    
  }
}

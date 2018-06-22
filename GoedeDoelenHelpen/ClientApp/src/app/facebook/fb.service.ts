import { Injectable } from '@angular/core';
import { FBAuthModel, FBBackendResponse } from './FBAuthModel';
import { AuthenticationService } from '../authentication.service';
import { WindowWrapper } from '../classes/windowwrapper/windowwrapper';

@Injectable({
  providedIn: 'root'
})
export class FbService {
  public fbstatus: FBBackendResponse

  constructor(private authService: AuthenticationService, private windowWrapper : WindowWrapper) {
    this.authService.getFB().subscribe((result) => {
      this.fbstatus = result;
    });
  }

  getStatus(): FBBackendResponse {
    return this.fbstatus;
  }

  loggedIn(): boolean {
    if (this.fbstatus != undefined) {
      return this.fbstatus.loggedIn;
    } else {
      return false;
    }
  }

  fbLoginPrompt(): boolean {
    let FB: any = this.windowWrapper.nativeWindow.FB;
    if (FB == undefined) {
      return false;
    } else {
      FB.login();
      return true;
    }
    //After this, a user must be redirected to /user/assignfb, but so far I don't know how to await end of login prompt
  }

  fbSharePrompt(): boolean {
    let FB: any = this.windowWrapper.nativeWindow.FB;
    if (FB != undefined) {
      FB.ui({
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
        quote: 'Ik heb een nieuw evenement opgestart om geld in te zamelen voor een goed doel. Daarvoor heb ik uw steun hard nodig!'
      });
      return true;
    }
    return false
  }

  //writeFBStatus(data: FBAuthModel): boolean {
     
  //}
}

import { Component, OnInit } from '@angular/core';
import { WindowWrapper } from '../../classes/windowwrapper/windowwrapper';
import { FBAssignModel } from '../../models/FBAssignModel';
import { FBAuthModel } from '../../models/FBAuthModel';
import { AuthenticationService } from '../../authentication.service';
import { FbService } from '../../services/fb/fb.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(private windowWrapper: WindowWrapper, private authService: AuthenticationService, private fbService: FbService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    let found: boolean = false;
    for (var i = 0; i < 10; i++) {
      if (found == false) {
        if (this.windowWrapper.nativeWindow.FB != undefined) {
          found = true;
        }
      }
    }
    
    if (found == true) {
      this.windowWrapper.nativeWindow.FB.getLoginStatus((result) => this.FBCallBack(result));

    } else {
      alert("Issues with connecting to FB service");
    }
  }

  FBCallBack(data: FBAuthModel): boolean {
    console.log(data);
    if (data != undefined) {
      if (data.status == "connected") {
        console.log("comes here");
        this.authService.assignFB(data).subscribe(
          (result) => console.log(result)

        );
        return true;
      }
    }
    return false;
  }
}

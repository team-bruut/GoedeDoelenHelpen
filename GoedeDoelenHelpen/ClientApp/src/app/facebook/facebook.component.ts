import { Component, OnInit, TemplateRef, ContentChild  } from '@angular/core';
import { WindowWrapper } from '../classes/windowwrapper/windowwrapper';
import { FBAssignModel } from './FBAssignModel';
import { FBAuthModel, FBBackendResponse} from './FBAuthModel';
import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';
import { FbService } from './fb.service';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  templateRef: TemplateRef<any>;
  statusText: string;

  constructor(private windowWrapper: WindowWrapper,
    private authService: AuthenticationService,
    private fbService: FbService,
    private dialog: MatDialog) {


  }

  ngOnInit() {
    this.statusText = "Loading...";
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
      this.statusText = "Storing in server...";
    } else {
      this.statusText = "Something went wrong when trying to reach Facebook, please try again!";
    }
  }

  setDialog(templateRef: TemplateRef<any>) {
    this.templateRef = templateRef;
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.templateRef, {
      width: '250px',
    });
  }

  FBCallBack(data: FBAuthModel): boolean {
    console.log(data);
    if (data != undefined) {
      if (data.status == "connected") {
        this.authService.assignFB(data).subscribe();
        this.statusText = "Facebook hooked up succesfully!";
        return true;
      }
    }
    return false;
  }
}

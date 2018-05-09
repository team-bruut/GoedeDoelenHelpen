import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  // icons
  iconfolder = './assets/images/';
  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl(this.iconfolder + 'LOGO_NO_TEXT.svg'))
           .addSvgIcon('logo_text', sanitizer.bypassSecurityTrustResourceUrl(this.iconfolder + 'LOGO_TEXT.svg'));
  }
}

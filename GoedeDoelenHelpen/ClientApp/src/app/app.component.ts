import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  // icons
  imagefolder = './assets/images/';
  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('logo', sanitizer.bypassSecurityTrustResourceUrl(this.imagefolder + 'LOGO_NO_TEXT.svg'))
           .addSvgIcon('logo_text', sanitizer.bypassSecurityTrustResourceUrl(this.imagefolder + 'LOGO_TEXT.svg'));
  }
}

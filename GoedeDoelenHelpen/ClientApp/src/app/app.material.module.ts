import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }

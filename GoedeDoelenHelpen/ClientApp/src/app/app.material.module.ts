import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  MatStepperModule,
  MatNativeDateModule,
  MatDatepickerModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ]
})
export class AppMaterialModule { }

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
  MatSelectModule,
  MatOptionModule,
  MatDialogModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
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
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
  ]
})
export class CoreMaterialModule { }

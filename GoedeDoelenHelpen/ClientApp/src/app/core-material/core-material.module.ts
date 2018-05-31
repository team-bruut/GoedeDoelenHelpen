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
  ]
})
export class CoreMaterialModule { }

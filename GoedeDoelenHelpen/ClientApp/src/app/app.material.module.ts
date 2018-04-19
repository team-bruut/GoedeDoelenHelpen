import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatMenu, MatMenuItem, MatButton } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    // MatMenu,
    // MatMenuItem,
    // MatButton
  ],
  exports: [
    MatToolbarModule,
    MatInputModule
    // MatMenu,
    // MatMenuItem,
    // MatButton
  ]
})
export class AppMaterialModule { }

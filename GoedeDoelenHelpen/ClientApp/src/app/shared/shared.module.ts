// This should only contain elements that are commonly imported into components and don't interact with data

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from './../core-material/core-material.module';

@NgModule({
  imports: [
    CommonModule,
    CoreMaterialModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    CoreMaterialModule,
  ]
})

export class SharedModule { }

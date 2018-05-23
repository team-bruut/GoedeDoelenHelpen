// This should only contain elements that are commonly imported into components and don't interact with data

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from './../core-material/core-material.module';

import { RoundedButtonDirective } from '../elements/rounded-button.directive';
import { GradientComponent } from '../elements/gradient/gradient.component';
import { CirclesGeneratorComponent } from '../elements/circles/circles.component';

@NgModule({
  imports: [
    CommonModule,
    CoreMaterialModule,
  ],
  declarations: [
    RoundedButtonDirective,
    GradientComponent,
    CirclesGeneratorComponent
  ],
  exports: [
    CommonModule,
    CoreMaterialModule,
    RoundedButtonDirective,
    GradientComponent,
    CirclesGeneratorComponent
  ]
})

export class SharedModule { }

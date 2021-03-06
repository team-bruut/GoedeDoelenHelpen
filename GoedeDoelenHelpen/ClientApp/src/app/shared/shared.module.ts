// This should only contain elements that are commonly imported into components and don't interact with data

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreMaterialModule } from './../core-material/core-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GradientComponent } from '../elements/gradient/gradient.component';
import { CirclesComponent } from '../elements/circles/circles.component';

import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    CoreMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GradientComponent,
    CirclesComponent,
  ],
  exports: [
    CommonModule,
    CoreMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GradientComponent,
    CirclesComponent,
    RouterModule,
  ]
})

export class SharedModule { }

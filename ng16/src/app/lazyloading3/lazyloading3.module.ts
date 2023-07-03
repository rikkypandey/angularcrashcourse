import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloading3RoutingModule } from './lazyloading3-routing.module';
import { Lazyloading3Component } from './lazyloading3.component';


@NgModule({
  declarations: [
    Lazyloading3Component
  ],
  imports: [
    CommonModule,
    Lazyloading3RoutingModule
  ]
})
export class Lazyloading3Module { }

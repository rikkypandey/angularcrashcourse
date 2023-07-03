import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloading2RoutingModule } from './lazyloading2-routing.module';
import { Lazyloading2Component } from './lazyloading2.component';


@NgModule({
  declarations: [
    Lazyloading2Component
  ],
  imports: [
    CommonModule,
    Lazyloading2RoutingModule
  ]
})
export class Lazyloading2Module { }

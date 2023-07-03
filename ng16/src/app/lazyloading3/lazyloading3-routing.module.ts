import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyloading3Component } from './lazyloading3.component';

const routes: Routes = [{ path: '', component: Lazyloading3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyloading3RoutingModule { }

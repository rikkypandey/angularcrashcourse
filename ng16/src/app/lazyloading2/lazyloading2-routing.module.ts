import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyloading2Component } from './lazyloading2.component';

const routes: Routes = [{ path: 'lazymodule2', component: Lazyloading2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyloading2RoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazymodule1Component } from './lazymodule1.component';

const routes: Routes = [{ path: '', component: Lazymodule1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazymodule1RoutingModule { }

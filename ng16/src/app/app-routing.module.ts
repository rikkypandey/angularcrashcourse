import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExampleComponent } from './material-example/material-example.component';
import { InlineExampleComponent } from './inline-example/inline-example.component';

// const routes: Routes = [];
 
const routes: Routes = [
  { path: 'first-component', component: MaterialExampleComponent },
  { path: 'second-component', component: InlineExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 

 }

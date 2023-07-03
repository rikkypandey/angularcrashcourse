import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { MaterialExampleComponent } from './material-example/material-example.component';
import { InlineExampleComponent } from './inline-example/inline-example.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IteratorComponent } from './loop/iterator/iterator.component';
import { RoutingDetailsComponent } from './routing-details/routing-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// const routes: Routes = [];
 
const routes: Routes = [
// it containes objects
{ path:'', redirectTo :'/dashboard', pathMatch:'full'}, // default component
{ path:'dashboard', component:  DashboardComponent},
{ path:'rd', component:  RoutingDetailsComponent},
{ path:'rd/:id', component:  RoutingDetailsComponent},
{ path:'inlineexample', component: InlineExampleComponent },
{ path:'materialexample', component: MaterialExampleComponent },
{ path:'loop', component: IteratorComponent },
{ path: 'lazymodule1', loadChildren: () => import('./lazymodule1/lazymodule1.module').then(m => m.Lazymodule1Module) },
{ path: 'lazyloading2', loadChildren: () => import('./lazyloading2/lazyloading2.module').then(m => m.Lazyloading2Module) },
{ path: 'lazyloading3', loadChildren: () => import('./lazyloading3/lazyloading3.module').then(m => m.Lazyloading3Module) },
{ path:'**', component: NotFoundComponent }, // wild card route - for wrong url or not matching urls
];

@NgModule({
  // for preloading feature module
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy :PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exports RouterModule to be available throughout the application.
})
export class AppRoutingModule {
/***
 * for creating feature module
 */
// ng generate module app-routing --flat --module=app
 

 }

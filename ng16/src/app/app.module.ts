import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopModule } from './loop/loop.module';
import { IteratorComponent } from './loop/iterator/iterator.component';
import { InlineExampleComponent } from './inline-example/inline-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { MaterialExampleComponent } from './material-example/material-example.component';



@NgModule({
  declarations: [
    AppComponent,
    InlineExampleComponent,
    MaterialExampleComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoopModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
   
  ],
  providers: [BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

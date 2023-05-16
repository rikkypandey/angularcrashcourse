import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopModule } from './loop/loop.module';
import { IteratorComponent } from './loop/iterator/iterator.component';
import { InlineExampleComponent } from './inline-example/inline-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InlineExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoopModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

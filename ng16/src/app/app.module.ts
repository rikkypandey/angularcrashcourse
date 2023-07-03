import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IteratorComponent } from './loop/iterator/iterator.component';
import { InlineExampleComponent } from './inline-example/inline-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { MaterialExampleComponent } from './material-example/material-example.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingDetailsComponent } from './routing-details/routing-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './common/header/header.component';
import { UserDataService } from './user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DialogExampleComponent } from './userdialog/dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineExampleComponent,
    MaterialExampleComponent,
    NotFoundComponent,  
    IteratorComponent, RoutingDetailsComponent, DashboardComponent, HeaderComponent, FooterComponent,
     SidebarComponent,
     DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // LoopModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BrowserAnimationsModule,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParrentComponent } from './parrent.component';
import { Parrent2Component } from './parrent2.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrentComponent,
    Parrent2Component,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

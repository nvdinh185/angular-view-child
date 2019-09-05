import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParrentComponent } from './parrent.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParrentComponent } from './parrent.component';
import { ChildComponent } from './child.component';
import { ListpersonComponent } from './listperson/listperson.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrentComponent,
    ChildComponent,
    ListpersonComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

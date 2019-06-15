import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StlyeBindComponent } from './stlye-bind/stlye-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { RefBindComponent } from './ref-bind/ref-bind.component';
import { TwowayBindComponent } from './twoway-bind/twoway-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropBindComponent,
    ClassBindComponent,
    StlyeBindComponent,
    EventBindComponent,
    RefBindComponent,
    TwowayBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

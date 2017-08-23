import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Listing } from './Listing/listing.component'
import { ListingSidebar } from './ListingSidebar/listingSidebar.component'


@NgModule({
  declarations: [
    AppComponent,
    Listing,
  	ListingSidebar 
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [Listing, ListingSidebar]
})
export class AppModule { }

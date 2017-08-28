import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http'

import { Listing } from './Listing/listing.component'
import { ListingSidebar } from './ListingSidebar/listingSidebar.component'

import { AppService } from '../services/app.service'


@NgModule({
  declarations: [
    AppComponent,
    Listing,
  	ListingSidebar 
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

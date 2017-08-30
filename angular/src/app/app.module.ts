import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http'

import { Listing } from './listing/listing.component'
import { AllListings } from './allListings/all-listings.component'
import { NewListing } from './newListing/newListing.component'

import { NavBar } from './navbar/navbar.component'



import { AppService } from '../services/app.service'

import { appRoutes } from './routes'


@NgModule({
  declarations: [
    AppComponent,
    Listing,
    AllListings,
    NewListing,
    NavBar
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

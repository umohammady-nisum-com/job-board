import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http'

import { Listing } from './listing/listing.component'
import { AllListings } from './allListings/all-listings.component'
import { NewListing } from './newListing/newListing.component'

import { NavBar } from './navbar/navbar.component'
import { Error404Component } from './errors/404.component'

import { DataRouteActivator } from '../services/route-activator.service'
import { AppService } from '../services/app.service'

import { appRoutes } from './routes'


@NgModule({
  declarations: [
    AppComponent,
    Listing,
    AllListings,
    NewListing,
    NavBar,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [AppService, DataRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }

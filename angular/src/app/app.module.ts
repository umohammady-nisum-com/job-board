import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Listing } from './Listing/listing.component'

@NgModule({
  declarations: [
    AppComponent,
    Listing
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [Listing]
})
export class AppModule { }

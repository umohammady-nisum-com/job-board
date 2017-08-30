import { Routes } from '@angular/router'
import { Listing } from '../app/listing/listing.component'
import { AllListings } from '../app/allListings/all-listings.component'
import { NewListing } from '../app/newListing/newListing.component'

export const appRoutes:Routes = [

	{ path: 'allListings', component: AllListings },
	{ path: 'listing/:id', component: Listing },
	{ path: 'newListing', component: NewListing },
	{ path: '', redirectTo: '/allListings', pathMatch: 'full'}
]
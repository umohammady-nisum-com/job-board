import { Routes } from '@angular/router'
import { Listing } from '../app/listing/listing.component'
import { AllListings } from '../app/allListings/all-listings.component'

export const appRoutes:Routes = [

	{ path: 'allListings', component: AllListings },
	{ path: 'listing/:id', component: Listing },
	{ path: '', redirectTo: '/allListings', pathMatch: 'full'}
]
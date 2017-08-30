import { Component } from '@angular/core'
import { Router }	from '@angular/router'


@Component ({
	templateUrl: 'newListing.component.html',
	styleUrls: ['./newListing.component.css']
})


export class NewListing  {

	constructor(private router: Router){}

	cancel(){
		this.router.navigate(['allListings'])
	}

}
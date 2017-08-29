import  { Component, OnInit, Input } from '@angular/core'

import { AppService } from '../../services/app.service';
import { JobListing } from '../Models/model';



@Component ({
	selector: 'all-listings',
	template: '<p>testing</p>'
})

export class AllListings {

	@Input() jobListings: JobListing[] = [];


	constructor(private appService: AppService) {}

	/*ngOnInit() {this.getAllListings()}

	getAllListings(){
		this.appService.getAllData()
		.subscribe(
			info => this.jobListings = info,
			error => console.log(error)
			);
	}*/
	

}


import  { Component, OnInit, Input } from '@angular/core'

import { AppService } from '../../services/app.service';
import { JobListing } from '../Models/model';



@Component ({
	templateUrl: 'all-listings.component.html',
	styleUrls: ['all-listings.component.css']

})

export class AllListings {

	@Input() jobListings: JobListing[] = [];


	constructor(private appService: AppService) {}

	ngOnInit() {this.getAllListings()}

	getAllListings(){
		this.appService.getAllData()
		.subscribe(
			info => this.jobListings = info,
			error => console.log(error)
			);
	}
	

}


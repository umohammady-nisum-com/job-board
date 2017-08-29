import { Component, OnInit, Input } from '@angular/core'

import { JobListing } from '../Models/model';
import { AppService } from '../../services/app.service';




@Component ({

	moduleId: module.id,
	templateUrl: 'listing.component.html',
	styleUrls: ['./listing.component.css']
})


export class Listing implements OnInit {

	@Input() jobListing: JobListing;

	constructor(private appService: AppService) {}

	ngOnInit(): void{this.getJobInfo()}

	getJobInfo() {
		this.appService.getData(1)
		.subscribe(
			info => this.jobListing = info,
			error => console.log(error)
			);
	}

}
import { Component, OnInit, Input } from '@angular/core'

import { JobListing} from '../Models/model';
import {AppService} from '../../services/app.service';




@Component ({

	moduleId: module.id,
	selector: 'app-listing',
	templateUrl: 'listing.component.html',
	styleUrls: ['./listing.component.css']
})


export class Listing implements OnInit {

	@Input() jobListing: JobListing[] = [];

	constructor(private appService: AppService) {}

	ngOnInit(): void{this.getJobInfo()}

	getJobInfo() {
		this.appService.getData()
		.subscribe(
			info => this.jobListing = info,
			error => console.log(error)
			);
	}

}
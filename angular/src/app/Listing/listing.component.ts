import { Component, OnInit, Input } from '@angular/core'

import { JobInfo, ContactInfo } from '../Models/model';
import {AppService} from '../../services/app.service';




@Component ({

	moduleId: module.id,
	selector: 'app-listing',
	templateUrl: 'listing.component.html',
	styleUrls: ['./listing.component.css']
})


export class Listing implements OnInit {

	@Input() jobInfo: JobInfo[] = [];

	stuff: string; 

	constructor(private appService: AppService) {}

	ngOnInit(): void{this.getJobInfo()}

	/*getInfo() {
		this.appService.getCurrentTime()
		.subscribe(
			data => this.stuff = JSON.stringify(data),
			err => alert(err)
			);
	}*/

	getJobInfo() {
		this.appService.getData()
		.subscribe(
			info => this.jobInfo = info,
			error => console.log(error)
			);
	}

}
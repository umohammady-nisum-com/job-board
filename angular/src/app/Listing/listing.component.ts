import { Component, OnInit, Input } from '@angular/core'

import { JobInfo } from '../Models/model';

@Component ({

	moduleId: module.id,
	selector: 'app-listing',
	templateUrl: 'listing.component.html',
	styleUrls: ['./listing.component.css']
})


export class Listing implements OnInit {

	@Input() jobInfo: JobInfo;

	ngOnInit(): void{

		this.jobInfo = {
			title: "Programming Intern", 
			description: `This internship is a developing positing at Nisum Technologies.
						The program is meant for students to be able to develop web applications as well as
						be able to understand the DevOps process.`,
			qualifications: "Must be a Computer Science student",
			jobType: "Internship", 
			salary: 12,
			apply: "application",
			location: "Fremont, CA"
		}
	}


}
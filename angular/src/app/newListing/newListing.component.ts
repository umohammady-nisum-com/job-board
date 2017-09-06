import { Component, OnInit } from '@angular/core'
import { Router }	from '@angular/router'

import { JobListing } from '../Models/model' 

import { AppService } from '../../services/app.service'


@Component ({
	templateUrl: 'newListing.component.html',
	styleUrls: ['./newListing.component.css']
})


export class NewListing implements OnInit {

	jobListing: JobListing 

	constructor(private router: Router,
				private appService: AppService){}

	ngOnInit(){

	this.jobListing = {
		id: 3,
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		title: '',
		description: '',
		qualifications: '',
		salary: 0,
		jobType: '',
		apply: '',
		location: ''

		}
	}


	cancel(){
		this.router.navigate(['allListings'])
	}

	onSubmit(){
		this.appService.saveData(this.jobListing)
	}

}
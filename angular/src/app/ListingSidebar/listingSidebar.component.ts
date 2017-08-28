import { Component, OnInit, Input } from '@angular/core'

import { JobListing} from '../Models/model';
import {AppService} from '../../services/app.service';

@Component ({

	moduleId: module.id,
	selector: 'app-listing-sidebar',
	templateUrl: 'listingSidebar.component.html',
	styleUrls: ['./listingSidebar.component.css']
})


export class ListingSidebar implements OnInit {

    @Input() jobListing: JobListing[] = [];


    constructor(private appService: AppService) {}


    ngOnInit(): void{this.getJobListingInfo()}

    getJobListingInfo() {
        this.appService.getData()
        .subscribe(
            info => this.jobListing = info,
            error => console.log(error)
            );
    }
}
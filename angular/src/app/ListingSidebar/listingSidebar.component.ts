import { Component, OnInit, Input } from '@angular/core'

import { JobListing } from '../Models/model';

@Component ({

	moduleId: module.id,
	selector: 'app-listing-sidebar',
	templateUrl: 'listingSidebar.component.html',
	styleUrls: ['./listingSidebar.component.css']
})


export class ListingSidebar implements OnInit {

	@Input() contactInfo: ContactInfo;

    constructor() {}

    ngOnInit(): void {
        this.contactInfo = {
            firstName: 'Test',
            lastName: 'Subject',
            email: 'smtn@smtn.com',
            phone: '1001-1-1-10'
        }
    }
}
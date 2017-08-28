import { Component, OnInit, Input } from '@angular/core'

<<<<<<< HEAD
import { JobListing} from '../Models/model';
import {AppService} from '../../services/app.service';

=======
import { JobListing } from '../Models/model';
>>>>>>> 40e063db397d87ed0bd302ba6109ade33facc7d6

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

   /*ngOnInit(): void {
     //   this.contactInfo = {
       //     firstName: 'Test',
         //   lastName: 'Subject',
           // email: 'smtn@smtn.com',
            //phone: '1001-1-1-10'
        //}
    */}

    getJobListingInfo() {
        this.appService.getData()
        .subscribe(
            info => this.jobListing = info,
            error => console.log(error)
            );
    }
}
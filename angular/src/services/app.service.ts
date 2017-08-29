import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http"

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { JobListing } from '../app/Models/model'



@Injectable() 
export class AppService {


	constructor(private http: Http) {}


	getAllData(): Observable<JobListing[]> {
		return this.http
			.get('/assets/object.json')
            .map((response: Response) => <JobListing[]>response.json());
	}

	getData(id:number): Observable<JobListing> {
		return this.http 
		.get('/assets/object.json/')
        .map((response: Response) => <JobListing>response.json());
	}

}
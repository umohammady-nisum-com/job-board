import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from "@angular/http"

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { JobListing } from '../app/Models/model'




@Injectable() 
export class AppService {


	constructor(private http: Http) {}


	getAllData(): Observable<JobListing[]> {
		return this.http
			.get('/assets/object')
            .map((response: Response) => <JobListing[]>response.json());
	}

	getData(id: number): Observable<JobListing> {

		return this.http 
		.get('/assets/object/')
        .map(res => res.json()
                            .filter(<JobListing>(filter) => filter.id === id));
	}

}
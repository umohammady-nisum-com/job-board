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
			.get('/assets/object.json')
            .map((response: Response) => <JobListing[]>response.json());
	}

	getData(id:number): Observable<JobListing> {
		let headers = new Headers({ 'Content-Type': 'object/json' });
        let options = new RequestOptions({
            headers: headers,
            // Have to make a URLSearchParams with a query string
            search: new URLSearchParams('id=1')
        });
	
		return this.http 
		.get('/assets/object.json/', options)
        .map((response: Response) => <JobListing>response.json());
	}

}
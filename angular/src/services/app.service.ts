import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http"

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { JobInfo } from '../app/Models/model'




@Injectable() 
export class AppService {


	constructor(private http: Http) {}

	getCurrentTime(): Observable<any>{
		return this.http.get('http://date.jsontest.com/')
				.map( res => res.json());
	}

	getData(): Observable<any> {
		return this.http
			.get('/assets/object.json')
            .map((response: Response) => response.json());
	}

}
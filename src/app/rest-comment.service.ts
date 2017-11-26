import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from './comment.object';
import {Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestCommentService {

  host:string = 'http://localhost:8000/';

	

  constructor(private http: HttpClient) { 

  }


  getComments(){
  	return this.http.get(this.host, {observe: 'response'})
  			.toPromise()
  			.then(res=>{
  				return res.body;
  			})
  			.catch(err=>{
  				return Promise.reject(err);
  			});
  		// .subscribe(res=>{
  		// 	return res;
  		// },
  		// err=>{
  		// 	throw err;
  		// });

  }

  postComment(data){
  	return this.http.post(this.host, data, {observe: 'response'})
  		.toPromise()
		.then(res=>{
			return res.body;
		})
		.catch(err=>{
			return Promise.reject(err);
		});
  }


  voteComment(_id, type){

  	return this.http.put(this.host, { _id: _id, type: type } , {observe: 'response'})
  		.toPromise()
  		.then(res=>{
  			return res.body;
  		})
  		.catch(err=>{
  			return Promise.reject(err);
  		});
  }

}

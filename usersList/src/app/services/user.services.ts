import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../components/list/post';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})


export class UserService {
	apiUrl= 'https://reqres.in';
  constructor(private http : HttpClient) { }

  getUsersAll(){
    return this.http.get(this.apiUrl + '/api/users?page=2');
 
 }
 
 
 addUsers(obj){
   return this.http.post(this.apiUrl + '/api/users',obj);
 }
}

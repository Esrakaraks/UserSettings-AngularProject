import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})


export class UserService {
	apiUrl= 'https://reqres.in';
  constructor(private http : HttpClient) { }


getUsersAll(){
    return this.http.get(this.apiUrl + '/api/users?page=2');

}

}

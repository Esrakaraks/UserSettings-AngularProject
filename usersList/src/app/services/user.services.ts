import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../components/list/post';
@Injectable({
    providedIn : 'root'
})
export class UserService {
	apiUrl= 'https://reqres.in';
  constructor(private http : HttpClient) { }

 

addUsers(obj){
   return this.http.post(this.apiUrl + '/api/users',obj);
 }

 getItem(id:number){
   return this.http.get(this.apiUrl+'/api/users?page=id'+id);
 }

 updateUsers(id:number,obj:Post){
   return this.http.put(this.apiUrl+ '/api/users?page=2'+id,obj)
   
}
deleteUsers(id:number){
  return this.http.delete(this.apiUrl+ '/api/users?page=2'+id)
}
}

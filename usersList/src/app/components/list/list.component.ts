
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.services';

import {Post} from './post';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   posts: Post[];
  

  constructor(private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getUsersAll()
    .subscribe((resp:Post[])=> this.posts=resp);
  
    
  }
 adduser(name:HTMLInputElement,job:HTMLInputElement ){
  
   const obj={
     name : name.value,
     job: job.value
     
   };
   this.userservice.addUsers(obj)
    .subscribe((resp:Post) =>{
     this.posts.unshift(resp);
    
  })

 }
}

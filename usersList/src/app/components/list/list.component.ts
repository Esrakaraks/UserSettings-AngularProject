import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.services';
import {Post} from './post';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
 
  post: Post[] = [];

  constructor(private userservice:UserService) { }
  ngOnInit() {
  }
  adduser(name:HTMLInputElement,job:HTMLInputElement ){
  const obj={
      name : name.value,
      job: job.value
    };

   let obs= this.userservice.addUsers(obj)
     obs.subscribe((resp:Post) =>{
         console.log(resp);
          let  usernumber=this.post.push(resp);
          console.log(usernumber);
     
    
   })
 
  }

  




}



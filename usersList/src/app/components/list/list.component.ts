import { UserService } from './../../services/user.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit() {
  }
 adduser(name:HTMLInputElement,job:HTMLInputElement ){
   const obj={
     name : name.value,
     job: job.value
     
   };
   this.userservice.addUsers(obj)
   .subscribe(resp =>{
     console.log(resp);
   });
 }
}

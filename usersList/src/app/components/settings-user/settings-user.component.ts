import { ActivatedRoute,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from './../list/list.component';
import { UserService } from './../../services/user.services';

import {Post} from '../list/post';
@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {
post:Post


  
  constructor(private userservice:UserService,private route:ActivatedRoute,private router: Router) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.userservice.getItem(params.id)
      .subscribe((resp:Post)=>{
        this.post=resp;
      })
    })
  }

  updateuser(id:number,name:HTMLInputElement,job:HTMLInputElement){
    
    const obj :Post={
      name : name.value,
      job: job.value
      
    };
 this.userservice.updateUsers(id,obj)
 .subscribe(resp=>{
  this.router.navigate[''];
 })
  }
  deleteuser(id:number){
    this.userservice.deleteUsers(id)
    .subscribe(resp=>{
      console.log(resp);
    })
  }
      
 

}

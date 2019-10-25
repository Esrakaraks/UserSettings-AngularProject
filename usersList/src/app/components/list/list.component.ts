import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.services';
import {Post} from './post';
import { Pager } from './page';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  pager: Pager;
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
          this.pager = this.getPager(usernumber);
     })

    
 
  }

  
  getPager(totalItem: number, pageSize: number = 3, currentPage: number = 1): Pager {
    let pager = new Pager();
    pager.pageSize = Math.ceil(totalItem / pageSize);
    pager.currentPage = currentPage;
    for (let i = 1; i <= Math.ceil(totalItem / pageSize); i++)
      pager.pageList.push(i);
    return pager;
  }



}



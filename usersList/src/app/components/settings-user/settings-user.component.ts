import { ListComponent } from './../list/list.component';
import { Component, OnInit,Input } from '@angular/core';
import {Post} from '../list/post';
@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent implements OnInit {
  post: Post[] = [];
  
  constructor() { }

  ngOnInit() {
  }

      
      
 

}

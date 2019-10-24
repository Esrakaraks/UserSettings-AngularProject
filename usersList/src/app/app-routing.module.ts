import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddUserComponent } from './components/add-user/add-user.component';


const routes: Routes = [
  {
    path:'',component:ListComponent
  },

{
    path:'add',component:AddUserComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

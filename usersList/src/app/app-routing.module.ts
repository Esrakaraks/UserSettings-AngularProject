import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SettingsUserComponent } from './components/settings-user/settings-user.component';


const routes: Routes = [
  {
    path:'',component:ListComponent
  },
  

{
    path:'userdata/:id',component:SettingsUserComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

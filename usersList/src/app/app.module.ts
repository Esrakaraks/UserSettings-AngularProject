import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserService } from './services/user.services';
import {FormsModule} from '@angular/forms';
import { SettingsUserComponent } from './components/settings-user/settings-user.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddUserComponent,
    SettingsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from "./users_mmanagement/register/register.component";
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from './sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './users_mmanagement/login/login.component';
import { UserComponent } from './users_mmanagement/user/user.component';
import { UpdatepopupComponent } from './users_mmanagement/updatepopup/updatepopup.component';
import { MatCardModule } from '@angular/material/card';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CreateEditModelComponent } from './customer/create-edit-model/create-edit-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    CustomerListComponent,
    CreateEditModelComponent,
    UpdatepopupComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

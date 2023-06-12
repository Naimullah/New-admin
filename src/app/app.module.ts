import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from "./users_mmanagement/register/register.component";
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from './sidebar.component';
import { FormsComponent } from './components/forms/forms.component';
import { GenerateComponent } from './components/forms/general/generate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './users_mmanagement/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FormsComponent,
    GenerateComponent
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
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

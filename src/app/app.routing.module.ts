import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { LoginComponent } from "./users_mmanagement/login/login.component";
import { RegisterComponent } from "./users_mmanagement/register/register.component";
import { AuthGuard } from "./users_mmanagement/guard/auth.guard";
import { UserComponent } from "./users_mmanagement/user/user.component";
import { CustomerListComponent } from "./customer/customer-list/customer-list.component";
const routes: Routes=[
// {path: '', redirectTo:'dashborad',pathMatch:'full',canActivate:[AuthGuard]},
{ path: 'login', component: LoginComponent },
{path: '', component:DashboardComponent,canActivate:[AuthGuard]},
{path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
//   { path: '**', redirectTo: '/login', pathMatch: 'full' },
// {path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'customer', component:CustomerListComponent},
{path: 'user', component:UserComponent,canActivate:[AuthGuard]},

];
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}
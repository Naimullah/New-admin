import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { FormsComponent } from "./components/forms/forms.component";
import { GenerateComponent } from "./components/forms/general/generate.component";
import { LoginComponent } from "./users_mmanagement/login/login.component";
import { RegisterComponent } from "./users_mmanagement/register/register.component";
import { AuthGuard } from "./users_mmanagement/guard/auth.guard";
import { UserComponent } from "./users_mmanagement/user/user.component";
const routes: Routes=[
{path: '', component:DashboardComponent,canActivate:[AuthGuard]},
{path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
{ path: 'login', component: LoginComponent },
//   { path: '**', redirectTo: '/login', pathMatch: 'full' },
{path: 'generate', component:GenerateComponent},
// {path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'user', component:UserComponent,canActivate:[AuthGuard]},
{path: 'forms', component:FormsComponent,children: [
    {path: '', component:GenerateComponent},
    {path: 'generate', component:GenerateComponent}
]}
];
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}
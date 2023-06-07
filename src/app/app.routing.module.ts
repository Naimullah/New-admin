import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { FormsComponent } from "./components/forms/forms.component";
import { GenerateComponent } from "./components/forms/general/generate.component";
const routes: Routes=[
{path: '', component:DashboardComponent},
{path: 'dashboard', component:DashboardComponent},
{path: 'generate', component:GenerateComponent},
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
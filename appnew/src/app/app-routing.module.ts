import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './view/hero/table/table.component';
import { FormComponent } from './view/hero/form/form.component';


const routes: Routes = [
  {path:"", redirectTo:"/dashboard", pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent},
  {path:"tabla", component:TableComponent},
  {path:"form", component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

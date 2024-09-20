import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyerComponent } from './lawyer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component: LawyerComponent,
  children:[
    {path: '' , redirectTo: 'lawyer_dashboard', pathMatch:'full'},
    {
      path:'lawyer_dashboard',
      component : DashboardComponent
    },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }

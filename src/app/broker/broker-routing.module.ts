import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerComponent } from './broker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component: BrokerComponent,
  children:[
    {path: '' , redirectTo: 'broker_dashboard', pathMatch:'full'},
    {
      path:'broker_dashboard',
      component : DashboardComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRoutingModule { }

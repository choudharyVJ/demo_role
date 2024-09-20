import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component: BuyerComponent,
  children:[
    {path: '' , redirectTo: 'buyer_dashboard', pathMatch:'full'},
    {
      path:'buyer_dashboard',
      component : DashboardComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }

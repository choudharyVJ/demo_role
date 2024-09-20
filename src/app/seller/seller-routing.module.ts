import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SellerComponent } from './seller.component';

const routes: Routes = [{
  path:'',
  component: SellerComponent,
  children:[
    {path: '' , redirectTo: 'seller_dashboard', pathMatch:'full'},
    {
      path:'seller_dashboard',
      component : DashboardComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }

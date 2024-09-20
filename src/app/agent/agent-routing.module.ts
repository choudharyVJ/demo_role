import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component: AgentComponent,
  children:[
    {path: '' , redirectTo: 'agent_dashboard', pathMatch:'full'},
    {
      path:'agent_dashboard',
      component : DashboardComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }

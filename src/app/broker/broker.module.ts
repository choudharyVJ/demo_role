import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRoutingModule } from './broker-routing.module';
import { BrokerComponent } from './broker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    BrokerComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrokerRoutingModule
  ]
})
export class BrokerModule { }

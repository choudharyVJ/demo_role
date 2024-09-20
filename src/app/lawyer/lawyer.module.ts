import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerComponent } from './lawyer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    LawyerComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule
  ]
})
export class LawyerModule { }

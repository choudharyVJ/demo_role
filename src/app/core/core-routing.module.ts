import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component: CoreComponent,
    children:[
      {path: '' , redirectTo: 'login', pathMatch:'full'},
      {
        path:'login',
        component : LoginComponent
      },
      {
        path:'register',
        component : RegisterComponent
      }
    ]
  },
  {path: '', redirectTo: 'auth/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

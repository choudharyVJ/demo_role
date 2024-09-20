import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { UserRole } from './enums/user-role.enum';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
    canActivate: [authGuard],
    data:{
      roles: [UserRole.Agent]
    }
  },
  {
    path: 'broker',
    loadChildren: () => import('./broker/broker.module').then(m => m.BrokerModule),
    canActivate: [authGuard],
    data:{
      roles: [UserRole.Broker]
    }
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule),
    canActivate: [authGuard],
    data:{
      roles: [UserRole.Buyer]
    }
  },
  {
    path: 'lawyer',
    loadChildren: () => import('./lawyer/lawyer.module').then(m => m.LawyerModule),
    canActivate: [authGuard],
    data:{
      roles: [UserRole.Lawyer]
    }
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule),
    canActivate: [authGuard],
    data:{
      roles: [UserRole.Seller]
    }
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

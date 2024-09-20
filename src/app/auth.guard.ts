import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { DemoService } from './services/demo.service';
import { Router } from '@angular/router';
import { UserRole } from './enums/user-role.enum'; 

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const demoService = inject(DemoService);
  const router = inject(Router);

  const requiredRoles = route.data['roles'] as UserRole[];

  const user: any = JSON.parse(localStorage.getItem('user') || '{}');
  
  if (!user) {
    router.navigate(['/auth/login']);
    return false;
  }

  if (user.role_id && requiredRoles.includes(user.role_id)) {
    return true;
  } else {
    alert('access-denied');
    return false;
  }
};

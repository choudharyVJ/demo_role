import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logoutUser() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}



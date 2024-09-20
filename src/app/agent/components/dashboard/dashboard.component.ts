import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.url;
      console.log('Current route:', this.currentRoute);
    });
  }

  logoutUser() {
    // console.log('asdsad', this.router.url.split('/')[2]);
    // var userData =  JSON.parse(localStorage.getItem('user') || '');
    // console.log('userData', userData);
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}

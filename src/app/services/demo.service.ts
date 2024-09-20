import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserRole } from '../enums/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  // private apiUrl = ' http://localhost:3000/api/users';
  private apiUrl = 'assets/db.json';

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  constructor(private http: HttpClient, private router: Router) { }

  navigateBasedOnRole(role_id: number): void {
    const role = role_id;
    switch (role) {
      case UserRole.Buyer:
        this.router.navigate(['/buyer/buyer_dashboard']);
        break;
      case UserRole.Agent:
        this.router.navigate(['/agent/agent_dashboard']);
        break;
      case UserRole.Lawyer:
        this.router.navigate(['/lawyer/lawyer_dashboard']);
        break;
      case UserRole.Seller:
        this.router.navigate(['/seller/seller_dashboard']);
        break;
      case UserRole.Broker:
        this.router.navigate(['/broker/broker_dashboard']);
        break;
      default:
        this.router.navigate(['/auth/login']);
        break;
    }
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // getUsers(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl).pipe(
  //     map((response:any) => {        response.users}) 
  //   );
  // }

  // getUserByEmail(email: string): Observable<any> {
  //   return this.getUsers().pipe(map((data: any) => {
  //      return data.users.find((user: any) => { user.email === email })
  //   }));
  // }

  getUserByEmail(email: string): Observable<any> {
    return this.getUsers().pipe(
      map((data: any) => {
        console.log('Data fetched:', data); 
        if (data && Array.isArray(data.users)) {
          const foundUser = data.users.find((user: any) => user.email === email);
          console.log('Found user:', foundUser); 
          return foundUser; 
        } else {
          console.error('Users data is not an array or is undefined');
          return undefined;
        }
      })
    );
  }
  

  // setData(data: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, data, this.httpOptions);
  // }
}

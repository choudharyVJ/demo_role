import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoService } from '../../services/demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private demoSrvc: DemoService , private router : Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.demoSrvc.getUserByEmail(this.loginForm.controls['email'].value).subscribe({
      next: (res: any) => {
        console.log('res',res);
        if (res) {
          localStorage.setItem('user', JSON.stringify(res));
          this.demoSrvc.navigateBasedOnRole(res.role_id);
        } else {
          alert('User not found');
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}

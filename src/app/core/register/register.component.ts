import { Component } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { FormBuilder ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private dataService: DemoService , private fb: FormBuilder, private router : Router) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      repeatPassword: ['']
    });
  }

  onSubmit(): void {
    // if (this.registerForm.valid) {
    //   const formData = this.registerForm.value;
    //   const data = {
    //     name: formData.name,
    //     email: formData.email,
    //     password: formData.password
    //   };
    //   console.log('data', data);
      
    //   this.dataService.setData(data).subscribe((response :any) => {
    //     console.log('Data saved successfully', response);
    //     if(response){
    //       this.router.navigate(['/auth/login']);
    //     }
    //   });
    // }
  }
}

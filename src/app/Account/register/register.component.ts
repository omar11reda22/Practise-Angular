import { Component } from '@angular/core';
import { IRegister } from '../../Model/iregister';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerverb: IRegister = {
    UserName: '',
    Password: '',
    Email: '',
  };
  errors: string[] = [];
  constructor(private authservice: AuthService, private router: Router) {}

  register() {
    this.authservice.Register(this.registerverb).subscribe({
      next: (res) => {
        // response is a token wanna save it on a session
        sessionStorage.setItem('token', res.token);
        // navigate to home page
        this.router.navigateByUrl('home');
      },
      error: (err) => {
        // this.router.navigateByUrl('/error');
        if (Array.isArray(err.error)) {
          this.errors = err.error; // Show these in the HTML
        } else {
          this.errors = ['Unexpected error occurred.'];
        }
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}

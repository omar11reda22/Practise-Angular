import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../Model/ilogin';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginverb: ILogin = {
    Email: '',
    Password: '',
  };
  errors: string[] = [];
  constructor(private authservice: AuthService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    this.authservice.Login(this.loginverb).subscribe({
      next: (res) => {
        // response is a token wanna save it on a session
        sessionStorage.setItem('token', res.token);
        // navigate to home page
        this.router.navigateByUrl('home');
      },
      error: (err) => {
        if (Array.isArray(err.error)) {
          this.errors = err.error; // Show these in the HTML
        } else {
          this.errors = ['Unexpected error occurred.'];
        }
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}

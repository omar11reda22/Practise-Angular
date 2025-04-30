import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../Services/notification.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
// oninit call when the component is loaded at the first time
export class HeaderComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  isloggedin!: boolean;
  username!: string;
  constructor(
    private notification: NotificationService,
    private router: Router,
    private authservice: AuthService
  ) {}
  // this method will call when the component is destroyed
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.notification.getnotification().subscribe({
      next: (n) => {
        console.log(n);
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  logout() {
    sessionStorage.removeItem('token');
    // navigate to login page
    this.router.navigateByUrl('home');
  }
  // check if user logged in or not
  islogged() {
    this.isloggedin = this.authservice.isauth();
    //return this.isloggedin;
  }
  // get the username from the token
  getusername() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const payload = this.authservice.getuserdata();
      if (payload) {
        this.username = payload.name;
      }
    }
  }
}

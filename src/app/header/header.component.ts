import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NotificationService } from '../Services/notification.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
// oninit call when the component is loaded at the first time
export class HeaderComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  isloggedin!: boolean;
  username!: string | undefined;
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
    this.isloggedin = this.authservice.isauth();
    this.username = this.authservice.getuserdata()?.UserName;
    console.log(this.username);
    console.log(this.isloggedin);
    // this.sub = this.notification.getnotification().subscribe({
    //   next: (n) => {
    //     console.log(n);
    //   },
    //   error: () => {
    //     console.log('error');
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   },
    // });
    // this.isloggedin = this.authservice.isauth();
    // this.username = this.authservice.getuserdata()?.name;
  }

  logout() {
    sessionStorage.removeItem('token');
    // navigate to login page
    this.router.navigateByUrl('home');
  }
  // check if user logged in or not
  // islogged() {
  //   this.isloggedin = this.authservice.isauth();
  //   //return this.isloggedin;
  // }
  // get the username from the token
  // getusername() {
  //   const token = sessionStorage.getItem('token');
  //   if (token) {
  //     const payload = this.authservice.getuserdata();
  //     if (payload) {
  //       this.username = payload.name;
  //     }
  //   }
  // }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../Services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
// oninit call when the component is loaded at the first time
export class HeaderComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(private notification: NotificationService) {}
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
}

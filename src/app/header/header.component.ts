import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
// oninit call when the component is loaded at the first time 
export class HeaderComponent implements OnInit {

constructor(private notification:NotificationService) {
  
  
}
  ngOnInit(): void {
    this.notification.getnotification().subscribe({
      next:(n)=>{
console.log(n); 
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        console.log('complete');
      },
    }


    );
  }
}

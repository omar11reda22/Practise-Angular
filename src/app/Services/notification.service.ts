import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification: string[];
  constructor() {
    this.notification = [
      'omar reda aladeeb',
      'ahmed mohamed',
      'ali mohamed',
      'ahmed ali',
    ];
  }

  // try to generate observable
  getnotification(): Observable<string> {
    return new Observable((observer) => {
      let counter = 0;
      let int = setInterval(() => {
        // three mainly methods :
        // next : to send data
        if (counter == this.notification.length) {
          observer.complete();
        }
        observer.next(this.notification[counter]);
        counter++;

        // complete : to complete the observable
        // error : to send error
        if (counter == 0) {
          observer.error();
        }
      }, 2000);
      return {
        unsubscribe() {
          console.log('unsubscribed');
          clearInterval(int);
        },
      };
    });
  }
}

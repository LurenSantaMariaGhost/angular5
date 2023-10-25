import { Injectable } from '@angular/core';
import { User} from './models'
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
  ) {
    this.sendNotification$.subscribe({
      next:(message) =>alert(message)
    })
  }

  private users: User[] = [
      {
        id: 1,
        name: 'Eunbi',
        lastName : 'Won',
        email: 'woneunbi@gmail.com',
      },
      {
        id:2,
        name: 'Son Mi',
        lastName: 'Lee',
        email: 'leesonmi@gmail.com'
      },
    ];

    private sendNotification$ = new Subject<string>()
    private users$ = new BehaviorSubject<User[]>([]);
    private usersObservable$ = this.users$.asObservable()

    sendNotification(notification: string) : void {
      this.sendNotification$.next(notification)
    }

    loadUsers(): void{
      this.users$.next(this.users)
    }

    getUsers(): Observable<User[]>{
      return this.usersObservable$
    }
  }


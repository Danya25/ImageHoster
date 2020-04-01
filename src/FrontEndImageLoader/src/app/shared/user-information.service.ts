import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor() {
  }

  userInfo$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  saveUser(user: User, token: string): void {
    this.userInfo$.next(user);
    console.log(localStorage);
  }

  getUser(): Observable<User> {
    return this.userInfo$.asObservable();
  }
}

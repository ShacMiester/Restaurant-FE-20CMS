import { user } from './../entities/user.entity';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  someFakeUser
  constructor() {
    this.someFakeUser = {
      name: 'Abdullah',
      password: '1',
      userName: 'Abdullah Foqha',
      token: 'AB',
    };
  }

  login():Observable<any> {
    if (this.someFakeUser.token == 'AB')
      localStorage.setItem('LoggedIn', 'true');
    return of(this.someFakeUser)
  }

  user(): Observable<user> {
    return of(this.someFakeUser);
  }

  logout() {
    localStorage.removeItem('LoggedIn');
  }
}

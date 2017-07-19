import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  Headers
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserInfo, User } from '../interfaces';

const USER_INFO = 'userInfo';
const userInfo = {
  get() {
    try {
      const val = JSON.parse(localStorage.getItem(USER_INFO));
      if (val) {
        return val;
      }
      return null;
    } catch (err) {
      return null;
    }
  },
  remove() {
    return new Promise((done) => {
      localStorage.removeItem(USER_INFO);
      done(true);
    });
  },
  set(data) {
    localStorage.setItem(USER_INFO, JSON.stringify(data));
  }
};

@Injectable()
export class UserServices {
  constructor(
    private _http: Http
  ) {}

  public createUser(user: User): Observable<any> {
    return this._http.post(
      'api/users',
      user
    )
    .map((res: Response) => {
      console.log(res);
    });
  }

  public isLogedIn(): boolean {
    const user = userInfo.get();

    return user && user.token ? true : false;
  }

  public setUserInfo(user: UserInfo): void {
    userInfo.set(user);
  }

  public removeUserInfo(): void {
    userInfo.remove();
  }

  public getUserInfo(): any {
    return userInfo.get();
  }
}

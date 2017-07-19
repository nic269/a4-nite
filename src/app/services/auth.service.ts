import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { TEST_ACCOUNT } from '@App/constants';
import { UserServices } from '../services';
import { UserInfo } from '../interfaces';

@Injectable()
export class AuthServices {
  private token$ = new Subject<string>();

  constructor(
    private _http: Http,
    private _userServices: UserServices,
    private _router: Router
  ) {}

  public logIn(): Observable<any> {
    return this._http
      .post(
        '/api/users/login',
        TEST_ACCOUNT
      )
      .map((res: Response) => {
        const token = res.headers.get('x-auth');
        this.token$.next(token);

        if (token) {
          const user: UserInfo = {
            id: res.json()._id,
            email: res.json().email,
            token: res.headers.get('x-auth')
          };

          this._userServices.setUserInfo(user);
          return true;
        }
        return false;
      });
  }

  public getLogin(): Observable<any> {
    return this.token$.asObservable();
  }

  public logOut(): void {
    this._userServices.removeUserInfo();
    this.token$.next('');
    this._router.navigate(['/'])
  }
}

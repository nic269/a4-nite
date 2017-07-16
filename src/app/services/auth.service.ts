import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TEST_ACCOUNT } from '@App/constants';
import { UserServices } from '../services';
import { UserInfo } from '../interfaces';

@Injectable()
export class AuthServices {
  constructor(
    private _http: Http,
    private _userServices: UserServices
  ) {}

  public logIn(): Observable<any> {
    return this._http
      .post(
        '/api/users/login',
        TEST_ACCOUNT
      )
      .map((res: Response) => {
        const token: string = res.headers.get('x-auth');

        if (token) {
          const user: UserInfo = {
            id: res.json()._id,
            userName: res.json().email,
            token: res.headers.get('x-auth')
          };

          this._userServices.setUserInfo(user);
          return true;
        }
        return false;
      });
  }

  public logOut(): void {
    this._userServices.removeUserInfo();
  }
}

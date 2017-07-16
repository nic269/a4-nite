import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UserServices } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _userServices: UserServices,
    private _router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLogedIn = this._userServices.isLogedIn();
    if (isLogedIn) {
      return true;
    }
    this._router.navigate(
      ['/login'],
      {queryParams: { returnUrl: state.url }}
    );
  }
}

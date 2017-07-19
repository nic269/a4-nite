import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TEST_ACCOUNT } from '@App/constants';
import { UserServices } from '../../services';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private _router: Router,
    private _userServices: UserServices
  ) {}

  public register() {
    this._userServices.createUser(TEST_ACCOUNT)
      .subscribe(
        (res) => console.log(res),
        (error: any) => {
          console.log(error, 'error');
        }
      );
  }
}

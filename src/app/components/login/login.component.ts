import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServices } from '../../services';

@Component({
  selector: 'login',
  template: `
    <div class="login">
      <form>
        <div>
          <label for="email">Email: </label>
          <input type="text" name="email">
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" name="password">
        </div>
        <button type="button" (click)="login()">login</button>
      </form>
    </div>
  `
})
export class LoginComponent implements OnInit {
  private prevUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authServices: AuthServices
  ) {}

  public ngOnInit() {
    this.prevUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login() {
    this._authServices.logIn()
      .subscribe((result) => {
        if (result) {
          this._router.navigate([this.prevUrl]);
        }
      });
  }
}

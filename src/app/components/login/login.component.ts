import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServices } from '../../services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
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
      .subscribe(
        (result) => {
          if (result) {
            this._router.navigate([this.prevUrl]);
          }
        },
        (error: any) => {
          console.log(error, 'error');
        }
      );
  }
}

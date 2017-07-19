/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AppState, AuthServices, UserServices } from '../services';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private token: string = '';
  private subscription: Subscription

  constructor(
    public _appState: AppState,
    private _authServices: AuthServices,
    private _userServices: UserServices
  ) {
    const userInfo: any = this._userServices.getUserInfo();

    if (userInfo && userInfo.token) {
      this.token = userInfo.token;
    }
  }

  public ngOnInit() {
    console.log('Initial App State', this._appState.state);
    this.subscription = this._authServices.getLogin()
      .subscribe((token) => {
        this.token = token;
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public logOut(): void {
    this._authServices.logOut();
  }
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

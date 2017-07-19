import { AppComponent } from './app.component';
import { CardListComponent } from './card-list';
import { CardDetailComponent } from './card-detail';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HeaderComponent } from './header';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  CardListComponent,
  CardDetailComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  HeaderComponent,
  NoContentComponent
];

export * from './app.component';
export * from './card-list';
export * from './card-detail';
export * from './login';
export * from './register';
export * from './header';
export * from './home';
export * from './no-content';
export * from './home/x-large';

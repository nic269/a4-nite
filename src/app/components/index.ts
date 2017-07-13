import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  HomeComponent,
  AboutComponent,
  NoContentComponent
];

export * from './app.component';
export * from './home';
export * from './about';
export * from './no-content';
export * from './home/x-large';
